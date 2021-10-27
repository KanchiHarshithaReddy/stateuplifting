import React, { Component } from 'react'

export class OrderInfo extends Component {
    render() {
        return (
            <div>
                <h3>Order Information</h3>
                <label htmlFor="prod_name"> Product Name : </label>
                <select id="prod_name" onChange={(e)=>this.props.onProductChange(e.target.value)}>
                <option disabled={true} selected={true}>--Select--</option>
                    <option>Product1</option>
                    <option>Product2</option>
                    <option>Product3</option> 
                </select>

                <label htmlFor="quantity">Quantity : </label>
                <input id="quantity" type="text" value={this.props.quantity}
                onChange= {(e)=>{this.props.onQualityChange(e.target.value)}}></input>
                <hr/>
                
            </div>
        )
    }
}

export default OrderInfo
