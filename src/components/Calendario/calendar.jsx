import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Calendario = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const minDate = new Date("2024-12-01");

    return(
        <div className="">
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy/dd/mm"
            minDate={minDate}
            >   </DatePicker>
        </div>
    )
}

export default Calendario;