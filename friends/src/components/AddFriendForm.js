import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
        id: '',
        name: '',
        age: '',
        email: ''
}

const AddFriendForm = ({ friends, setFriends }) => {

    const [formValues, setFormValues] = useState(initialFormValues)

    const postNewFriend = newFriend => {
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res.data)
                setFriends([...friends, newFriend])
                setFormValues(initialFormValues)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)

    }

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    const formSubmit = (evt) => {
        evt.preventDefault()
        const newFriend = {
            id: friends.length,
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            email: formValues.email.trim()
        }
        postNewFriend(newFriend)
    }

    return (
        <form className='form-wrapper' onSubmit={formSubmit}>
            <label>
                Name:
                <input type='text' name='name' onChange={onChange} value={formValues.name} />
            </label>
            <label>
                Age:
                <input type='text' name='age' onChange={onChange} value={formValues.age} />
            </label>
            <label>
                Email:
                <input type='email' name='email' onChange={onChange} value={formValues.email} />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default AddFriendForm;