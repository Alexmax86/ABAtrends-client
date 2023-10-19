import { useState } from "react"
import React, { useRef } from 'react';
import './accordion.css'


export default function Accordion({head, body}){
    let [isOpen, setOpen] = useState(false)
    const accordionBodyRef = useRef(null);
    const headText = 'Selection....'

    const toggleAccordion = () => {
        accordionBodyRef.current.classList.toggle('show');
    }

    return(
        <div className="accordion">
            <div className="accordion-head" onClick={toggleAccordion}>
                {headText}
            </div>
            <div ref={accordionBodyRef} className="accordion-body">
                {body}
            </div>          
        </div>
    )
}

function Checkbox({key, text, handleStateChange}){
    
}