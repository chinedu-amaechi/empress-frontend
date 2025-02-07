"use client";

import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "Empress", text: "Hi, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // Ref to auto-scroll to latest message
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Placeholder bot responses
  const botResponses = [
    "I'm still learning! 😊",
    "Can you clarify that?",
    "That's interesting! Tell me more.",
    "I'm just a placeholder for now!",
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages((prev) => [
        ...prev,
        { sender: "Empress", text: randomResponse },
      ]);
    }, 1000);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 rounded-full bg-black hover:bg-gray-700 text-white shadow-lg transition duration-300"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <MessageCircle size={30} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg w-96 h-[500px] flex flex-col transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b dark:border-gray-700">
            <div>
              <h2 className="font-semibold text-lg">Chatbot</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Powered by Empress
              </p>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={30} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <div
                  className={`rounded-full p-2 w-8 h-8 flex items-center justify-center ${
                    msg.sender === "Empress"
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.sender === "Empress" ? "🤖" : "👤"}
                </div>
                <p className="leading-relaxed">
                  <span className="block font-bold">{msg.sender}</span>
                  {msg.text}
                </p>
              </div>
            ))}
            {/* Invisible div to scroll to latest message */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form
            onSubmit={handleSend}
            className="flex items-center border-t pt-2 dark:border-gray-700"
          >
            <input
              type="text"
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
