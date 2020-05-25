import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductItem extends Component {
    render() {
        return (
            
            <div className="col-md-6 col-lg-4 mt-5" style={{padding: "0 2.2rem"}}>
                <div className="card" style={{"width": "18rem"}}>
                    <Link to={`/product/${this.props.id}`}>
                    <img className="card-img-top" src={this.props.image} style={{height: "15.5rem"}} alt="Product-Post"/>
                    </Link>
                    <hr/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.brand}</h6>
                        <p className="card-text">Price: {this.props.price}/- INR</p>
                    </div>
                </div>
            </div>
        )
    }
}
