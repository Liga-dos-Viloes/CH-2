import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MemberCard } from '../components/MemberCard';
import type { Member } from '../types/types';

interface IntegranteDetailPageProps {
  membersData: Member[];
}

function IntegranteDetailPage({ membersData }: IntegranteDetailPageProps) {
  const { rm } = useParams<{ rm: string }>();
  
  const navigate = useNavigate();
  
  const [member, setMember] = useState<Member | undefined>();

  useEffect(() => {
    if (rm) {
      const foundMember = membersData.find(m => m.rm === rm);
      setMember(foundMember);
    }
  }, [rm, membersData]);

  if (!member) {
    return <div className="text-center p-10">Integrante não encontrado!</div>;
  }

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <main className="py-16 px-4">
      <section className="max-w-5xl mx-auto">
        <button
          onClick={handleGoBack}
          className="mb-8 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          &larr; Voltar para a lista
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8">Detalhes do Integrante</h1>
          <MemberCard member={member} />
        </div>
      </section>
    </main>
  );
}

export default IntegranteDetailPage;