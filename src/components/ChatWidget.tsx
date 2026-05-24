import React, { useEffect, useRef, useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const ChatWidget: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        { from: 'bot', text: 'Hi! How can I help you today?' },
    ]);
    const [input, setInput] = useState('');
    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    const send = () => {
        const text = input.trim();
        if (!text) return;
        setMessages((s) => [...s, { from: 'user', text }]);
        setInput('');

        // mock bot reply
        setTimeout(() => {
            setMessages((s) => [...s, { from: 'bot', text: "Thanks — we'll get back to you shortly." }]);
        }, 700);
    };

    return (
        <div className="fixed bottom-24 right-6 z-60 w-[320px] max-w-sm bg-dark-200/95 backdrop-blur rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-dark-300/80">
                <div className="text-sm font-semibold">Support Chat</div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onClose}
                        aria-label="Close chat"
                        className="text-gray-300 hover:text-white"
                    >
                        ✕
                    </button>
                </div>
            </div>

            <div ref={listRef} className="p-3 h-64 overflow-y-auto space-y-3">
                {messages.map((m, i) => (
                    <div key={i} className={m.from === 'user' ? 'text-right' : 'text-left'}>
                        <div
                            className={`inline-block px-3 py-2 rounded-lg text-sm ${m.from === 'user' ? 'bg-primary-600 text-white' : 'bg-dark-300/60 text-gray-200'
                                }`}
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    send();
                }}
                className="px-3 py-3 bg-dark-300/70 flex items-center gap-2"
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-md bg-dark-200 border border-white/10 text-white focus:outline-none"
                />
                <button type="submit" className="px-3 py-2 bg-primary-600 rounded-md text-white">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatWidget;
