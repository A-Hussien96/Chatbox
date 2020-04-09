import React, {Component} from 'react';
import {Launcher} from 'react-chat-window';
import {agent, steps, FINISHED_STEPS, BRANCHING_CONDITION, INCOMPLETE_STEPS} from "../assets/Constants";

export default class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageList: [],
            currentStepNum: 0,
            responses: []
        }
    }

    componentDidMount = async () => {
        let myStorage = window.localStorage;
        // let currentStepNum = myStorage.getItem("currentStepNum");
        let currentStepNum = null;
        if (currentStepNum) {
            this.setState({currentStepNum});
        } else {
            currentStepNum = 0;
            let step = steps[currentStepNum];
            for (let i = 0; i < step.msg.length; i++) {
                await this.sleep(1000);
                this._sendMessage(step.msg[i]);
            }
        }
    };

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    _onMessageWasSent = async (message) => {
        this.setState({
            messageList: [...this.state.messageList, message]
        });
        let msgToSend = this.validateMessage(message);
        for (let i = 0; i < msgToSend.length; i++) {
            await this.sleep(1000);
            this._sendMessage(msgToSend)
        }
    };

    validateMessage = (message) => {
        let {currentStepNum, responses} = this.state;
        let step = steps[currentStepNum];
        let txt = message.data.text;
        let response = "";
        if (txt in step.response) {
            if (currentStepNum === BRANCHING_CONDITION && txt === "2") {
                currentStepNum = INCOMPLETE_STEPS;
                responses.push(txt);
            } else {
                currentStepNum++;
                responses.push(txt);
            }
            this.setState({currentStepNum, responses});
            step = steps[currentStepNum];
            response = step.msg;
        } else {
            if(Object.keys(step.response).length === 0 && currentStepNum === INCOMPLETE_STEPS){
                responses.pop();
                currentStepNum = BRANCHING_CONDITION;
                this.setState({currentStepNum, responses});
                step = steps[currentStepNum];
                response = step.msg;
            } else if(Object.keys(step.response).length === 0 && currentStepNum === FINISHED_STEPS){
                console.log(responses);
                response = [`You have already finished your profile, If you want to change your responses go to your profile page`]
            } else {
                response = [`I can't understand, please type a number between 1 and ${Object.keys(step.response).length}`]
            }
        }
        return response;
    };

    _sendMessage = async (text) => {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: {text}
                }]
            })
        }
    };

    render() {
        return (
            <div>
                <Launcher
                    agentProfile={agent}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji={false}
                    newMessagesCount={1}
                />
            </div>
        );
    }
}
