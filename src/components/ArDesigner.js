import React from 'react'

function ArDesigner() {
    return (
        <div className="ArDesigner"  style={{ backgroundImage: "url(/images/lounge.jpg)", backgroundPosition: "center center"}}>
            <div className="row">
                <div className="column ar-left">
                    <img src="/images/ar-view.png" width="70%"/>
                </div>
                <div className="column ar-right">
                    <h1>View and Shop Furniture <br />and Décor in<br /> Augmented Reality</h1>
                    <a href="/ar-view" className="yellowBtn btn" style={{marginTop: 20}}>Start AR Designer</a>
                </div>
            </div>
        </div>
    )
}

export default ArDesigner
