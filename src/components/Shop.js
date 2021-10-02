import React from 'react'
import ProductGrid from "./ProductGrid"

function Shop() {
    return (
        <div className="shop dflexC">
             <h1 className="featuredProductHeading">
                <span className="products">Augmented Reality </span>
                <span className="featured">E-Commerce</span>
            </h1>
            <div className="row">
               
                <ProductGrid title="Gray Sofa Come Bed" price="Rs. 25,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/mo1_lngchr_ge_front_mono-lounge-chair-spitzer-grey_1024x1024.jpg" />
                <ProductGrid title="Brisk Double Bed" price="Rs. 55,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/brisk1_1024x1024.png" />
                <ProductGrid title="Chevalier Single Seater" price="Rs. 32,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/HaywardChairNHalfSOF19_3D_1024x1024.jpg?v=1621942523" />
                <ProductGrid title="Guest Coffee Table" price="Rs. 12,000" image="/images/table.jpg" />

            </div> <br /><br />
            <div className="row">
                <ProductGrid title="Gray Sofa Come Bed" price="Rs. 25,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/mo1_lngchr_ge_front_mono-lounge-chair-spitzer-grey_1024x1024.jpg" />
                <ProductGrid title="Chevalier Single Seater" price="Rs. 32,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/HaywardChairNHalfSOF19_3D_1024x1024.jpg?v=1621942523" />
                <ProductGrid title="Guest Coffee Table" price="Rs. 12,000" image="/images/table.jpg" />
                <ProductGrid title="Brisk Double Bed" price="Rs. 55,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/brisk1_1024x1024.png" />
           
            </div><br /><br />
            <div className="row">
                <ProductGrid title="Chevalier Single Seater" price="Rs. 32,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/HaywardChairNHalfSOF19_3D_1024x1024.jpg?v=1621942523" />
                <ProductGrid title="Guest Coffee Table" price="Rs. 12,000" image="/images/table.jpg" />
                <ProductGrid title="Gray Sofa Come Bed" price="Rs. 25,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/mo1_lngchr_ge_front_mono-lounge-chair-spitzer-grey_1024x1024.jpg" />
                <ProductGrid title="Brisk Double Bed" price="Rs. 55,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/brisk1_1024x1024.png" />
             
            </div>
        </div>
    )
}

export default Shop
