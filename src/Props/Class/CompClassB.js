import React from "react";
class CompClassB extends React.Component{
    render(){
        return <>
                 <h1>This is from CompClassB</h1>
                 <h2>emp_id:{this.props.props1}</h2>
                 <h2>emp_name:{this.props.props2}</h2>
                 <h2>emp_loc:{this.props.props3}</h2>
                 <h2>product_info:{this.props.props4}</h2>
                 <h2>method:{this.props.props5}</h2>
               </>
    }
}
export default CompClassB;