
export type AppView = 'mural' | 'aluno' | 'forum' | 'informativos';
export type InfoSubView = 'merenda' | 'eventos' | 'onibus';
export type UserRole = 'pai' | 'funcionario' | null;

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Aviso' | 'Evento' | 'Urgente';
}

export interface Student {
  name: string;
  avatar: string;
  grade: string;
  attendance: {
    present: number;
    absent: number;
  };
  subjects: {
    name: string;
    grade: number;
    status: 'Aprovado' | 'Recuperação' | 'Em curso';
  }[];
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
}
