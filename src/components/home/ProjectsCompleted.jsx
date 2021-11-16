import React,{useEffect,useState} from 'react'
import {Typography}   from '@mui/material';
import CountUp,{useCountUp} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import ProjectsCompletedData from './ProjectsCompletedData'

import Aos from "aos"

const ProjectsCompleted = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

let[pcData,setPcData]=useState(ProjectsCompletedData);


    return (
        <>
            <div className="container-fluid" style={{background: "#f2f2f2"}}>
                <div className="row">
                
                {
                    pcData.map((qqq)=>{
                    let {quantity,mdata}=qqq;
                    return(
                        <>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center extradiv">
                        <div data-aos="zoom-in" data-aos-once='true'  data-aos-duration="2000">
                            <hr/>
                            <Typography className="count" variant="h4" style={{color:"red"}} >                          
                            <CountUp duration={2} start={0} end={quantity}   redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography variant="h4" style={{color:"rgba(0, 0, 3, 0.8)"}} >{mdata}</Typography>
                            <hr/>
                        </div>    
                    </div>
                        </>
                    )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default ProjectsCompleted;
