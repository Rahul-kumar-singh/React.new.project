import React from 'react'

 function CompFunC(props) {
    return (
        <div>
            <h1>This is from CompFunC</h1>
            <h2>emp_id:{props.props1}</h2>
                 <h2>emp_name:{props.props2}</h2>
                 <h2>emp_loc:{props.props3}</h2>
                 <h2>product_info:{props.props4}</h2>
                 <h2>method:{props.props5}</h2>
            
        </div>
    )
}
export default CompFunC;
