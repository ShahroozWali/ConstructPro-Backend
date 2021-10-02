import React from 'react'

function DreamHome(props) {
    return (
        <div className="dreamHome" style={{ backgroundImage: props.bg }}>
            <div className="dreamHomeInner">
                <h1 className="dreamHeading1"><span>PLAN YOUR DREAM</span><span><img style={{ marginBottom: -5, marginLeft: 10 }} width="90px" src="/images/home.png" /></span></h1>
                <h1 className="dreamHeading2">USING OUR CONSTRUCTION PLANNER</h1>
                <a className="btn addToCartBtn" style={{ fontWeight: "bold", marginTop: 20}} href="planner">GENERATE PLAN</a>
            </div>
        </div>
    )
}

export default DreamHome
