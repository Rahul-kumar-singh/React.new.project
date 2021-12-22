import React from "react";
class CompFunC extends React.Component{
render(){
    return <>
      <h1>This is CompFunC</h1>
        <h2>employee number:{this.props.props1}</h2>
        <h2>employee name:{this.props.props2}</h2>
        <h2>employee locatio:{this.props.props3}</h2>
        <h2>product_info:{this.props.props5}</h2>

      
      </>
        

}
}
export default CompFunC;