import React from 'react'

const Friend = (props) => {
    const { name, age, email } = props.friend
    console.log(props)

    return (
        <div className='friend'>
            <h2>name: {name}</h2>
            <h3>age: {age}</h3>
            <h3>email: {email}</h3>
        </div>
    )
}

export default Friend