import "./Home.css";
import React from "react";

const  HeloWorld = (one:number,two:number):string =>{
  return "HELLO WORLD" 

}

const Home = ()=>{
  return(
    <div>
      {HeloWorld(1,2)}
    </div>
  )
}

export default Home
