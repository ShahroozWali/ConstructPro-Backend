import React from 'react'

function MaterialAdGrid(props) {
    return (
        <div className="singleProduct">
            <img className="productImage" width="320px" height="250px" src={props.image} />
            <p className="productTitle">{props.title}</p>
            <p className="productPrice materialSupplier">{props.supplier}</p>
            <div clasName="productButtons">
                <a className="btn viewInArBtn" href="/ar-view">View Ad</a>
            </div>
        </div>
    )
}

export default MaterialAdGrid
