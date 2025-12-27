
import React from 'react';
import { MOCK_NEWS } from '../constants.tsx';
import { Bell, Calendar, Flame, Clock } from 'lucide-react';

const MuralView: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Mural de Avisos</h2>
          <p className="text-gray-500 font-medium">Fique por dentro das novidades da nossa escola.</p>
        </div>
        <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-xl text-yellow-700 font-bold border border-yellow-200">
          <Bell size={18} />
          <span>3 novos avisos hoje</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_NEWS.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1 ${
                item.category === 'Urgente' ? 'bg-red-100 text-red-600' :
                item.category === 'Evento' ? 'bg-lime-100 text-lime-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {item.category === 'Urgente' && <Flame size={12} />}
                {item.category === 'Evento' && <Calendar size={12} />}
                {item.category === 'Aviso' && <Bell size={12} />}
                {item.category}
              </span>
              <div className="flex items-center gap-1 text-gray-400 text-xs font-bold">
                <Clock size={12} />
                {item.date}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
            <p className="text-gray-600 text-sm flex-1 leading-relaxed">
              {item.content}
            </p>
            <button className="mt-6 w-full py-3 bg-gray-50 text-gray-800 font-bold rounded-2xl hover:bg-lime-500 hover:text-white transition-colors flex items-center justify-center gap-2 group">
              Ler mais <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuralView;
