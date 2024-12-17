import { GoSearch } from "react-icons/go";
const Search = ()=> {
    return (
        <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <GoSearch />
            <input type="text" placeholder="search a post" className="bg-transparent" />
        </div>
    )
}

export default Search