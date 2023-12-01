import * as CommonTypes from './CommonTypes'

export async function recordData(jsonObject: CommonTypes.Api_SessionData){
    
    const url = process.env.REACT_APP_API_URL + '/record'
       
    // Configuration for the fetch request
    const requestOptions = {
    method: 'POST', // HTTP method
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(jsonObject) // Convert data to JSON format
    };
    try{
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
        throw new Error
        }        
        return true
    }
    catch (err){
        throw new Error(err as string);
    }
    
}
