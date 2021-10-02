import React from 'react'
import Webcam from "react-webcam";

function ArView() {
    const WebcamComponent = () => <Webcam />;

    const videoConstraints = {
        facingMode: "user"
      };

      const myStyle = {
          position: "absolute",
          top: "42%",
          left:"35%"
      }

      
     
    return (
        <div className="webCamArea" style={{height:"90vh",backgroundImage: "url(/images/lounge.jpg)", backgroundPosition: "center center" }}>
            <Webcam 
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
            />

            <img className="sofa" src="/images/sofa.png" width="30%" style={myStyle}/>
        </div>
    )
    
}

export default ArView
