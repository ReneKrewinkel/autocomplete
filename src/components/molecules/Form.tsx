import {Button, InputField} from "../atoms";
import { AppContext } from '../../context'
import {useContext} from "react";

const Form = () => {

  const ctx: any = useContext(AppContext)

  const resetIt = () => {
    ctx.resetFilter()
    ctx.setSearch('')
  }

  return(
    <div className="Form">
      <InputField label="Name" />
      <Button label="Reset" action={ () => resetIt() } />
    </div>
  )
}

export default Form;