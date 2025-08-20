import React from "react";
import {useState} from "react";

function LudoBoard(){
  let [moves,setmoves] = useState({red:0,yellow:0,green:0,blue:0});
  function redMove(){
     setmoves((prevmoves)=>{
        return{...prevmoves,red:prevmoves.red+1}
     })
  }
  function yellowMove(){
    setmoves((prevmoves)=>{
       return{...prevmoves,yellow:prevmoves.yellow+1}
    })
 }
 function greenMove(){
  setmoves((prevmoves)=>{
     return{...prevmoves,green:prevmoves.green+1}
  })
}
function blueMove(){
  setmoves((prevmoves)=>{
     return{...prevmoves,blue:prevmoves.blue+1}
  })
}
  return(
    <div>
           <h1 style={{backgroundColor:"orange"}}>LUDO BOARD</h1>
      <h1>RedMove={moves.red}</h1>
      <button style={{backgroundColor:"red"}} onClick={redMove}>+1</button>
      <h1>yellowMove={moves.yellow}</h1>
      <button style={{backgroundColor:"yellow"}} onClick={yellowMove}>+1</button>
      <h1>greenMove={moves.green}</h1>
      <button style={{backgroundColor:"green"}} onClick={greenMove}>+1</button>
      <h1>blueMove={moves.blue}</h1>
      <button style={{backgroundColor:"b"}} onClick={blueMove}>+1</button>
      </div>
  )
}
export default LudoBoard;
