import Link from 'next/link';
import { IconContext } from 'react-icons/lib';

export default function NavLink({ icon }) {
    return (
        <IconContext.Provider
            value={{
                size: '20px',
                className: 'hover:fill-[#0BA0E0]',
            }}
        >
            <Link href="/">
                <a>{icon}</a>
            </Link>
        </IconContext.Provider>
    );
}
