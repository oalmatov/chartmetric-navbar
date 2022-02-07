import NavLogo from './Logo';
import NavIcon from './NavLink';

import { FaBullhorn, FaRegBell, FaBars } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className="container-fluid h-[50px] bg-[#1d2b38] text-gray-300 items-center w-full px-1">
            <div className="flex justify-evenly sm:justify-between h-[50px]">
                <div className="items-center p-1 my-auto">
                    <NavLogo width="30px" height="30px" />
                </div>
                <div className="flex items-center my-auto space-x-1">
                    <SearchBar />
                    <NavIcon icon={<FaBullhorn />} to={'/'} />
                    <NavIcon icon={<FaRegBell />} to={'/'} />
                    <NavIcon icon={<FaBars />} to={'/'} />
                </div>
            </div>
        </div>
    );
}
