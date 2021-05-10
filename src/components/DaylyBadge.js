import React, { useState } from 'react';
import "./styles/DaylyBadge.scss"



const DailyBadge = ({ data, onClick, theme }) => {

    return (
        <div className={`daily-badge ${theme}`}  onClick={onClick}>
            <div className="daily-badge-interaction">
                <p className="interaction-type">{data.interactionType}</p>
                <img src={data.logoBox} className="network-img" alt="network image"></img>
            </div>
            <div className="daily-badge-numbers">
                <p className="interaction-number">{data.interactionNumber}</p>
                <p className={`interaction-ammount ${data.arrowClass} ${theme}`}>
                    <img src={data.Arrow} className="interaction-arrow"></img>
                    {data.interactionAmmount}%
                </p>
            </div>
        </div>
    )

}

export default DailyBadge;