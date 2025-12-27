
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MuralView from './components/MuralView';
import StudentView from './components/StudentView';
import ForumView from './components/ForumView';
import InformativosView from './components/InformativosView';
import { AppView, UserRole } from './types';
import { LogIn, Users, ShieldCheck, Heart } from 'lucide-react';

const LoginPage: React.FC<{ onLogin: (role: 'pai' | 'funcionario') => void }> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-lime-500 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative z-10 animate-in zoom-in duration-500">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-lime-500 rounded-3xl mx-auto flex items-center justify-center text-white mb-6 shadow-xl shadow-lime-200">
            <LogIn size={40} strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2 leading-tight">Escolas conectadas SJP</h1>
          <p className="text-gray-400 font-medium">Conectando escola e família</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => onLogin('pai')}
            className="w-full group flex items-center gap-4 p-5 rounded-3xl border-2 border-gray-100 hover:border-lime-500 hover:bg-lime-50 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 bg-lime-100 text-lime-600 rounded-2xl flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-colors">
              <Heart size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-800">Responsável</p>
              <p className="text-xs text-gray-400">Acompanhe seu filho</p>
            </div>
          </button>

          <button 
            onClick={() => onLogin('funcionario')}
            className="w-full group flex items-center gap-4 p-5 rounded-3xl border-2 border-gray-100 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-800">Funcionário</p>
              <p className="text-xs text-gray-400">Portal administrativo</p>
            </div>
          </button>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 font-medium">Problemas com o acesso? <a href="#" className="text-lime-600 font-bold hover:underline">Contate o suporte</a></p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(null);
  const [activeView, setActiveView] = useState<AppView>('mural');

  const handleLogin = (selectedRole: 'pai' | 'funcionario') => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
    setActiveView('mural');
  };

  if (!role) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'mural': return <MuralView />;
      case 'aluno': return <StudentView />;
      case 'forum': return <ForumView />;
      case 'informativos': return <InformativosView />;
      default: return <MuralView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        userRole={role}
        onLogout={handleLogout}
      />
      
      <main className="md:ml-64 p-6 md:p-10 lg:p-16">
        <div className="max-w-6xl mx-auto pb-20">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-40">
        <button 
          onClick={() => setActiveView('mural')} 
          className={`flex flex-col items-center gap-1 ${activeView === 'mural' ? 'text-lime-600' : 'text-gray-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeView === 'mural' ? 'bg-lime-50' : ''}`}>
            <Users size={20} />
          </div>
          <span className="text-[10px] font-bold">Mural</span>
        </button>
        <button 
          onClick={() => setActiveView('aluno')} 
          className={`flex flex-col items-center gap-1 ${activeView === 'aluno' ? 'text-lime-600' : 'text-gray-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeView === 'aluno' ? 'bg-lime-50' : ''}`}>
            <Heart size={20} />
          </div>
          <span className="text-[10px] font-bold">Aluno</span>
        </button>
        <button 
          onClick={() => setActiveView('forum')} 
          className={`flex flex-col items-center gap-1 ${activeView === 'forum' ? 'text-lime-600' : 'text-gray-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeView === 'forum' ? 'bg-lime-50' : ''}`}>
            <ShieldCheck size={20} />
          </div>
          <span className="text-[10px] font-bold">Chat</span>
        </button>
        <button 
          onClick={() => setActiveView('informativos')} 
          className={`flex flex-col items-center gap-1 ${activeView === 'informativos' ? 'text-lime-600' : 'text-gray-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeView === 'informativos' ? 'bg-lime-50' : ''}`}>
            <Users size={20} />
          </div>
          <span className="text-[10px] font-bold">Info</span>
        </button>
      </div>
    </div>
  );
};

export default App;
