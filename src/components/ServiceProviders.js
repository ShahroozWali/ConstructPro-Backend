import React from 'react'
import ServiceGrid from "./ServiceGrid"

function ServiceProviders() {
    return (
        <div className="serviceProviders dflexC">
            <h1 className="featuredProductHeading">
                <span className="products">Service </span>
                <span className="featured">Providers</span>
            </h1><br /><br />
            <div className="row">
                <ServiceGrid title="Interior Designer" image="/images/service.jpg" />
                <ServiceGrid title="Contractor" image="/images/contractor.jpg" />
                <ServiceGrid title="Architect" image="/images/service2.jpg" />
                <ServiceGrid title="Electrician" image="/images/contractor2.jpg" />
            </div> <br /><br />
            <div className="row">
                <ServiceGrid title="Property Advisor" image="/images/service2.jpg" />
                <ServiceGrid title="Electrician" image="/images/contractor2.jpg" />
                <ServiceGrid title="Interior Designer" image="/images/service.jpg" />
                <ServiceGrid title="Civil Engineer" image="/images/contractor.jpg" />
            </div> <br /><br />
            <div className="row">
                <ServiceGrid title="Contractor" image="/images/contractor.jpg" />
                <ServiceGrid title="Architect" image="/images/service2.jpg" />
                <ServiceGrid title="Electrician" image="/images/contractor2.jpg" />
                <ServiceGrid title="Interior Designer" image="/images/service.jpg" />
            </div>
        </div>
    )
}

export default ServiceProviders
