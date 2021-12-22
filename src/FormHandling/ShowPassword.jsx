import React, { Component } from 'react'

 class ShowPassword extends Component {
     state = {
         inputType:"password"
     }
     changeHandler = () =>{
      this.setState({inputType:"text"});
     }
    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header'>
                                   <h3>Show Password</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                       <div className='input-group mb-3'>
                                           <div className='input-group-prepend'>
                                               <div className='input-group-text'>
                                                   <input type='checkbox' aria-label='Checkbox for following text input'
                                                   onChange={this.changeHandler} />
                                               </div>
                                           </div>
                                           <input type={this.state.inputType} placeholder='Password' 
                                            aria-label='password' aria-describedby='basic-addon1'
                                            className='form-control' />
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

export default ShowPassword;
