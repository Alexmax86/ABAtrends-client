import { useState, useEffect } from "react"
import React, { useRef } from 'react';

import './selectorwidget.css'



interface SelectorWidgetProps {
    data: {id: number; displayString: string}[]
    callBack: (choiceArray: number[]) => void
}

type CheckBoxProps = {
    id: number,
    displayString: string,
    handleCheckAction: (id: number) => any
}

export default function SelectorWidget(props: SelectorWidgetProps){
    
    let [isOpen, setOpen] = useState<boolean>(false)
    let [selection, setSelection] = useState<number[]>([])
    const accordionRef  = useRef<any>(null);    
    
    //****Visual logic
    useEffect(() => {
        const handleClickOutside = (event: any) => {
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
    //Verifies if selected id in selection state. If so removes it, else add to it. Calls callback from parent
    const handleCheckAction = (id: number) => {
        let newSelection: number[] = [...selection];
        newSelection.includes(id)
        ? newSelection.splice(newSelection.indexOf(id), 1)
        : newSelection.push(id)
        setSelection(newSelection)
        props.callBack(newSelection)
    }



    const checkboxCollection = props.data.map((item) => <Checkbox id={item.id} handleCheckAction={handleCheckAction} displayString={item.displayString}/>)
    
    

    

    return(
        <div ref={accordionRef} className="accordion">
            <div className="accordion-head" onClick={toggleAccordion}>
                {selection.length == 0 
                    ? "Select elements.."
                    : `${selection.length} elements selected`                
                }
            </div>            
            
            <div  className = {isOpen ? "accordion-body" : "accordion-body-hidden"}>                    
                {checkboxCollection}                    
            </div>    
           
        </div>
    )
}

function Checkbox(props: CheckBoxProps){
    
    const [checked, setChecked] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setChecked(!checked)
        props.handleCheckAction(parseInt(e.target.name))
    }


    return(
        <> 
            <div className="checkbox-list-item">
                <label htmlFor={props.id.toString()}>{props.displayString}</label>
                <input className="itemBox" type="checkbox" name={props.id.toString()} onChange={handleChange}/>
            </div>
        </>
    ) 
}

