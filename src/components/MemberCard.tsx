import linkedinIcon from '../assets/icons8-linkedin.svg';
import githubIcon from '../assets/icons8-github.svg';

interface Member {
  name: string;
  rm: string;
  description: string;
  quote: string;
  image: string;
  linkedin: string;
  github: string;
  layout: 'image-left' | 'image-right';
}

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  const cardLayout = member.layout === 'image-left' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${cardLayout} w-full max-w-5xl`}>
      <div className="md:w-1/3 flex-shrink-0">
        <img src={member.image} alt={`Foto de ${member.name}`} className="w-full h-full object-cover" />
        <p className="text-center bg-gray-100 py-1 text-sm text-texto-secundario md:hidden">RM: {member.rm}</p>
      </div>

      <div className="p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">{member.name}</h2>
          <p className="text-sm text-texto-secundario hidden md:block">RM: {member.rm}</p>
          <p className="mt-4 text-texto-secundario">{member.description}</p>
          <p className="mt-2 text-texto-secundario italic">"{member.quote}"</p>
        </div>
        <div className="flex gap-4 mt-6">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}