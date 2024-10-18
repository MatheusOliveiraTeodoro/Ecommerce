import { Button } from "@mui/material";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () =>{

    const [searchValue, setSearchValue] = useState();

    return(
        <div className="headerSearch ml-1 mr-1 w-3/5 h-14 bg-[#f3f4f7] pt-1 relative rounded-md border border-black/10">
            <input className="bg-transparent outline-none text-base text-black/70 w-full h-11 border-0 pt-0 px-5"
             type="text" placeholder="Pesquisa..." onChange={({ target }) => setSearchValue(target.value)}
             value={searchValue} />
            <Button><IoIosSearch/></Button>
        </div>
    )
}
export default SearchBox;