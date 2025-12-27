
import React, { useState } from 'react';
import { InfoSubView } from '../types';
import { MOCK_LUNCH, MOCK_BUS } from '../constants.tsx';
import { Utensils, CalendarDays, Bus, MapPin, Clock, Coffee, X, Navigation } from 'lucide-react';

const InformativosView: React.FC = () => {
  const [subView, setSubView] = useState<InfoSubView>('merenda');
  const [trackingBus, setTrackingBus] = useState<typeof MOCK_BUS[0] | null>(null);

  const tabs = [
    { id: 'merenda', label: 'Merenda', icon: Utensils },
    { id: 'eventos', label: 'Eventos', icon: CalendarDays },
    { id: 'onibus', label: 'Ônibus', icon: Bus },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 inline-flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubView(tab.id as InfoSubView)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              subView === tab.id ? 'bg-lime-500 text-white shadow-md' : 'text-gray-500 hover:bg-lime-50'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px] relative">
        {subView === 'merenda' && (
          <div className="p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-yellow-100 text-yellow-700 rounded-2xl">
                <Coffee size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-800">Cardápio Semanal</h3>
                <p className="text-gray-500">Refeições equilibradas e nutritivas para nossos alunos.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {MOCK_LUNCH.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-4 border-2 border-transparent hover:border-lime-200 transition-all group">
                  <p className="text-xs font-black uppercase text-lime-600 tracking-wider mb-2 group-hover:scale-110 transition-transform origin-left">{item.dia}</p>
                  <p className="text-sm font-bold text-gray-800 leading-snug mb-3 h-16">{item.prato}</p>
                  <div className="pt-3 border-t border-gray-200 flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase text-yellow-600">Sobremesa:</span>
                    <span className="text-xs font-semibold text-gray-600">{item.sobremesa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {subView === 'eventos' && (
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-black text-gray-800">Calendário de Atividades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { date: '12/10', title: 'Comemoração Dia das Crianças', time: '08:00 - 12:00', type: 'Festivo' },
                { date: '18/10', title: 'Entrega de Notas 3º Bimestre', time: '14:00 - 18:00', type: 'Pedagógico' },
                { date: '25/10', title: 'Gincana Esportiva Interescolar', time: 'Dia Todo', type: 'Esporte' },
                { date: '05/11', title: 'Início Projetos Feira de Ciências', time: '10:00', type: 'Pedagógico' },
              ].map((ev, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
                  <div className="w-16 h-16 bg-lime-100 rounded-2xl flex flex-col items-center justify-center text-lime-700 font-bold shrink-0">
                    <span className="text-xs">{ev.date.split('/')[1]}</span>
                    <span className="text-xl leading-none">{ev.date.split('/')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-gray-400">{ev.type}</span>
                    <h4 className="font-bold text-gray-800">{ev.title}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock size={12} /> {ev.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {subView === 'onibus' && (
          <div className="p-8">
            <h3 className="text-2xl font-black text-gray-800 mb-6">Transporte Escolar</h3>
            <div className="space-y-4">
              {MOCK_BUS.map((bus, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-3xl gap-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-lime-100 text-lime-700 rounded-2xl">
                      <Bus size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-gray-800">{bus.rota}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        Motorista: <span className="font-bold">{bus.motorista}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                      <span className="text-[10px] font-black uppercase text-gray-400">Horários</span>
                      <span className="text-sm font-bold text-gray-700">{bus.horario}</span>
                    </div>
                    <button 
                      onClick={() => setTrackingBus(bus)}
                      className="px-6 py-2 bg-lime-500 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-lime-600 transition-colors shadow-md active:scale-95"
                    >
                      <MapPin size={16} /> Rastrear
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal de Rastreio Fictício */}
        {trackingBus && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-6 bg-lime-500 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Navigation size={20} className="animate-pulse" />
                  </div>
                  <h4 className="font-black text-lg">Rastreio em Tempo Real</h4>
                </div>
                <button 
                  onClick={() => setTrackingBus(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-lime-100 rounded-full flex items-center justify-center mb-4 relative">
                    <MapPin size={40} className="text-lime-600 z-10" />
                    <div className="absolute inset-0 bg-lime-400 rounded-full animate-ping opacity-25"></div>
                  </div>
                  <h5 className="text-2xl font-black text-gray-800 leading-tight">{trackingBus.rota}</h5>
                  <p className="text-gray-500 font-medium">Motorista {trackingBus.motorista}</p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Localização Atual</span>
                    <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-xs font-black animate-pulse">GPS ATIVO</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                      <div className="w-0.5 h-12 bg-gray-200 mx-auto"></div>
                      <div className="w-3 h-3 border-2 border-gray-300 rounded-full bg-white"></div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <p className="text-lg font-black text-gray-800">Agrovila do Coqueiro</p>
                        <p className="text-sm text-gray-500">O veículo acabou de passar por este ponto.</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-400">Próxima Parada: Escola Municipal</p>
                        <p className="text-sm text-gray-400 italic">Previsão em 8 minutos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                    <p className="text-[10px] font-black text-yellow-600 uppercase mb-1">Status</p>
                    <p className="text-sm font-bold text-gray-700">Em Movimento</p>
                  </div>
                  <div className="flex-1 p-4 bg-lime-50 rounded-2xl border border-lime-100">
                    <p className="text-[10px] font-black text-lime-600 uppercase mb-1">Velocidade</p>
                    <p className="text-sm font-bold text-gray-700">42 km/h</p>
                  </div>
                </div>

                <button 
                  onClick={() => setTrackingBus(null)}
                  className="w-full py-4 bg-gray-800 text-white font-black rounded-2xl hover:bg-gray-900 transition-colors shadow-lg active:scale-[0.98]"
                >
                  Fechar Mapa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InformativosView;
