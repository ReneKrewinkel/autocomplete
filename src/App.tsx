import React, {useState, useEffect } from 'react'

import './style/main.css'

import { Form, List } from './components/molecules'
import { useFetch } from './hooks'
import { config } from './config'
import { AppContext } from './context'


function App() {

  const { data, isLoaded, error } = useFetch(config.api)
  const [filteredData, setFilteredData] = useState([])

  const [search, setSearch] = useState('')

  const handleSearch = (keyword: string) => {

    const kw: string = keyword.toLowerCase()
      //@ts-ignore
      const filtered = data.filter((item: any) => {
        return item.name.toLowerCase().includes(kw) ||
                  item.email.toLowerCase().includes(kw) ||
                  item.address.street.toLowerCase().includes(kw) ||
                  item.address.suite.toLowerCase().includes(kw) ||
                  item.address.city.toLowerCase().includes(kw)
      })

      setFilteredData(filtered)
  }


  const resetFilter = () => setFilteredData(data ? data : [])

  useEffect(() => {
    if(isLoaded && data) setFilteredData(data)
  }, [data])

  return (
    <AppContext.Provider value={{ search, setSearch, handleSearch, resetFilter }}>
    <div className="App">
        <Form />

      {  isLoaded  &&  <List data={filteredData}/> }
      { error && <div>Error: { JSON.stringify(error) }</div> }

    </div>
    </AppContext.Provider>
  )
}

export default App;
