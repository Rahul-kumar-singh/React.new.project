import React, { Component } from 'react'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          user : {email:"",password:"",mobile:""}
        };
    }
    inputHandler = (event) =>{
        this.setState({
            user : {
                ...this.setState.user,
                [event.target.name]: event.target.value,
            },
        } );
    };
    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header bg-warning' >
                                    <h3>Sign UP</h3>
                                </div>
                                <div className='card-body'>
                                    <pre>{JSON.stringify(this.state)}</pre>
                                    <form>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Email' className='form-control' name='email' onChange={this.inputHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <input type="password" placeholder='Password' className='form-control' name='password' onChange={this.inputHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Mobile-no.' className='form-control' name='mobile' onChange={this.inputHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <input type="submit" value="signup"  className='btn btn-success'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
