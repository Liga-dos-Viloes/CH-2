import logo from '../assets/dev_.png'

export function Integrantes() {

    return(
        <>
        <header className="pt-8 pb-8 w-full text-5xl  shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex-colum text-center place-items-center">
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-152 place-content-center '/>
                <h2 className='text-gray-500 font-thin'>A junção de ideas num projeto só</h2>
            </div>
            </header>
        <main className="p-8">
            <h1 className="text-2xl font-bold">Página Inicial</h1>
            <p className="mt-4">Bem-vindo ao AlertAI!</p>
        </main>
        </>
    
)
}