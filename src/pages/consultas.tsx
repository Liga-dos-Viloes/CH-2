import { useEffect, useState } from "react";
import { API_URL } from "../api/api";
import type { Consulta } from "../types/consulta";
import { Loading } from "../components/loading";

export function ConsultasPage() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/consultas`) 
      .then((data) => data.json())
      .then((data) => {
        setConsultas(data);
      })
      .catch((err) => console.error("Erro ao buscar consultas:", err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-12 px-4">
      <header>
        <h2 className="font-bold text-3xl text-gray-800">Agenda de Consultas</h2>
      </header>

      <main className="flex flex-col gap-3 items-center justify-center w-full max-w-4xl">
        {consultas.length === 0 ? (
          <p>Nenhuma consulta encontrada.</p>
        ) : (
          consultas.map((consulta) => (
            <div key={consulta.id} className="bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="font-bold text-xl">Consulta ID: {consulta.id}</h3>
              <p className="text-gray-800">
                <span className="font-semibold">Paciente:</span> {consulta.paciente.nome}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Médico:</span> {consulta.medico.nome} ({consulta.medico.especialidade})
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Data:</span> {new Date(consulta.dataHora).toLocaleString('pt-BR')}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Motivo:</span> {consulta.motivo}
              </p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}