import React from 'react';
import defaultAvatar from '@/assets/images/yyx.jpeg'
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            defaultAvatar,
        }
    }
    render(){
        return (
            <div className="profile-wrapper">
                <p>Profile页面</p>
                <img src={this.state.defaultAvatar} alt="头像"></img>
            </div>
        )
    }
}

export default Profile