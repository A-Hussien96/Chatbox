import React from 'react';
import './stylesheets/App.css';
import ChatBox from "./components/ChatBox"




export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ChatBox/>
            </div>
        )
    }
}
