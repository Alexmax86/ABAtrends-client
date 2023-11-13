
import { useState, createContext, useContext } from "react"
//import Selectorwidget from "../../components/selectorwidget"




export default function Session(){
    const [parentSelection, setParentSelection] = useState([])
    const list = [
        {id: 1, displayString: "John Doe"},
        {id: 2, displayString: "Jane Doe"},
        {id: 3, displayString: "Michael Smith"},
    ]

    const callback = (choiceArray) => console.log("Callback: " + choiceArray)

    return(
        <>
            {/*<Selectorwidget list = {list} setParentSelection = {setParentSelection} />*/}
            <button onClick={callback}>Click me</button>
            <p>{JSON.stringify(parentSelection)}</p>
        </>
    )
}