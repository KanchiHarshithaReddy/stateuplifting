import React, { Component } from 'react'

export class Address extends Component {
    render() {
        return (
            <div>
                <h3>Address Details</h3>

                <label> Address : </label>
                <textarea value={this.props.address} 
                onChange={(e)=> this.props.onAddressChange(e.target.value)}></textarea>
                
            </div>
        )
    }
}

export default Address
