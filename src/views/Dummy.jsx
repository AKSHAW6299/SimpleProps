import React from 'react'

function Dummy({ name, salary, txt }) {

  console.log("Second props data :", name, salary, txt);


  return (
    <div style={{ textAlign: 'center', color: '#8000ff' }}>
      <h4>Name : {name}</h4>
      <h4>Salary : {salary}</h4>
      <h4>Approach : {txt}</h4>
      <hr />
    </div>
  )
}

export default Dummy