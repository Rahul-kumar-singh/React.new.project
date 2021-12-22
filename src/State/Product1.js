import React from "react";
class Product1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mobile_Num : 9113784391,
            network : "JIO"
        }
    }
    changeMob = ()=>{
        this.setState({mobile_Num:858708571,network:"VODAFONE"})
    }
    render(){
        return <>
                 <div className="container">
                     <h3>Mobile Number:{this.state.mobile_Num}</h3>
                     <h3>Network: {this.state.network}</h3>
                     <button className="btn btn-success" onClick={this.changeMob}>Change</button>
                 </div>
               </>
    }
}
export default Product1;