import React from 'react'
import ServiceGrid from "./ServiceGrid"

function FeaturedServices() {
    return (
        <div className="featuredProducts">
            
             <h1 className="featuredProductHeading">
                <span className="featured">Featured </span>
                <span className="products">Services</span>
            </h1>
            <br />
           <div className="featuredProductsGrid">
                <ServiceGrid title="Interior Designer" image="/images/service.jpg" />
                <ServiceGrid title="Contractor" image="/images/contractor.jpg" />
                <ServiceGrid title="Architect" image="/images/service2.jpg" />
                <ServiceGrid title="Electrician" image="/images/contractor2.jpg" />
            </div>
        </div>
        
    )
}

export default FeaturedServices
