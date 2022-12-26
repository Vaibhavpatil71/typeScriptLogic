import React from 'react'
type HeadingProps={
    children:String
}
const Heading = (props:HeadingProps) => {
  return (
   
<h3>{props.children}</h3>
  )
}

export default Heading