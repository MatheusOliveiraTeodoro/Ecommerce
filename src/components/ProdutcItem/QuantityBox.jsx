import { Button } from "@mui/material";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';

const QuantityBox = () => {

    const [inputVal,setInputVal] = useState(1);

        const minus =() =>{
            if(inputVal!==1 && inputVal>0){
                setInputVal(inputVal-1);
            }
            
        }

        const plus =() =>{
            setInputVal(inputVal+1);
        }

    return(
        <div className="flex items-center w-40 gap-3 quantityDrop">
            <Button onClick={minus}><FaMinus className="text-[#000]" /></Button>
                <input type="text" value={inputVal} className="w-8 bg-transparent 
                outline-none text-center" />
            <Button onClick={plus}> <FaPlus className="text-[#000]" /></Button>
        </div>
    )
}

export default QuantityBox;