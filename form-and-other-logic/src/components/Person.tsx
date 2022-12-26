import React from 'react'

type PersonProp = {
    name: {
        first: string
        last: string

    }

}

function Person(props: PersonProp) {
    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}

export default Person