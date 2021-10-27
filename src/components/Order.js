import React, { Component } from 'react'
import Address from './Address'
import OrderInfo from './OrderInfo'
import Summary from './Summary'

export class Order extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity:"",
            address:"",
            productName:""
             
        }
    }

    onOrderInfoChange=(val)=>{
        this.setState({quantity:val})
    }
    checkData=()=>{
        console.log(this.state.quantity)
    }

    onAdressInfoChange=(val)=>{
        this.setState({address:val})
    }

    getProductName= (val)=>{
        this.setState({productName:val})
    }
    getAddress=()=>{ 
        console.log(this.state.address)
    }    
    checkData=()=>{
        console.log(this.state.quantity)
    }

    getProduct=()=>{ 
        console.log(this.state.productName)
    }    

    render() {
        return (
            <div>
                <h1>Welcome to product order screen..</h1>
                <hr/>
                <OrderInfo quantity={this.state.quantity} 
                onQualityChange={this.onOrderInfoChange}
                onProductChange={this.getProductName}/>
               
                {/* <hr/> */}

                <Address address={this.state.address} onAddressChange={this.onAdressInfoChange}></Address>

                <hr/>

                <Summary productName={this.state.productName}
                quantity={this.state.quantity}
                address={this.state.address}/>
                
                  <button onClick={this.getProduct}>Get productName Data</button>
                  <button onClick={this.checkData}>Get Quantity Data</button>
                  <button onClick={this.getAddress}>Get Address Data</button><br/><br/>
            </div>
            
        )
    }
}

export default Order
