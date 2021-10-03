import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from 'react-loader-spinner';


const initialStateValues = {
    credentials: {
        username: '',
        password: ''
    },
    isLoading: true,
}



const Login = () => {
    const [values, setValues] = useState(initialStateValues)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const handleChange = e => {
        setValues({
            credentials: {
                ...values.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    const login = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', values.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload);
                setLoading(false)
                history.push('/protected')

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            {loading ? (Login) : <Loader type='puff' color='#00bfff' height={80} width={80} />}
            <div className='login-form'>
                <form onSubmit={login}>
                    <input
                        type='text'
                        name='username'
                        value={values.credentials.username}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={values.credentials.password}
                        onChange={handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;