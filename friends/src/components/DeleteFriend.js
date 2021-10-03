import React from 'react'

class DeleteFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    deleteMFriend = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='friend-form'>
                <h2>DELETE a friend</h2>
                <form onSubmit={this.deleteMFriend}> 
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={this.state.friend.name}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.handleChange}
                        value={this.state.friend.age}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        value={this.state.friend.email}
                    />
                <button className='friends-btn' type='submit'>Delete Friend</button>
                </form>
            </div>
        )
    }
}

export default DeleteFriend;