import React, { useState } from 'react';
import "./styles/ModalResume.scss";

const Modalresume = ({ data, isOpen, theme ,onClick }) => {
    console.log(data , isOpen, theme)
    if(!isOpen) return null
    return (
        <div>
            <div className="overlay" onClick={onClick}></div>
                <div className={`container ${theme}`}>
                    <div className="head-section">
                        <h5>{data.network} Followers</h5> 
                        <button onClick={onClick}>X</button>
                    </div>
                    <div className="account-section">
                        <img src={data.logoBox} className="network-img" alt="netwotk logo"></img>
                        <p className="acount-txt">{data.userAccount}</p>
                    </div>
                    <div className="data-section row">
                        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12 d-flex align-items-center col-number">
                            <p className="follow-number">{data.numberFollow}</p>
                            <span className="text-description">Total followers</span>
                        </div>
                        
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 d-flex align-items-center">
                            <p className={`update-number ${data.tenDaysArrowTxt} ${theme}`} >
                                <img src={data.tenDaysArrow} className="update-arrow" alt="netwotk logo"></img>
                                {data. tenDayNumber} 
                            </p>
                            <span className="text-description mid-txt">New followers in the past 10 days</span>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 d-flex align-items-center">                       
                            <p className={`update-number ${data.arrowClass} ${theme}`} >
                                <img src={data.Arrow} className="update-arrow" alt="netwotk logo"></img>
                                {data.todayNumber} 
                            </p>
                            <span className="text-description mid-txt"> New followers TODAY</span>
                        </div>
                    </div>
                    <div className="chart-cont">
                        <p className="date-txt">{data.date}</p>
                    </div>
                </div>
        </div>
    )

}

export default Modalresume;