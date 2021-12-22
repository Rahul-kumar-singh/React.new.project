import React, { Component } from 'react'

 class Login extends Component {
     constructor(props){
         super(props);
         this.state = {username:"",password:""}
     }
     usernameHandler = (event)=>{
        this.setState({username:event.target.value});
        
     }
     passwordHandler = (event)=>{
        this.setState({username:event.target.value});
        
     }
     loginHandler = (event) =>{
      event.preventDefault();
     }
    render() {
        return (
            <div>
                <h1>Login Form </h1>
                <form onSubmit={this.loginHandler}>
                    <label>username</label>
                    <input type="text" name="username" onChange={this.usernameHandler}/>
                    <br />
                    <label>password</label>
                    <input type="text" name="password" onChange={this.passwordHandler}/>
                    <br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
