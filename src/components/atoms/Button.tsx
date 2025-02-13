interface ButtonProps {
  label: string
  action: () => void
}

const Button  = ({ label, action } : ButtonProps) => {
    return (
        <div className={'Button'} onClick={action}>
          { label }
        </div>
    )
}

export default Button