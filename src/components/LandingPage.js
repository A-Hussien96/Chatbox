import React from 'react';
import ChatBox from "./ChatBox"

const FACEBOOK_APP_ID = '872384276540349'

export default class LandingPage extends React.Component {
	fillData =()=>{
		let url = "https://www.facebook.com/v6.0/dialog/oauth?client_id="
		url += FACEBOOK_APP_ID
		url +='&redirect_uri=http://localhost:3000/loginState'
		url += "&scope=email,user_friends,user_location,user_birthday,user_gender,user_hometown,user_posts,user_likes"
        // document.location.href = url
        window.open(url)
	}
    render() {
        return (
            <div className="LandingPage">
            	<button id="customBtn" onClick={this.fillData}>
                    <span class="icon"></span>
                    <span class="buttonText">Fill data via Facebook</span>
                </button>
                <ChatBox/>
            </div>
        )
    }
}