import logo from '../assets/ConectaReab.png'

export function ConectaReab() {

    return(
        <>
        <header className="pt-8 pb-8 w-full text-5xl font-smibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex-colum text-center place-items-center">
                <h1>ConectaReab</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-180 place-content-center' />
                <h2>Acessível para quem precisa</h2>
            </div>
        </header>
        <main className="p-8">
            <section>
                <article className='py-8 flex gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
                    <div className='py-5 text-center w-[50%] h-48 justify-end pr-5 pl-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
                        <h2 className='font-semibold'>
                        A necessidade de uma mudança 
                        </h2>
                        <p className='text-end'>
                            Pouca acessibildade, Ausencia em consultas, Grande impacto negativo
                        </p>
                    </div>
                    <div className='py-5 text-center w-[50%] h-48 justify-end pr-5 pl-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
                        <h2 className='font-semibold'>
                            bla bla
                        </h2>
                        <p className='text-end'>
                            pepep
                        </p>
                    </div>
                </article>
            </section>
        </main>
        </>
    
)
}