import React from "react";
import CompClassB from "./CompClassB";
import CompFunC from "./CompFunC";
class CompClassA extends React.Component{
    
        emp_id = 101;
        emp_name = "Rahul";
        emp_loc = ["bangalore","mumbai","hyderabad"];
        product_info = {
            product_name:"hp-i5",
            product_price:55000
        };
        
    
    getProduct(){
        return 2 + 2;
    }
    render(){
        return <>
                <CompClassB props1 ={this.emp_id} props2={this.emp_name} props3={this.emp_loc[0]} props4={this.product_info.product_name} props5={this.getProduct()} />
                <hr />
                <CompFunC props1 ={this.emp_id} props2={this.emp_name} props3={this.emp_loc[0]} props4={this.product_info.product_name} props5={this.getProduct()}/>
               </>
    }
}
export default CompClassA;