import { useEffect, useState } from "react";
import { API_URL } from "../api/api";
import type { Paciente } from "../types/paciente";
import { Loading } from "../components/loading";

export function PacientesPage() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/pacientes`) 
      .then((data) => data.json())
      .then((data) => {
        setPacientes(data);
      })
      .catch((err) => console.error("Erro ao buscar pacientes:", err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-12 px-4">
      <header>
        <h2 className="font-bold text-3xl text-gray-800">Nossos Pacientes</h2>
      </header>

      <main className="flex flex-col gap-3 items-center justify-center w-full max-w-4xl">
        {pacientes.length === 0 ? (
          <p>Nenhum paciente encontrado.</p>
        ) : (
          pacientes.map((paciente) => (
            <div key={paciente.id} className="bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="font-bold text-xl">{paciente.nome}</h3>
              <p className="text-gray-600">ID: {paciente.id}</p>
              <p className="text-gray-600">Email: {paciente.email}</p>
              <p className="text-gray-600">CPF: {paciente.cpf}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}