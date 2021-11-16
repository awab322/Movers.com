import React,{useState , useEffect} from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import useWindowScroll from 'use-window-scroll-hook'

const ScrollToTop = () => {

    const {scrollY} = useWindowScroll();
    const[visible,setVisible]=useState(false);

    useEffect(() => {
        if(scrollY > 50)
            { 
                setVisible(true); 
            }
        else
            {
                setVisible(false);
            }
    }, [scrollY])

    // visible ? false : null;
    if(!visible)
    {
        return false;
    }

    let scrolled = ()=> window.scrollTo ({top:0 , behavior :"smooth"});


    
    return (
        <>
        <div className="scroll-to-top text-center">
            <ArrowCircleUpIcon className="icon" onClick={scrolled} />
        </div>
            
        </>
    )
}


export  default ScrollToTop;