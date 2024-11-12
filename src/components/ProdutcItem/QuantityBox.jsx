import { Button } from "@mui/material";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';

const QuantityBox = ({ quantity, onChange }) => {

    const [inputVal, setInputVal] = useState(quantity);

        const minus =() =>{
            if(inputVal > 1) {
                const newVal = inputVal - 1;
                setInputVal(newVal);
                onChange(newVal);
            }
        }

        const plus =() => {
            const newVal = inputVal + 1;
            setInputVal(newVal);
            onChange(newVal);
        }

    return(
        <div className="flex items-center w-40 gap-3 quantityDrop">
            <Button onClick={minus}><FaMinus className="text-[#000]" /></Button>
                <input type="text" value={inputVal} className="w-8 bg-transparent 
                outline-none text-center" readOnly/>
            <Button onClick={plus}> <FaPlus className="text-[#000]" /></Button>
        </div>
    )
}

export default QuantityBox;