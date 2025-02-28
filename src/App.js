import React from 'react'
import Test from './views/Test'
import Dummy from './views/Dummy'


function App() {

  const data = {
    name: 'Anand',
    txt: '1st way to pass data through props!',
    salary: 123456
  }

  return (
    <>
      {/* In 2 ways we can pass data through props */}
      {/* 1st way */}
      <Test data={data} />

      {/* 2nd way */}
      <Dummy name='Santosh Yadav' salary={55556} txt="2nd way to pass data through props!" />
    </>
  )
}

export default App