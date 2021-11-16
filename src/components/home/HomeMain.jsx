import React from 'react'
// import "../index.css";
import PricePlan from './PricePlan'
import WeOffer from './WeOffer'
import ProjectsCompleted from './ProjectsCompleted'
import GetAquote from './GetAquote'







const HomeMain = () => {
    return (
        <>
        <div>
            <img src="./images/home/bg.jpg" alt="PallaHere" className="bckImg" />
            {/* <div className="text-wrapper">
                <h1>Movers & Packers</h1>
            </div> */}
        </div>

        <PricePlan/>
        <WeOffer />
        <br/>
        <GetAquote/>
        <br/>
        <ProjectsCompleted/>
        <br/>
            
        </>
    )
}

export default HomeMain;