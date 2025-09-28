import { Link, Outlet } from 'react-router-dom';


export function Layout() {
    return (
        <div>
            <nav className='bg-white w-full'>
                <div className='font-Inter font-semibold flex justify-between pt-2 pb-2 pl-15 pr-15 font-bold text-gray-500 dark:text-gray-500'>
                    <Link to="/" className='hover:text-gray-600'>
                        ConectaReab
                    </Link>
                    <Link to="/integrantes" className='hover:text-gray-600'>
                        Integrantes
                    </Link>
                    <Link to="/faq" className='hover:text-gray-600'>
                        FAQ
                    </Link>
                    <Link to="/contatos" className='hover:text-gray-600'>
                        Contatos
                    </Link>
                    <Link to="/solution" className='hover:text-gray-600'>
                        Solução
                    </Link>
                </div>
            </nav>
            <header>
                <Outlet />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <></>
            </footer>
        </div>
    );
}
