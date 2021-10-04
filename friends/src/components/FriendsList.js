import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='friends-list'>
            <h1>List of Friends</h1>

            <AddFriendForm setFriends={setFriends} friends={friends}/>

            {friends && (
                <div className='friends'>
                {friends.map(friend => (
                <Friend key= {friend.id} friend={friend}/>
            ))}
                </div>
            )}
            
        </div>
    )
}

export default FriendsList