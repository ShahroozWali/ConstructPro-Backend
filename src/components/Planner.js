import React from 'react'
import './planner.css'

function Planner() {
    return (
        <div className="planner">
            
        <center style={{marginTop:50}}>
            <h1>CONSTRUCTION PLAN GENERATOR</h1>
            <h2>GENERATE AI BASED CONSTRUCTION PLANS FOR YOUR PROJECTS</h2>
        </center> 


        <div className="input-container" id="planner">
            <input type="text" className="input-planner" placeholder="Enter Your Budget" /><br />
            
            <select className="input">
            <option value="" selected>5 Marla</option>
            <option value="" selected>10 Marla</option>
            <option value="" selected>1 Kanal</option>
            <option value="" selected>2 Kanal</option>
            <option value="" selected>4 Kanal</option>

            <option value="" selected>Select Plot Size</option>
            </select><br />

            <input type="text" className="input-planner" placeholder="Enter Your Budget" /><br />

            <select className="input" >
            <option value="" selected>Bahria Town Rawalpindi</option>
            <option value="" selected>Chaklala Scheme 3</option>
            <option value="" selected>Chak Shehad Islamabad</option>
            <option value="" selected>Rehman Enclave</option>
            <option value="" selected>Plot Location</option>
            </select>

            <button type="submit" className="btn-planner">NEXT</button>
            <br />
        </div>

        </div>
    )
}

export default Planner
