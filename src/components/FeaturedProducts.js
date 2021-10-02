import React from 'react'
import ProductGrid from "./ProductGrid"
import ProductsData from "../data/ProductsData"

class FeaturedProducts extends React.Component {
   
        constructor(){
            super()
            this.state = {
                products: ProductsData
            }
        }

        render(){

            return (
                <div className="featuredProducts">
                    <h1 className="featuredProductHeading">
                        <span className="featured">Featured </span>
                        <span className="products">Products</span>
                    </h1>

                <div className="featuredProductsGrid">

                        <ProductGrid title="Gray Sofa Come Bed" price="Rs. 25,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/mo1_lngchr_ge_front_mono-lounge-chair-spitzer-grey_1024x1024.jpg" />
                        <ProductGrid title="Brisk Double Bed" price="Rs. 55,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/brisk1_1024x1024.png" />
                        <ProductGrid title="Chevalier Single Seater" price="Rs. 32,000" image="https://cdn.shopify.com/s/files/1/0237/4985/3264/products/HaywardChairNHalfSOF19_3D_1024x1024.jpg?v=1621942523" />
                        <ProductGrid title="Guest Coffee Table" price="Rs. 12,000" image="/images/table.jpg" />

                        
                    </div>
                </div>
                
            )
        }
}

export default FeaturedProducts
