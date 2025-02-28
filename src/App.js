import React from 'react'
import Test from './views/Test'
import Dummy from './views/Dummy'


function App() {

  const data = {
    name: 'Anand',
    txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, est 1!',
    salary: 123456
  }

  return (
    <>
      {/* 1) */}
      <Test data={data} />

      {/* 2) */}
      {/* <Dummy name='Santosh Yadav' salary={55556} college="Gurunanak Institute of Technology" /> */}
    </>
  )
}

export default App