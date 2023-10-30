import { useState } from "react";

export default function DateWidget({callBack, name}){
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
      
        setSelectedDate(event.target.value);
        callBack(event.target.value)
    }

     return (    
      
      <input 
        type="date"
        value={selectedDate} 
        onChange={handleDateChange} 
        name={name}
      />
      
    
  );
}