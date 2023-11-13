import { useState } from "react";
type DateWidgetProps = {
  callBack: (arg:any)=>any,
  name:string
}
export default function DateWidget(props:DateWidgetProps){
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
        props.callBack(event.target.value)
    }

     return (
      <input 
        type="date"
        value={selectedDate} 
        onChange={handleDateChange} 
        name={props.name}
      />
  );
}