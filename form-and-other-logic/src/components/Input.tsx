import React, { useState } from 'react'


const InputComponent = () => {
    const [value, setValue] = useState()
    const [clickValues,setClickValues]=useState()
    const handlechange = (e: any) => {
        setValue(e.target.value)
    }
    const click =()=>{
        setClickValues(value)
    }
    return (
        <>
        <input type="textarea" value={value} onChange={(e) => handlechange(e)} />
        <h1>{clickValues}</h1>
        <button onClick={click} type="submit">save</button>
        </>
    )
}

export default InputComponent