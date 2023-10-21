import LineChart from './components/linechart';
import Filterselector from './components/filterselector';
import { filtersContext } from './dashcontexts';

import { useState, useEffect } from 'react';



export default function Dashboard(){
  const [filterData, setFilterData] = useState(null)
  
  useEffect(() => {
    async function getData(){
      try{
        const resp = await fetch(process.env.REACT_APP_API_URL + '/therapists');
        const json = await resp.json();      
        setFilterData(json);
      }
      catch(err){
        console.log(err)        
      }
    }
    getData()   
       
  }, []);
  
  return (    
    <div>
      <filtersContext.Provider value = {filterData}>
        <Filterselector/>
      </filtersContext.Provider>
    </div>
  )
}