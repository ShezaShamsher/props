import React from 'react'

interface TProps {
  name : string 
  age : number
  rollnumber : string
  class : string
}

const Card = (data:TProps) => {
  return (
    <>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
      <h1>Roll Number: {data.rollnumber}</h1>
      <h1>Class: {data.class}</h1>
    </>
  )
}

export default Card











