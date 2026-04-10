import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Iyan Eman Juma (Issa Aman Juma). 
Your goal is to answer questions about him based on his profile details:
- Full Name: ISSA AMAN JUMA (Known as IYAN EMAN JUMA)
- Birth: 25 December 2002, Tabora Tanzania.
- Zodiac: Capricorn ♑.
- Religion: Islam ☪.
- Profession: Graphics Designer & Multimedia at XMATION COMPANY.
- Websites: xmationmedia.co.tz, xmation.co.tz.
- Education: General Secondary.
- Hobbies: Watching Movies, Listening to Music.
- Current City: Dar es Salaam.
- Physical: 174cm, BMI 20, Moderately Slim.
- Health: Good, Skin Allergy, Blood group unknown.
- Contact: issaaman603@gmail.com, WhatsApp: +255740330004 / +255760450005.

Be helpful, futuristic, and professional. Keep responses concise.
`;

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello 👋 I am IYAN Assistant. Ask me anything about Iyan Eman Profile 2026.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userText,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] mt-5">
      <div className="font-display text-base md:text-lg mb-3 tracking-wider flex items-center gap-2">
        <Bot size={20} className="text-glow-cyan" /> AI Chat Assistant
      </div>

      <p className="text-[#9bb3c9] text-xs md:text-sm leading-relaxed mb-4">
        Ask me anything about Iyan Eman Juma. Powered by Gemini AI.
      </p>

      <div className="flex flex-col gap-3 h-[420px]">
        <div className="flex-1 overflow-y-auto p-3 rounded-2xl border border-white/10 bg-black/25 space-y-3 custom-scrollbar">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`msg p-3 rounded-2xl text-xs md:text-sm leading-relaxed max-w-[90%] ${
                  msg.role === 'user' 
                    ? 'bg-glow-cyan/10 border border-glow-cyan/25 self-end ml-auto' 
                    : 'bg-glow-purple/10 border border-glow-purple/25 self-start'
                }`}
              >
                <div className="flex items-center gap-2 mb-1 opacity-60">
                  {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  <span className="text-[10px] uppercase font-bold">{msg.role}</span>
                </div>
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <div className="bg-glow-purple/10 border border-glow-purple/25 p-3 rounded-2xl text-xs self-start animate-pulse">
              Thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-2xl border border-white/10 outline-none bg-white/5 text-white text-xs md:text-sm focus:border-glow-cyan/50 transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="px-4 py-3 rounded-2xl font-display font-extrabold text-black bg-gradient-to-r from-glow-cyan/80 to-glow-purple/80 hover:scale-105 transition-transform disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
