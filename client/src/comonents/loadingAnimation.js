import React, {useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './loadingAnimation.css'

function LoadingAnimation() {
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
            </div>
        </>
    );
}

export default LoadingAnimation