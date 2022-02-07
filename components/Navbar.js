import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';

import { FaBullhorn, FaRegBell, FaBars, FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
    return (
        <div className="container-fluid shadow-md h-[50px] bg-[#1d2b38] text-white items-center w-full">
            <nav className="p-2 mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Link href="/">
                            <a>
                                <Logo width="30px" height="30px" />
                            </a>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-5">
                        <div className="flex items-center bg-white rounded-sm px-3">
                            <FaSearch size="15px" className="fill-gray-500" />
                            <input
                                placeholder='Search ("/" for hotkey)'
                                className="focus:outline-0 py-1.5 px-3 rounded-sm items-center text-gray-500 text-sm"
                            />
                        </div>
                        <NavLink icon={<FaBullhorn />} />
                        <NavLink icon={<FaRegBell />} />
                        <NavLink icon={<FaBars />} />
                    </div>
                </div>
            </nav>
        </div>
    );
}
