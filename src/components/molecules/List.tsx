import {People, Person} from "../../types";

interface ListProps {
  data: People
}

const List = ({ data }: ListProps) => {
  return (
    <div>
      {
        data?.map((item: Person, index: number) => {
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