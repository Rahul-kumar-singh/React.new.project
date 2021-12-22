import React from 'react';
import CompFunB from './CompFunB';
import CompFunC from './CompFunC';
const CompFunA = ()=>{
    let emp_no = 101;
    let emp_name = "Rahul";
    let emp_loc = ["Bangalore","Mumbai","Hyderabad"];
    let product_info = {
        product_name:"hp-i5",
        product_price:55000
    }
    return <div>
              <h1>React Props Example</h1>
              <CompFunB props1={emp_no} props2={emp_name} props3={emp_loc[0]} props5={product_info.product_name} />
              <hr />
              <CompFunC  props1={emp_no} props2={emp_name} props3={emp_loc[0]} props5={product_info.product_name}/>
          </div>
}
export default CompFunA;