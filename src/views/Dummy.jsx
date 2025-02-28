import React from 'react'

function Dummy({ name, salary, college }) {

  console.log("Second props data :", name, salary, college);


  return (
    <div style={{ textAlign: 'center', color: '#8000ff' }}>
      <h4>Name : {name}</h4>
      <h4>Salary : {salary}</h4>
      <h4>College : {college}</h4>
    </div>
  )
}

export default Dummy