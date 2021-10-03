import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Logout = (props) => {

    axiosWithAuth()
        .post('/logout')
        .then(res => {
            localStorage.removeItem('token')
            props.history.push('/login')
        }).catch(err => {
            console.log(err)
        })

    return(
        <div className='logout'>
            <h1>You have logged out successfully</h1>
        </div>
    )
}

export default Logout;