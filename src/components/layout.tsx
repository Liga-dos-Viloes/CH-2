import { Link, Outlet } from 'react-router-dom';


export function Navbar() {
    return (
        <div>
            <nav className='bg-white w-full'>
                <div className='font-Inter font-semibold flex justify-between pt-2.5 pl-15 pr-15 font-bold text-gray-500 dark:text-gray-500'>
                    <Link to="/" className=''>
                        ConectaReab
                    </Link>
                    <Link to="/integrantes">
                        Integrantes
                    </Link>
                    <Link to="/faq">
                        FAQ
                    </Link>
                    <Link to="/contact">
                        Contatos
                    </Link>
                    <Link to="/solution">
                        Solução
                    </Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <></>
            </footer>
        </div>
    );
}
