import { Button } from 'antd'
import React from 'react'

import { useState } from 'react'
const LogIn = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleLoggedIn = () => { }
    const handleLoggedOut = () => { }

    return (                                                        
        <div>
            <Button onClick={handleLoggedIn}> </Button>
            <Button onClick={handleLoggedOut}> </Button>
            <div>User is {isLogIn ? 'Log In' : 'Log Out'}</div>
        </div>
    )
}

export default LogIn    