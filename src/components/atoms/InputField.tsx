interface InputFieldProps {
  label: string
}



const InputField = ({ label } : InputFieldProps) => {
  return (
    <div>
        <label>{ label }</label>
    </div>
  )
}


export default InputField