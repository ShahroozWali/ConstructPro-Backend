import React from 'react'
import MaterialAdGrid from './MaterialAdGrid'

function MaterialAds() {
    return (
        <div className="featuredProducts">
        <h1 className="featuredProductHeading">
            <span className="featured">Material </span>
            <span className="products">Ads</span>
        </h1>

    <div className="featuredProductsGrid">

            <MaterialAdGrid title="Bricks" supplier="Shahid Khan" image="http://mobileimages.lowes.com/product/converted/693092/693092000005.jpg" />
            <MaterialAdGrid title="Cement" supplier="Shahrooz Wali" image="https://img.pngio.com/cement-fdg-trading-206414-png-images-pngio-cement-png-688_496.png" />
            <MaterialAdGrid title="Steel" supplier="Sana Ur Rehman" image="https://thumbs.dreamstime.com/b/building-armature-steel-bars-stack-white-background-reinforcing-stacked-group-metal-d-illustration-130781611.jpg" />
            <MaterialAdGrid title="Tiles" supplier="Shahrooz Wali" image="https://jenarostilestone.com/wp-content/uploads/2019/12/tilescover.png" />
           
            
        </div>
    </div>
    )
}

export default MaterialAds
