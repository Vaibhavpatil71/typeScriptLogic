import React from 'react'

type personaNameProps={
    //array of an object
    names:{
        first:string    
        last:string
    }[]
}
const PersonList = (props:personaNameProps) => {
  return (
   
    <div>
        {props.names.map(names=>{
            return(
                <h2>{names.first} {names.last}</h2>
            )
        })}
    </div>
  )
}


export default PersonList