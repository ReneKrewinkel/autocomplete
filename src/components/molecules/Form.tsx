import {Button, InputField} from "../atoms";


const Form = () => {

  return(
    <div className="Form">
      <InputField label="Name" />
      <Button label="Submit" action={ () => alert('Button clicked') } />
    </div>
  )
}

export default Form;