import React, { useState } from 'react';
import "./styles/ModalResume.scss";

const Modalresume = ({ data, isOpen, theme,onClick }) => {
    console.log(data , isOpen)
    if(!isOpen) return null
    return (
        <div>
            <div className="overlay" onClick={onClick}></div>
                <div className="container">
                    <div className="head-section">
                        <h5>{data.network} Followers</h5> 
                        <button onClick={onClick}>X</button>
                    </div>
                    <div className="account-section">
                        <img src={data.logoBox} className="network-img" alt="netwotk logo"></img>
                        <p className="acount-txt">{data.userAccount}</p>
                    </div>
                    <div className="data-section">
                        <p className="follow-number">{data.numberFollow}</p>
                        <p className="text-description">Total followers</p>
                        <p className={`update-number ${data.tenDaysArrowTxt} ${theme}`} >
                            <img src={data.tenDaysArrow} className="update-arrow" alt="netwotk logo"></img>
                            {data. tenDayNumber} new followers in the past 10 days
                        </p>
                        <p className={`update-number ${data.arrowClass} ${theme}`} >
                            <img src={data.Arrow} className="update-arrow" alt="netwotk logo"></img>
                            {data.todayNumber} New followers TODAY
                        </p>
                    </div>
                    <div className="date-section">
                        <p>{data.date}</p>
                    </div>
                </div>
        </div>
    )

}

export default Modalresume;