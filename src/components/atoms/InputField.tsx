import { useContext } from 'react'
import { AppContext, AppContextType } from '../../context'

interface InputFieldProps {
  label: string
}

const InputField = ({ label } : InputFieldProps) => {

  const  ctx: AppContextType | null = useContext(AppContext )

  const handler = (value: string) => {
    ctx?.setSearch(value)
    ctx?.handleSearch(value)
  }

  return (
    <div>
        <label>{ label }</label>
        <input type="text" value={ ctx?.search }
                    onChange={ (e) => handler(e.target.value)}
        />
    </div>
  )
}


export default InputField