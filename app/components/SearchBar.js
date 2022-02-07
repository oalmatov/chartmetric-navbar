import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="flex items-center bg-white rounded-sm px-2">
            <FaSearch size="15px" className="fill-gray-500" />
            <input
                placeholder='Search ("/" for hotkey)'
                className="focus:outline-0 h-[30px] pl-2 rounded-sm items-center text-gray-500 text-sm"
            />
        </div>
    );
}
