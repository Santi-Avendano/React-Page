import { useState } from 'react'
import '../styles/App.css'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'

function App() {

  return (
    <div className='principal'>
      <h1>CREATE YOUR CV HERE!</h1>
      <Personal/>
      <Education/>
      <Experience />
    </div>
  )
}

export default App
