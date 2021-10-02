import React from 'react'

function ProductGrid(props) {
    return (
        <div className="singleProduct">
            <img className="productImage" width="320px" height="250px" src={props.image} />
            <p className="productTitle">{props.title}</p>
            <p className="productPrice">{props.price}</p>
            <div clasName="productButtons">
                <a className="btn addToCartBtn" href="#">Add to Cart</a>
                <a className="btn viewInArBtn" href="/ar-view">View in AR</a>
            </div>
        </div>
    )
}

export default ProductGrid
