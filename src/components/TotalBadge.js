import React, { useState } from 'react';
import "./styles/TotalBadge.scss";


const TotalBadge = ({ theme, data, onClick }) => {

    return (    
        <div className={`total-bage ${data.borderBox} ${theme}`} onClick={onClick}>
            <div className="total-bage__main-line">
                <img src={data.logoBox} className="network-img" alt="netwotk logo"></img>
                <p className="acount-txt">{data.userAccount}</p>
            </div>
            <div className="total-bage__number">
                <p className="big-number">{data.numberFollow}</p>
                <p className="number--kind">{data.kindFollows}</p>
            </div>
            <div className="total-bage__update">
                <p className={`update-number ${data.arrowClass} ${theme}`} ><img src={data.Arrow} 
                
                className="update-arrow" alt="netwotk logo"></img>
                    {data.todayNumber} Today
                </p>
            </div>
        </div>
    )

}

TotalBadge.defaultProps = {
    borderBox: ''
}

export default TotalBadge;