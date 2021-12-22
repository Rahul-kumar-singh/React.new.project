import React, { Component } from 'react'

 class SmsApp extends Component {
     constructor(props){
         super(props);
         this.state = {
             count : 100
         }
     };
     inputHandler = (event) => {
        this.setState({count:100 - event.target.value.length});
     };
    render() {
        return (
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header bg-warning'>
                                    <h3>SMS Application</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                       <div className='form-group'>
                                       <textarea rows="4" maxLength="100" className='form-control' onChange={this.inputHandler}> </textarea>
                                       </div>
                                       <p className='h4'> Remaining Chars:{this.state.count}</p>
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

export default SmsApp;
