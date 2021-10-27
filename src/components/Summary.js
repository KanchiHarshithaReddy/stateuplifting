import React, { Component } from 'react'

export class Summary extends Component {
    render() {
        return (
            <div>
                <h3>Summary..</h3>

                <label>Product Name: </label>
                <span>{this.props.productName}</span> <br/>

                <label>Quantity: </label>
                <span>{this.props.quantity}</span><br/>


                <label>Address: </label>
                <span>{this.props.address}</span><br/>


                
            </div>
        )
    }
}

export default Summary
