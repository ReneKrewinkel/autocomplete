interface ListProps {
  data: any | null
}

const List = ({ data }: ListProps) => {
  return (
    <div>
      {
        data.map((item: any, index: number) => {
          return(
             <div className={"ListRow"} key={index}>
               <div>{item.name}</div>
               <div>{item.email}</div>
               <div>{item.address.street}</div>
               <div>{item.address.suite}</div>
               <div>{item.address.city}</div>
             </div>
          )
        })

      }
    </div>
  )
}

export default List