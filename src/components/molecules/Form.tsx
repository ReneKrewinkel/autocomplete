import {Button, InputField} from "../atoms";
import { AppContext, AppContextType } from '../../context'
import {useContext} from "react";

const Form = () => {

  const  ctx: AppContextType | null = useContext(AppContext)

  const resetIt = () => {
    ctx?.resetFilter()
    ctx?.setSearch('')
  }

  return(
    <div className="Form">
      <InputField label="Name" />
      <Button label="Reset" action={ () => resetIt() } />
    </div>
  )
}

export default Form;