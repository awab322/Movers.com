import React from 'react'
import Skeleton1 from '@mui/material/Skeleton';

const FreightsSkeleton = () => {
    return (
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"  >
            <div className="o">
            <center><Skeleton1  className="cards1"  variant="circular" height={100} width={100} /></center>
                <div className="card-body">
                <h1><Skeleton1 /></h1>
                <p><Skeleton1 /></p>
                <p><Skeleton1 /></p>
                </div>
            </div>
        </div>



            
        </>
    )
}

export default FreightsSkeleton;