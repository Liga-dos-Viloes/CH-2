import logo from '../assets/ConectaReab.png'

export function ConectaReab() {

    return(
        <>
        <header className="pt-8 pb-8 w-full text-5xl font-extrabold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex-colum text-center place-items-center">
                <h1>ConectaReab</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-180 place-content-center' />
                <h2>Acessível para quem precisa</h2>
            </div>
            </header>
        <main className="p-8">
            <h1 className="text-2xl font-bold">Página Inicial</h1>
            <p className="mt-4">Bem-vindo ao AlertAI!</p>
        </main>
        </>
    
)
}