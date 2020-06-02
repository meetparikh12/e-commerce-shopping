import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from 'react-global-configuration';
export default class ProductItem extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 mt-5 product_item" style={{padding: "0 2.2rem"}}>
                <div className="card" style={{"width": "100%"}}>
                    <Link to={`/product/${this.props.id}`}>
                    <img className="card-img-top" src={`${config.get('backend_asset_url')}/${this.props.image}`} style={{height: "17.5rem", borderBottom: "1px solid rgba(0,0,0,.1)"}} alt="Product-Post"/>
                    </Link>
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
