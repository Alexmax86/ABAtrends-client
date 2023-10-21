import { useState, useContext } from "react"
import { filtersContext } from "../dashcontexts"
import './patientselector.css'
import Accordion from "../../../components/selectorwidget"

export default function PatientSelector(){
    const thisfiltersContext = useContext(filtersContext)
    console.log("Dashcontext:")
    console.log(thisfiltersContext)
    const [selection, setSelection] = useState([])
    return (
        <>
            <p>JSON:</p>
            <p>{JSON.stringify(thisfiltersContext)}</p>
        </>
    )
            
    
/*
    const handleStateChange = (element) => {
        console.log("element name:" + element)
        if (selection.includes(element)){selection.splice(selection.indexOf(element), 1)}
        else {selection.push(element)};        
        console.log(selection)
    }
    
    
    
    return(
        <div className="patient-selector">
            <Accordion head="Patients" body= {null}></Accordion>
            
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
    */
}
