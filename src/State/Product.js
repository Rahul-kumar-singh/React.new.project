import React from "react";
class Product extends React.Component{
    state={
        Qty : 10,
        image : "https://rukminim1.flixcart.com/image/612/612/k8vyf0w0/smartwatch/h/c/n/wrb-sw-colorfitpro2-std-blk-android-ios-noise-original-imafqsqgcgsb79fg.jpeg?q=70",
        price:25000,
    }
    change_price = () =>{
       this.setState({price:30000});
    }
    render(){
        return <>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="card-header">
                             <img src={this.state.image} height="80px" width="80px" alt=" Not available" />
                             <h3>Qty:{this.state.Qty}</h3>
                             <h3>Price:{this.state.price}</h3>
                          </div>
                          <div className="card-body">
                               <button onClick={this.change_price}>Submit</button>
                          </div>
                      </div>
                  </div>
              </div>
              </>
    }
}
export default Product;