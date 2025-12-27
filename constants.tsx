
import { NewsItem, Student, Contact, ChatMessage } from './types';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Reunião de Pais e Mestres',
    content: 'Convidamos todos os pais para a nossa primeira reunião bimestral que ocorrerá no auditório principal às 19h.',
    date: '15 Out',
    category: 'Aviso'
  },
  {
    id: '2',
    title: 'Feriado Escolar - Dia do Professor',
    content: 'Informamos que não haverá aulas na próxima segunda-feira devido ao feriado do Dia do Professor.',
    date: '13 Out',
    category: 'Urgente'
  },
  {
    id: '3',
    title: 'Feira de Ciências 2024',
    content: 'Preparem os projetos! Nossa feira de ciências anual está chegando. Inscrições abertas na secretaria.',
    date: '20 Out',
    category: 'Evento'
  }
];

export const MOCK_STUDENT: Student = {
  name: 'Lucas Silva Pereira',
  avatar: 'https://picsum.photos/seed/student1/200/200',
  grade: '8º Ano B',
  attendance: {
    present: 88,
    absent: 12
  },
  subjects: [
    { name: 'Matemática', grade: 8.5, status: 'Aprovado' },
    { name: 'Português', grade: 7.0, status: 'Em curso' },
    { name: 'História', grade: 9.2, status: 'Aprovado' },
    { name: 'Ciências', grade: 5.8, status: 'Recuperação' },
    { name: 'Educação Física', grade: 10, status: 'Aprovado' }
  ]
};

export const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Prof. Ana Garcia', role: 'Matemática' },
  { id: '2', name: 'Diretora Mariana', role: 'Direção' },
  { id: '3', name: 'Coordenador João', role: 'Coordenação' },
  { id: '4', name: 'Secretaria', role: 'Atendimento' }
];

export const MOCK_MESSAGES: ChatMessage[] = [
  { id: '1', sender: 'Prof. Ana Garcia', text: 'Olá, gostaria de falar sobre o desempenho do Lucas.', timestamp: '10:30', isMe: false },
  { id: '2', sender: 'Você', text: 'Olá professora, claro! Podemos agendar uma conversa?', timestamp: '10:32', isMe: true }
];

export const MOCK_LUNCH = [
  { dia: 'Segunda', prato: 'Arroz, Feijão, Frango Grelhado e Salada', sobremesa: 'Maçã' },
  { dia: 'Terça', prato: 'Macarronada à Bolonhesa e Legumes', sobremesa: 'Gelatina' },
  { dia: 'Quarta', prato: 'Feijoada Escolar e Couve', sobremesa: 'Laranja' },
  { dia: 'Quinta', prato: 'Arroz Carreteiro e Mix de Folhas', sobremesa: 'Banana' },
  { dia: 'Sexta', prato: 'Peixe ao Molho e Purê de Batatas', sobremesa: 'Pudim' }
];

export const MOCK_BUS = [
  { rota: 'Linha 101 - Centro', motorista: 'Sr. Roberto', horario: '06:30 / 12:30' },
  { rota: 'Linha 102 - Bairro Novo', motorista: 'Sr. Carlos', horario: '06:45 / 12:45' },
  { rota: 'Linha 103 - Vila Rural', motorista: 'Dona Vera', horario: '06:15 / 12:15' }
];
