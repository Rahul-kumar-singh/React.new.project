import React from "react";
class Wish extends React.Component{
    state = {msg:"Hello"};
    gmHandler = ()=>{
        this.setState({msg:"GOOD MORNING"});
    }
    gnHandler(){
        this.setState({msg:"GOOD NIGHT"});
    }
    render(){
        return <>
                <h1>Event Handling</h1>
                <h2>MSG:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={()=>this.gnHandler()}>Gn</button>
               </>
    }
}
export default Wish;