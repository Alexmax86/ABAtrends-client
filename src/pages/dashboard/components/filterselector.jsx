import './filterselector.css'
import PatientSelector from './patientselector'
import Checkbox from './patientselector'
import Accordion from '../../../components/selectorwidget';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Filterselector(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    

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
        <PatientSelector/>
    </div>
    )
}