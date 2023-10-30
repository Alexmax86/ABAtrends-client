import { useState, createContext, useContext, useEffect } from "react";


const UserContext = createContext();

export default function Testpage() {
  const [user, setUser] = useState("Jesse Hall");
  const changeUser = () => setUser("Kimba")
  return (
    <>
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <button onClick={changeUser}>Change context</button>
      <Component2 />
    </UserContext.Provider>
    </>
  );
}

function Component2(){
  const user = useContext(UserContext)
  let modText = user + "@"

  //useEffect(() => (console.log("user change detected by useEffect!")), [user])
  
  return(
    <>
      <p>Subcomponent2: {user}</p>
      <Component3 modifiedText={modText}></Component3>
    </>
  )
}

function Component3({modifiedText}){
  
  return(
    <p>Subcomponent3: {modifiedText}</p>
  )
}