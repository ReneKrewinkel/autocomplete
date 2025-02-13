import React from 'react'

import './style/main.css'

import { InputField, Button } from './components/atoms'


function App() {

  return (
    <div className="App">
        <InputField label="Name" />
        <Button label="Submit" action={ () => alert('Button clicked') } />
    </div>
  )
}

export default App;
