import './filterselector.css'
import PatientSelector from './patientselector'
import Checkbox from './patientselector'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Filterselector(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function getData(){
          try{
          const resp = await fetch(process.env.REACT_APP_API_URL + '/therapists');
          const json = await resp.json();
          
          setData(json);
          }
          catch(err){
            console.log(err)
            setError("Network error!")
          }
        }
        getData()   
           
      }, []);

    return(
    <div className="filterPanel">
        <span>
            <label htmlFor="initial-date"> Initial date:</label>
            <input name="initial-date" type="date"/>
        </span>
        <span>
            <label htmlFor="final-date"> Final date:</label>
            <input name="final-date" type="date"/>
        </span>

        <span>
            <label htmlFor="box">Patient:</label>
            
        </span>
        <PatientSelector list={data}/>
    </div>
    )
}