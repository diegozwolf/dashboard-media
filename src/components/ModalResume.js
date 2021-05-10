import React from "react"; 
import {
        LineChart,
        Line,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip,
    } from "recharts";

import "./styles/ModalResume.scss";
const dataChart = [
    {
        name: "4",
        pv: 240,
        amt: 100
    },
    {
        name: "5",
        pv: 98,
        amt: 1000
    },
    {
        name: "6",
        pv: 207,
        amt: 1000
    },
    {
        name: "7",
        pv: 18,
        amt: 1000
    },
    {
        name: "8",
        pv: 290,
        amt: 1000
    },
    {
        name: "9",
        pv: 38,
        amt: 1000
    },
    {
        name: "10",
        pv: 39,
        amt: 1000
    },
    {
        name: "11",
        pv: 45,
        amt: 1000
    },
    {
        name: "12",
        pv: 144,
        amt: 1000
    },
    {
        name: "13",
        pv: 30,
        amt: 100
    }
];
const Modalresume  = ({ data, isOpen, theme ,onClick }) => {


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
                                {data.tenDayNumber} 
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
                    <div className="chart-section">
                        <p className="date-txt">{data.date}</p>
                        <div className="chart-cont">
                            <LineChart
                                width={650}
                                height={180}
                                data={dataChart}
                                margin={{
                                top: 5,
                                right: 10,
                                left: 1,
                                bottom: 5,
                            }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize="8px"  />
                                <YAxis  fontSize="8px"/>
                                <Tooltip />
                                <Line type="monotone" dataKey="pv" stroke="hsl(243, 51%, 70%)" activeDot={{ r: 4 }} />
                            </LineChart>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default Modalresume; 