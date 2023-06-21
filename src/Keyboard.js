import React from 'react'
import "./Keyboard.css"


const keyboard = [
"AC", "+/-", "%", "/",
7, 8, 9, "*",
4, 5, 6, "-",
1, 2, 3, "+",
0, ".", "=",
];

export default function Keyboard() {
  return (
    <div>
        {keyboard.map(e => console.log(<button>{e}</button>))}
    </div>
  )
}
