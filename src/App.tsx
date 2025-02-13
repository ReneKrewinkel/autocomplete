import React from 'react'

import './style/main.css'

import { Form, List } from './components/molecules'
import { useFetch } from './hooks'
import { config } from './config'


function App() {

  const { data, isLoaded, error } = useFetch(config.api)

  return (
    <div className="App">
        <Form />
      {  isLoaded  &&  <List data={data}/> }

      { error && <div>Error: { JSON.stringify(error) }</div> }

    </div>
  )
}

export default App;
