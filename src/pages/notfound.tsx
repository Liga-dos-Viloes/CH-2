import { Link } from "react-router-dom";

export function NotFound(){

      return(
          <main className="p-8 h-180 place-content-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <h1 className="text-4xl font-bold pb-8">404 - Página Não Encontrada</h1>
            <Link to="/" className="hover:underline text-[#0071e3]">
                Clique aqui para voltar!
            </Link>
          </main>
      )
          
}