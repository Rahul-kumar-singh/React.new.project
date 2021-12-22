import React from "react";
const ReactExpression = ()=>{
    let emp_no = 101;
    let emp_name = "Rahul";
    let emp_loc = ["Bangalore","Mumbai","Hyderabad"];
    let product_info = {
        product_name:"hp-i5",
        product_price:55000
    }
    return <>
          <h1>how to use React expression in react component</h1>
          <h2>emp_n0:{emp_no}</h2>
          <h3>employeeName:{emp_name}</h3>
          <h3>emp_loc:{emp_loc[1]}</h3>
          <h3>product_info:{product_info.product_name}</h3>
          </>

}
export default ReactExpression;