import logo from '../assets/ConectaReab.png'

export function Contatos() {

    return(
        <>
        <header className="pt-48 pb-48 w-full text-5xl semibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex place-content-center">
                <h1 className='self-center'>Receba ajuda com <br /> tecnologias e fale <br /> com especialistas.</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-88 place-content-center' />
            </div>
            </header>
        <main className="p-8">
            <h1 className="text-2xl font-bold">Página Inicial</h1>
            <p className="mt-4">Bem-vindo ao AlertAI!</p>
        </main>
        </>
    
)
}