import React from 'react';

export default class LoginState extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
    }
    getUrlVars =()=> {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    componentDidMount =()=>{
        let code = this.getUrlVars()["code"]
        let url = 'http://localhost:5000/login_success?code='
        url += code
        console.log(url)
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.setState({userData: data})
          });
    }

    render() {
        let {userData} = this.state
        return (
            <div className="LoginState">
                <div className="dataField">
                    <div className="inputLabel">User ID</div>
                    <input value={userData?.id} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">First name</div>
                    <input value={userData?.first_name} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">Last name</div>
                    <input value={userData?.last_name} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">Email</div>
                    <input value={userData?.email} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">Location</div>
                    <input value={userData?.location?.name} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">Gender</div>
                    <input value={userData?.gender} disabled/>
                </div>
                <div className="dataField">
                    <div className="inputLabel">Birthday</div>
                    <input value={userData?.birthday} disabled/>
                </div>
            </div>
        )
    }
}