import type { Member } from '../types/types';

interface IntegrantesCardMinimizadoProps {
  member: Member;
}

export function IntegrantesCardMinimizado({ member }: IntegrantesCardMinimizadoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img 
        src={member.image} 
        alt={`Foto de ${member.name}`}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
    </div>
  );
}