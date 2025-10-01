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
          <main className='bg-[#f1f1f1]'>
        <section className='flex-colum justify-center place-content-center'>
            <article className='pt-1 pb-1 pr-8 pl-8 flex-colum justify-center gap-5'>
                <div className=' w-full h-50 gap-5 flex-colum text-center justify-center self-center items-center py-8 pr-130 pl-130'>
                    <h2 className='text-4xl font-bold'>Componentes principais</h2>
                    <p className='text-xl font-light text-gray-500 dark:text-gray-500'>
                        O AlertAI é um projeto desenvolvido por três integrantes, cada um com habilidades únicas que se complementam para criar uma solução inovadora e eficaz.
                    </p>
                </div>
                
                <div className='flex justify-center pb-7 '>
                <div className="cards bg-white rounded-[17.8px] w-[70%] h-77 flex justify-center p-1 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="card-img rounded-[17.8px] border-solid border border-[#e6e6e6]">
                        {/* <img src="img/kaiky.png" alt="Foto do Kaiky Pereira"> */}
                    <p className='text-center text-[0.9em] font-normal'>RM: 564578</p>
                    </div>
                    <div className="flex-colum justify-around p-2">
                        <h2 className='text-2xl font-bold p-8'>Kaiky Pereira</h2>
                        <p className='pl-8'>Apaixonado por tecnologia com foco em soluções que realmente façam a diferença. 
        A ideia do AlertaAI nasceu da necessidade de otimizar a comunicação em momentos críticos de desastre. 
        <i> "Percebi que uma ferramenta que conectasse diretamente a Defesa Civil aos cidadãos, de forma ágil e visual, 
        seria fundamental para salvar vidas e garantir a segurança."</i></p>
                        <div className="flex">
              {/* <a href="https://www.linkedin.com/in/kaikypereira/" target="_blank"><img src="img/icons8-linkedin.svg" alt="linkedin icon"></a>
              <a href="https://github.com/rodrigueszkkk" target="_blank"><img src="img/icons8-github.svg" alt="Github icon"></a> */}
            </div>
                    </div>
                </div>
                </div>
                <div className='flex justify-center pb-7'>
                <div id="solem" className="cards bg-white rounded-[17.8px] w-[70%] h-77 flex justify-center p-1 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="card-content flex-colum justify-around p-2">
                            <h2 className='text-2xl font-bold p-8'>Gabriel Solano</h2>
                            <p className='pl-8'>
Focado em detalhes e na experiência do usuário, Gabriel foi responsável por trazer vida à interface do AlertAI. 
Desde o design até a usabilidade, buscou criar uma aplicação intuitiva e agradável. 
<i>"Sempre penso em como o usuário vai interagir com cada elemento. Uma boa experiência pode ser a diferença entre ignorar ou confiar em um alerta importante."</i>
</p>
                        <div className="flex">
                            {/* <a href="https://www.linkedin.com/in/gabriel-solano-165290363/" target="_blank"><img src="img/icons8-linkedin.svg" alt="linkedin icon"></a>
                            <a href="https://github.com/GabSolano" target="_blank"><img src="img/icons8-github.svg" alt="Github icon"></a> */}
                        </div>
                    </div>
                    <div className="card-img rounded-[17.8px] border-solid border border-[#e6e6e6]">
                        {/* <img src="img/solano.png" alt="Foto do Gabriel Solano"> */}
                    <p className='text-center text-[0.9em] font-normal'>RM: 562325</p>
                    </div>
                    
                </div>
                </div>
                <div className='flex justify-center'>
                <div className="cards bg-white rounded-[17.8px] w-[70%] h-77 flex justify-center p-1 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="card-img rounded-[17.8px] border-solid border border-[#e6e6e6]">
                        {/* <img src="img/leandro.png" alt="Foto do Leandro Guarido"> */}
                        <p className='text-center text-[0.9em] font-normal'>RM: 561760</p>
                    </div>                      
                    <div className="flex-colum justify-around p-2 ">
                            <h2 className='text-2xl font-bold p-8'>Leandro Guarido</h2>
                            <p className='pl-8'>
Especialista em lógica de programação e resolução de problemas, Leandro foi essencial para transformar ideias em funcionalidades reais. 
Com um olhar crítico e voltado à eficiência, contribuiu diretamente na construção da arquitetura do AlertAI. 
<i>"Acredito que a tecnologia deve ser clara, funcional e acessível. Meu papel foi garantir que o sistema funcionasse da forma mais direta e segura possível para o usuário."</i>
</p>
                        <div className="flex">
                            {/* <a href="https://www.linkedin.com/in/leandroguaridooliveira/" target="_blank"><img src="img/icons8-linkedin.svg" alt="linkedin icon"></a>
                            <a href="https://github.com/LeandroGuaridoOliveira" target="_blank"><img src="img/icons8-github.svg" alt="Github icon"></a> */}
                        </div>
                    </div>
                </div>
                </div>

            </article>
        </section>
    </main>
        </>
    
)
}