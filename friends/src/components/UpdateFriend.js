
import React from 'react';


class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend : {
                id: '', 
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

    putFriend = e => {
        e.preventDefault()
        this.props.putFriend(this.state.friend)
    }

    render() {
        return (
            <div className='update-form'>
                <h2>Updated Friend</h2>
                <form onSubmit={this.putFriend}>
                    <input 
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={this.handleChange}
                        value={this.state.friend.name}
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='age'
                        onChange={this.handleChange}
                        value={this.state.friend.age}
                    />
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        onChange={this.handleChange}
                        value={this.state.friend.name}
                    />
                    <button className='update-btn' type='submit'>Update</button>
                </form>
            </div>
        )
    }
}

export default UpdateFriend;