import React from 'react'

function ServiceGrid(props) {
    return (
        <div className="singleProduct">
            <img className="productImage" width="320px" height="250px"  src={props.image} />
            <p className="productTitle">{props.title}</p>
            <div clasName="productButtons">
                <a className="btn addToCartBtn" href="#">Hire Now</a>
                <a className="btn viewInArBtn" href="#">View Portfolio</a>
            </div>
        </div>
    )
}

export default ServiceGrid
