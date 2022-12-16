import React, { useEffect, useRef } from "react";
import Style from './index.module.css';

const DotSpinner = React.memo(() => {
    const domRef = useRef(null);
    useEffect(()=>{
        let dom = domRef.current, bounds = dom.getBoundingClientRect();
        dom.style.left = '50%';
        dom.style.marginLeft = '-'+(bounds.width / 2)+'px';
    },[]);
    return (
        <div className={Style.loading} ref={domRef}>
            <div className={Style['loading-dot']}></div>
                <div className={Style['loading-dot']}></div>
                <div className={Style['loading-dot']}></div>
            <div className={Style['loading-dot']}></div>
        </div>
    );
});

export default DotSpinner;