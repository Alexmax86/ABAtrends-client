import { useState } from "react"
import './patientselector.css'

export default function PatientSelector({list}){
    console.log(list)
    const [selection, setSelection] = useState([])
    

    const handleStateChange = (element) => {
        console.log("element name:" + element)
        if (selection.includes(element)){selection.splice(selection.indexOf(element), 1)}
        else {selection.push(element)};        
        console.log(selection)
    }
    
    const checkboxCollection = list.map((item) => <Checkbox id={item.id} handleStateChange={handleStateChange} data={item}/>)
    
    return(
        <div className="patient-selector">
            {checkboxCollection}
        </div>
    )
}

function Checkbox({id, handleStateChange, data}){
    const [checked, setChecked] = useState(false)

    function handleChange(e){
        setChecked(!checked)
        handleStateChange(e.target.name)
    }


    return(
        <>  
                
                <label htmlFor={id}>{data.name} {data.surname} {id}</label>
                <input type="checkbox" name={id} onChange={handleChange}/>
                    
            
        </>
    )
}