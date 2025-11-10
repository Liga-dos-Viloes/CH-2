import { useEffect, useState } from "react";
import { API_URL } from "../api/api";
import type { Medico } from "../types/medico";
import { Loading } from "../components/loading";

export function MedicosPage() {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/medicos`) 
      .then((data) => data.json())
      .then((data) => {
        setMedicos(data);
      })
      .catch((err) => console.error("Erro ao buscar medicos:", err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-12 px-4">
      <header>
        <h2 className="font-bold text-3xl text-gray-800">Nossos medicos</h2>
      </header>

      <main className="flex flex-col gap-3 items-center justify-center w-full max-w-4xl">
        {medicos.length === 0 ? (
          <p>Nenhum medico encontrado.</p>
        ) : (
          medicos.map((medico) => (
            <div key={medico.id} className="bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="font-bold text-xl">{medico.nome}</h3>
              <p className="text-gray-600">ID: {medico.id}</p>
              <p className="text-gray-600">Email: {medico.email}</p>
              <p className="text-gray-600">CRM: {medico.crm}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}