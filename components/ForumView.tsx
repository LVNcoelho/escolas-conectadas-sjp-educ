
import React, { useState } from 'react';
import { MOCK_CONTACTS, MOCK_MESSAGES } from '../constants.tsx';
import { Send, Search, MoreVertical, Phone, Video } from 'lucide-react';

const ForumView: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState(MOCK_CONTACTS[0]);
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: 'Você',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-[calc(100vh-160px)] flex overflow-hidden animate-in zoom-in-95 duration-500">
      {/* Sidebar Contacts */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-black text-gray-800 mb-4">Chat Escolar</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar contato..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-lime-500 transition-all outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {MOCK_CONTACTS.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${
                selectedContact.id === contact.id ? 'bg-lime-50 border-l-4 border-lime-500 shadow-sm' : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-lime-700 font-bold uppercase">
                {contact.name.charAt(0)}
              </div>
              <div className="text-left overflow-hidden">
                <p className="font-bold text-gray-800 truncate">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-gray-50/50">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold uppercase">
              {selectedContact.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-800">{selectedContact.name}</p>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Phone size={20} className="hover:text-lime-600 cursor-pointer transition-colors" />
            <Video size={20} className="hover:text-lime-600 cursor-pointer transition-colors" />
            <MoreVertical size={20} className="hover:text-lime-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${
                msg.isMe ? 'bg-lime-500 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${msg.isMe ? 'text-lime-100 text-right' : 'text-gray-400'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua mensagem..." 
              className="flex-1 px-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-lime-500 outline-none transition-all"
            />
            <button 
              type="submit"
              className="p-3 bg-lime-500 text-white rounded-2xl hover:bg-lime-600 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForumView;
