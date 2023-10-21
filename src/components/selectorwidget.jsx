import { useState, useEffect } from "react"
import React, { useRef } from 'react';

import './selectorwidget.css'

//**********SELECTOR WIDGET
//**********Takes { [{id, displayString}], callback(choiceArray) }
//**********Callback 

export default function Selectorwidget({list, setParentSelection}){
    
    let [isOpen, setOpen] = useState(false)
    let [selection, setSelection] = useState([])
    const accordionRef  = useRef(null);    
    
    //****Visual logic
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    
      const toggleAccordion = () => {
        setOpen(!isOpen);        
    }
    
    
    //****Internal logic
    const handleChecking = (id) => {
        let newSelection = [...selection];
        newSelection.includes(id)
        ? newSelection.splice(newSelection.indexOf(id), 1)
        : newSelection.push(id)
        setSelection(newSelection)
        setParentSelection(newSelection)
    }



    const checkboxCollection = list.map((item) => <Checkbox id={item.id} handleChecking={handleChecking} displayString={item.displayString}/>)
    
    

    

    return(
        <div ref={accordionRef} className="accordion">
            <div className="accordion-head" onClick={toggleAccordion}>
                {selection.length == 0 
                    ? "Select elements.."
                    : `${selection.length} elements selected`                
                }
            </div>            
            {isOpen &&
                <div  className="accordion-body">                    
                    {checkboxCollection}                    
                </div>    
            }      
        </div>
    )
}

function Checkbox({id, handleChecking, displayString}){
    
    const [checked, setChecked] = useState(false)

    function handleChange(e){
        setChecked(!checked)
        handleChecking(e.target.name)
    }


    return(
        <> 
            <div className="checkbox-list-item">
                <label htmlFor={id}>{displayString}</label>
                <input className="itemBox" type="checkbox" name={id} onChange={handleChange}/>
            </div>   
            
        </>
    )
}