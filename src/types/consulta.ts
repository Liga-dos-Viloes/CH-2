import type { Medico } from "./medico";
import type { Paciente } from "./paciente";

export interface Consulta {
  id: number;
  dataHora: string;
  motivo: string;
  paciente: Paciente;
  medico: Medico;
}