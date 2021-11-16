import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialIcons = () => {
    return (
        <>
            <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                            <a href="https://www.facebook.com/profile.php?id=100009825753366" target="_blank" className="btn-floating rgba-white-slight mx-2" >
                               <FacebookOutlinedIcon style={{fontSize:"25px"}}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/awab_322/" target="_blank" className="btn-floating  rgba-white-slight mx-2">
                               <InstagramIcon style={{fontSize:"25px" , color:"RGB: (64,93,230)"}}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/muhammad-awab-0010581b2/" target="_blank" className="btn-floating  rgba-white-slight mx-2">
                               <LinkedInIcon style={{fontSize:"25px"}}/>
                            </a>
                        </li>
                        {/* <li className="list-inline-item">
                            <a className="btn-floating  rgba-white-slight mx-2">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li> */}

      
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default SocialIcons;