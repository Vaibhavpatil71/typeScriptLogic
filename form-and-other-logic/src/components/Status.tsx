import React from 'react'
type StatusProp = {
    status:'loading'| 'sucess' | 'error'
}

const Status = (props: StatusProp) => { 
    
    let message
    
    if (props.status === 'loading') {
        message = 'loading'
    }else if(props.status === 'sucess'){
        message="sucessfull"
    }
    else if(props.status === 'error'){
        message="error"
    }
    // console.log(props)
    return (
        <div>
            {/* conditional render */}
            {/* <h3>status -{message}</h3> */}
            


            
        </div>
    )
}

export default Status