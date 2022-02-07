import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';

import { FaBullhorn, FaRegBell, FaBars, FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className="container-fluid shadow-md h-[50px] bg-[#1d2b38] text-white items-center w-full">
            <nav className="p-2 mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Logo width="30px" height="30px" />
                    </div>
                    <div className="flex items-center space-x-5">
                        <SearchBar />
                        <NavLink icon={<FaBullhorn />} />
                        <NavLink icon={<FaRegBell />} />
                        <NavLink icon={<FaBars />} />
                    </div>
                </div>
            </nav>
        </div>
    );
}
