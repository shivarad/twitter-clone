import { useEffect, useState } from "react";



const Test =()=>{
    const [inner,setInner]=useState(window.innerWidth);
    const [width, setWidth] = useState(window.outerWidth);
    const [height, setHeight] = useState(window.outerHeight);
    const handleWindowResize = () => {
        setWidth(window.outerWidth);
        setHeight(window.outerHeight);
        setInner(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
        <div style={{display:"flex",flexDirection:"column",justiffyContent:"center",alignItems:"center"}}>
            <h1>innerWidth: {inner}</h1>
            <h1>width: {width}</h1>
            <h1>height: {height}</h1>
            <h2>isMobile: {Math.min(width,height)<576 ? "yes" :"no"}</h2>
        </div>
    )

    
}

export default Test;