import React, {useState} from "react";
import "./App.css";

const App = () =>{
  const [counter, setCounter] = useState(0);
  const [text, setText]= useState("");
  const [author , setAuthor]= useState("");
  const [word, setWord]= useState([
    {name: "Psalm 23", quote: "the lord is my sheperd"},
    {name: "Dickson Eneh", quote: "A tiny tiger thinks tought thoughts"},
    {name: "Peter Oti ", quote: "Aim at the stars so when you fall, you fall on the moon"},
    {name: "Bukola peter", quote: "Fear is an illusiuon"},
  ])
  const addqoute =()=>{
    setCounter(counter +1)
    if(counter ===word.length){
      setCounter(1)
    }
    
    
 
    
  }
  const reduce =()=>{
    setCounter(counter - 1)

    if(counter ===0){
      setCounter(counter)
    }
  
  
  }
  
  const adquuote =()=>{
    const valuue={
      name : author,
      quote : text,
    }
    setWord([...word, valuue])
  }
  const randy =()=>{
    setCounter([Math.floor(Math.random()*word.length)])
  }


  return(
    <div className="maindiv">
      <div className= "holders">
        <div className="puts"> 
        <div className="first">
        <input  placeholder="Enter your quote" onChange={(e)=>{
          setText(e.target.value)
        }} ></input>
          <button onClick={adquuote}>Add</button>
          </div> 
          <div className="name">
          <input  placeholder="Enter quote author name"
          onChange={(e)=>{
            setAuthor(e.target.value)
          }}></input>
          </div>
        </div>
     <div className = "quoteholder">
       <div className= "wrapper">
       <div className= "up">
         <img></img>
       </div>
          <div className="head">
         <h3> Quotes</h3>
         
         </div>
         
         <div className="usertext">
           <h4>"{word[counter%word.length].quote} "</h4>
         </div>
         <div className="pro"><b>"{word[counter%word.length].name}"</b></div>
        <div className="forbuttons">
          <span>
          {counter ===0 ? null: <button onClick={reduce}>preview</button>}
          <button onClick={addqoute} >next</button>
          </span>
          </div>
           <div className="random">
             <button onClick={randy}>View Quote Randomly</button>
           </div>
         </div>

     </div>
     </div>
      
    </div>
  )
}
export default App;