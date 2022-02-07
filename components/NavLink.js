import Link from 'next/link';
import { IconContext } from 'react-icons/lib';

export default function NavIcon({ icon, to }) {
    return (
        <IconContext.Provider
            value={{
                size: '35px',
                className:
                    'hover:bg-gray-300 hover:fill-[#1d2b38] p-2 rounded-3xl',
            }}
        >
            <Link href={to}>
                <a>{icon}</a>
            </Link>
        </IconContext.Provider>
    );
}
