import React from "react";
import Landingpagenavbar from "./Navbar";
import '../app.css'
 import Button from "react-bootstrap/esm/Button";
function landingpage(){

    return <div className="landingpagebody">
        <Landingpagenavbar/>
       <div className="landingpagebodygrid">
        <div className="Launch">Launch your creativity into the world </div>
        <div className="Fund"> Fund the <br/>Future  </div>
        
        <div className="Vision">Where Visionary creator meets passionate backers.Transform ideas into reality with the power of community funding </div>
       <div className="buttons">
        <Button variant="light" href="#login" className="button1">
              Start Creating
            </Button>
            <Button variant="light" href="#signup" className="button2">
              Explore Projects 
            </Button></div>
       </div>
        
    </div>
}


export default landingpage