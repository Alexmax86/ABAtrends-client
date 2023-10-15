import { useState } from 'react'
import { useEffect } from 'react';
import ('./customtable.css')

export default function CustomTable(){
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
      <div>
        {
          error 
          ? ( <div>{error}</div> ) 
          : ( data.length != 0 
            //When data is loaded into the table
            ? ( 
                <table className="customTable">
                  <thead>
                    <tr className='customRow'>
                      <th className="customTh">Name</th>
                      <th className="customTh">Surname</th>
                      <th className="customTh">Age</th>
                      <th className="customTh">Email</th>  
                      <th className="customTh">Action</th>                  
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(element => <CustomRow key={element.id} data={element} />)}
                  </tbody>
                </table>
              )
            //When the table is awaiting for data
            : (<p>Loading content....</p>)
          )
        }
      </div>  
    )
  }
  
  function CustomRow({data}){
    
    
    return (
      
    <tr className='customRow'>
      <td dataLabel="name">{data.name}</td>
      <td dataLabel="surname">{data.surname}</td>
      <td dataLabel="age">{data.age}</td>
      <td dataLabel="email">{data.email}</td>
      <td dataLabel="action"><button>Edit</button></td>
    </tr>
    
    )
}