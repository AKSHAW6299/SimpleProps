import React from 'react'

function Test(props) {

  console.log("Props data :", props);


  return (
    <>
      <div style={{ textAlign: 'center', color: '#191970' }}>
        <h4>Name : {props?.data?.name}</h4>
        <h4>Salary : {props?.data?.salary}</h4>
        <h4>Approach : {props?.data?.txt}</h4>
        <hr />
      </div>
    </>

  )
}

export default Test