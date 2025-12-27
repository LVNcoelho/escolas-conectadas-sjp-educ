
import React from 'react';
import { AppView } from '../types';
import { 
  LayoutDashboard, 
  UserCircle, 
  MessageCircle, 
  Info, 
  LogOut,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  userRole: 'pai' | 'funcionario';
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, userRole, onLogout }) => {
  const menuItems = [
    { id: 'mural', label: 'Mural', icon: LayoutDashboard },
    { id: 'aluno', label: userRole === 'pai' ? 'Meu Aluno' : 'Alunos', icon: UserCircle },
    { id: 'forum', label: 'Mensagens', icon: MessageCircle },
    { id: 'informativos', label: 'Informativos', icon: Info },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-30 transition-transform md:translate-x-0 -translate-x-full md:block shadow-sm">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          E
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800 leading-tight">Escolas conectadas SJP</h1>
          <p className="text-xs text-gray-500 capitalize">{userRole}</p>
        </div>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as AppView)}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
              activeView === item.id 
                ? 'bg-lime-500 text-white shadow-md' 
                : 'text-gray-600 hover:bg-lime-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className={activeView === item.id ? 'text-white' : 'text-lime-600 group-hover:text-lime-700'} />
              <span className="font-medium">{item.label}</span>
            </div>
            {activeView === item.id && <ChevronRight size={16} />}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100 bg-yellow-50/30">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 p-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
