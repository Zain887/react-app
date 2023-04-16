import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './loadingAnimation.css'

function LoadingAnimation() {
    const [className, setClassName] = useState('down');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setClassName("up");
        }, 2000); // Change class after 2 seconds
        return () => clearTimeout(timeout);
    }, []);

    const navigate = useNavigate();
    useEffect(()=>{
        const animationTimeout = setTimeout(()=>{
            navigate('/');
        }, 4000);
        return ()=> clearTimeout(animationTimeout);
    }, [navigate]);
    return (
        <>
            <div className="starting">
                <div className="word-wrraper">
                    <h1>C</h1>
                    <h1>Y</h1>
                    <h1>B</h1>
                    <h1>E</h1>
                    <h1>R</h1>
                    <h1>U</h1>
                    <h1>G</h1>
                    <h1>G</h1>
                    <h1>S</h1>
                </div>
                <form className={className}>
                    <label htmlFor="">Please Enter Your Name</label>
                    <input type="text" />
                    <button>Visit Site</button>
                </form>
            </div>
        </>
    );
}

export default LoadingAnimation