import React, { useState } from 'react';
import "./styles/DaylyBadge.scss"



const DailyBadge = ({ interactionType, logoBox, interactionNumber, interactionAmmount, Arrow, arrowClass, theme }) => {

    return (
        <div className={`daily-badge ${theme}`}>
            <div className="daily-badge-interaction">
                <p className="interaction-type">{interactionType}</p>
                <img src={logoBox} className="network-img" alt="network image"></img>
            </div>
            <div className="daily-badge-numbers">
                <p className="interaction-number">{interactionNumber}</p>
                <p className={`interaction-ammount ${arrowClass} ${theme}`}>
                    <img src={Arrow} className="interaction-arrow"></img>
                    {interactionAmmount}%
                </p>
            </div>
        </div>
    )

}

export default DailyBadge;