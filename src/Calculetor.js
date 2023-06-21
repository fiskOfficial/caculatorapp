import React from 'react'
import "./Calculator.css"
import Display from './Display'
import Keyboard from './Keyboard'

export default function Calculetor() {


  return (
    <div className='wrapper'>
        <Display />
        <Keyboard />
    </div>
  )
}
