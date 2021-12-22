import Axios from 'axios';
import React, { Component } from 'react'

 class ContactApp extends Component {
     constructor(props){
         super(props);
         this.state = {
             contacts:[]
         };
     }
     componentDidMount = ()=>{
        let url =
        "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
      Axios.get(url)
        .then((response) => {
          //Success repsonse
          this.setState({
            contacts: response.data,
          });
        })
        .catch(()=>{
            
        });
     };
    render() {
        return (
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className='table table-hover'>
                                <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>City</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                     this.state.contacts.length > 0   ? <>
                                     {this.state.contacts.map((contact)=>{
                                         return <tr>
                                             <td>{contact.name.first}</td>
                                             <td>{contact.email}</td>
                                             <td>{contact.location.city}</td>
                                         </tr>
                                     })}
                                     
                                     </>
                                       : null
                                    }
                                   
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactApp;
