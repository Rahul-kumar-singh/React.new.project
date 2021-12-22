import React from "react";
class Hike extends React.Component{
    state = {
        salary:50000,
        hike:0
    };
    hikeHandler = (value) =>{
        this.setState({hike:value});
    }
    
    render(){
        return <> 
                 <h3>Hike:{this.state.hike}</h3>
                 <button className="btn btn-primary" onClick={this.hikeHandler.bind(this,15)}>15%</button>
                 <button className="btn btn-success" onClick={this.hikeHandler.bind(this,20)}>20%</button>
                 <button className="btn btn-warning" onClick={this.hikeHandler.bind(this,50)}>50%</button>
               </>
    }
}
export default Hike;