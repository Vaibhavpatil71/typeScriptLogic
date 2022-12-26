import React from 'react'

type WelcomeProps = {
    name: string 
    number: number
    isLoggedIn: Boolean
    // setDemo: (d: string) => void
}
const Welcome = (props: WelcomeProps) => {
    return (
        <div>

            <h1>
                {
                    //implemented the props in ternary logic
                    props?.isLoggedIn ? `Welcome ${props.name} to coding word in ${props.number}` : 'check the code'
                }
            </h1>
            {/* <input id="fname" onChange={(e) => {
                props.setDemo(e.target.value)
            }} /> */}
        </div>
    )
}

export default Welcome