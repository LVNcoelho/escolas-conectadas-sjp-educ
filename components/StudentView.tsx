
import React from 'react';
import { MOCK_STUDENT } from '../constants.tsx';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { User, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

const StudentView: React.FC = () => {
  const data = [
    { name: 'Presença', value: MOCK_STUDENT.attendance.present, color: '#84cc16' },
    { name: 'Faltas', value: MOCK_STUDENT.attendance.absent, color: '#facc15' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img 
            src={MOCK_STUDENT.avatar} 
            alt={MOCK_STUDENT.name} 
            className="w-32 h-32 rounded-full border-4 border-lime-500 shadow-md object-cover"
          />
          <div className="flex-1 text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">{MOCK_STUDENT.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold flex items-center gap-1">
                <User size={14} /> {MOCK_STUDENT.grade}
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold flex items-center gap-1">
                <BookOpen size={14} /> Matrícula: 2024.0012
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Lucas é um aluno participativo e demonstra grande interesse nas áreas de exatas. Mantém um bom relacionamento com colegas e professores.
            </p>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            Frequência Escolar
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-2">
            <p className="text-3xl font-black text-lime-600">{MOCK_STUDENT.attendance.present}%</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Taxa de Presença</p>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Boletim Informativo</h3>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bimestre: 3º</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Disciplina</th>
                <th className="px-6 py-4">Nota</th>
                <th className="px-6 py-4">Situação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_STUDENT.subjects.map((subject, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-700">{subject.name}</td>
                  <td className="px-6 py-4">
                    <span className={`text-lg font-bold ${subject.grade >= 7 ? 'text-lime-600' : 'text-red-500'}`}>
                      {subject.grade.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {subject.status === 'Aprovado' ? (
                        <CheckCircle size={16} className="text-lime-500" />
                      ) : subject.status === 'Recuperação' ? (
                        <AlertCircle size={16} className="text-red-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin"></div>
                      )}
                      <span className={`text-sm font-medium ${
                        subject.status === 'Aprovado' ? 'text-lime-700' : 
                        subject.status === 'Recuperação' ? 'text-red-700' : 'text-yellow-700'
                      }`}>
                        {subject.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
