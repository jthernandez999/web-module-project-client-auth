import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';




const Logout = () => {
    const history = useHistory()

    axiosWithAuth()
        .post('/logout', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }) 
        .then(res => {
            localStorage.removeItem('token')
            history.push('/login')
        })
        .catch(err => { 
            console.log(err)
        })
        return (
            <div className ='logout'>
                <h2>You have successfully logged out</h2>
            </div>
        )
}

export default Logout;

// const Logout = (props) => {

//     axiosWithAuth()
//         .post('/logout')
//         .then(res => {
//             localStorage.removeItem('token')
//             props.history.push('/login')
//         }).catch(err => {
//             console.log(err)
//         })

//     return(
//         <div className='logout'>
//             <h1>You have logged out successfully</h1>
//         </div>
//     )
// }

// export default Logout;