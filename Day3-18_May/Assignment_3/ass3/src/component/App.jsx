import React from 'react'
import { useState } from 'react'
import { Card } from './Card'
const d= new Date();
const curDate= d.getTime()

export const App = () => {
  return (
    // <div>App</div>
    <Card date={curDate} logo="" 
    title="Case Study" 
    compTitle="Amazon" 
    mode="Destop - Mobile" />
  )
}
 