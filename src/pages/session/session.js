import Accordion from "../../components/accordion"

export default function Session(){
    const bloc =  (
        <>
        <p>baubaubua</p>
        <p>baubaubua</p>
        <p>baubaubua</p>
        <p>baubaubua</p>
        <p>baubaubua</p>
        </>)
    
    return(
        <Accordion head="head" body={bloc}/>
    )
}