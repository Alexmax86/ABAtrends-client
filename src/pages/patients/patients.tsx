import {useState, useEffect} from "react"
import UserTable, { TableCell, TableRow, UserTableProps }  from "../../Common/Components/usertable/usertable";

export default function Patients(){
    type ParsedRow = {
        id: number,
        name: string,
        surname: string,
        email: string,
        age: number                
    }   
    type ParsedData = ParsedRow[]
    
      
    const [data, setData] = useState<ParsedData>([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        async function getData(){
          try{
            const resp = await fetch(process.env.REACT_APP_API_URL + '/getpatients');
            const json: ParsedData = await resp.json();
            setData(json);
          }
          catch(err){
            console.log(err)
            
          }
        }
        getData()  
        
           
      }, []);
      
      function returnTableCells(element:ParsedRow):TableCell[]{
        const cells: TableCell[] = [
          {caption: element.name},
          {caption: element.surname},
          {caption: element.age.toString()},
          {caption: element.email},
          
          //Describe button and callback
          {caption: "Edit",
           isButton: true,
          callBack: () => {alert("Callback")}
          }          
        ]
        return cells

      }
      
      function returnTablerows():TableRow[]{
        const rows:TableRow[] = []
        data.forEach((element:ParsedRow) =>{
            rows.push({
              tableCells: returnTableCells(element),
              key: element.id
            })            
        })
        return rows
        
      }
      const userTableProps: UserTableProps = {
        headers: ['Name', 'Surname', 'Age', 'Email', 'Action'],
        rows: returnTablerows()
      } 
      
    return(
        <UserTable {...userTableProps}/>
         
        
    )
}