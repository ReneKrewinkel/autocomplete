import { createContext } from 'react'

export type AppContextType = {
  search: string,
  setSearch: (value: string) => void,
  handleSearch: (keyword: string) => void,
  resetFilter: () => void
}

// @ts-ignore
const AppContext: React.Context<AppContextType | null> = createContext(null)

export default AppContext