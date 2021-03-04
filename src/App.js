import './App.css';
import { useState } from 'react';
import React from 'react';

function App(){
  const [islit, setlit ] = useState(true);
  const state = React.useState(true);
  const isLit = state[0];
  const setLit = state[1];
  const brightness = isLit ? "lit" : "dark";


  // const city = ["KARACHI","UMAN","BAGHDAD","MUMBAI","CALAFORNIA","SAMBA"]
 var cityName = [{
   cityName:"KARACHI",
   Temprature:"33°C",
   Precepation:"5%"
 },
 {
  cityName:"UMAN",
  Temprature:"46°C",
  Precepation:"8%"
},{
  cityName:"BAGHDAD",
  Temprature:"18°C",
  Precepation:"2.5%"
},
{
  cityName:"MUMBAI",
  Temprature:"36°C",
  Precepation:"5%"
},
{
  cityName:"CALAFORNIA",
  Temprature:"1°C",
  Precepation:"0.5%"
},
{
  cityName:"SAMBA",
  Temprature:"11°C",
  Precepation:"4%"
}
]
 
 return(
 <>
  <div className={`room ${brightness}`}>
     {isLit ? "ON" : "OFF"}
    <br />
    <button onClick={() => setLit(!isLit)}>
      <img src="https://img.freepik.com/free-vector/turn-off-button_1095-143.jpg?size=338&ext=jpg" height="5px"/>
    </button>
  
 <div className="main">
    <div className="header"><h1>👉🏻HELLO HEADER 👈🏻 </h1></div>

    {/* {
      cityName.map((city)=>{
        return <h2>{City}</h2>
      }
      )
    } */}

 

{/* {[<h1>KARACHI</h1>,<h1>BAIROOT</h1>,<h1>MASQAT</h1>,<h1>BAGHDAD</h1>,<h1>MACCA</h1>]} */}

{
  cityName.map((eachCity)=>{
    return <div className="eachCity">
    <div className="font">
      <h2><u>
      ❤️ Name:{eachCity.cityName}
        </u>:</h2>
    </div>
    <div>
      <h2>
      ⛅️ Temprature:{eachCity.Temprature}
        </h2>
    </div>
    <div>
      <h2>
      ✋✋🏼 Precepation:{eachCity.Precepation}
        </h2>
    </div>
  
  </div>
  }
  )
}

<div className="footer"><h1>👉🏻HELLO FOOTER 👈🏻 </h1></div>
  </div>
  </div>
  </>)
}

export default App;
