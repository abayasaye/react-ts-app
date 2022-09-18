import "./Home.css";
import { useEffect, useState } from "react";
import IUser from "../../../models/user-model";
import { UserService } from "../../../services/user-service"; 


const  HeloWorld = (one:number,two:number):string =>{
  return "HELLO WORLD" 

}
let tempUsers:IUser[];
const Home = ()=>{
  const [usersArray,setUsersArray]=useState(tempUsers)
  useEffect(()=>{
    UserService()
    .then((users:IUser[])=>{
      setUsersArray(users)
    })
  },[])
  return(
    <div>
      {HeloWorld(1,2)}
      {
        usersArray?.map(user=><h1>{`
        ${user.id}
        ${user.age}
        ${user.name.first}
        ${user.name.last}
        ${user.email}
        ${user.index}
        ${user.phone}
        ${user.picture}`}
        </h1>)
      }
      <h1>BOOTOM</h1>
    </div>
  )
}

export default Home
