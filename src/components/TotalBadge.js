import React, { useState } from 'react';
import "./styles/TotalBadge.scss"


const TotalBadge = ({ logoBox, userAccount, numberFollow, kindFollows, Arrow, todayNumber, borderBox, theme, arrowClass, onClick }) => {


    return (    
        <div className={`total-bage ${borderBox} ${theme}`} onClick={onClick}>
            <div className="total-bage__main-line">
                <img src={logoBox} className="network-img" alt="netwotk logo"></img>
                <p className="acount-txt">{userAccount}</p>
            </div>
            <div className="total-bage__number">
                <p className="big-number">{numberFollow}</p>
                <p className="number--kind">{kindFollows}</p>
            </div>
            <div className="total-bage__update">
                <p className={`update-number ${arrowClass} ${theme}`} ><img src={Arrow} 
                
                className="update-arrow" alt="netwotk logo"></img>
                    {todayNumber} Today
                </p>
            </div>
        </div>
    )

}

TotalBadge.defaultProps = {
    borderBox: ''
}

export default TotalBadge;