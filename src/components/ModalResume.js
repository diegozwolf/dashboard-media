import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import "./styles/ModalResume.scss";

const Modalresume = ({ data, isOpen, theme ,onClick }) => {
    
    const [chartData, setChartdata] = useState({})

    const chart = () => {
        setChartdata({
            labels: [4,5,6,7,8,9,10,11,12,13],
            datasets:[
                {
                    label: 'Followers',
                    data: [32,45,60,12,67,22,32,43,35,19],
                    backgrounColor: [
                        'hsl(243, 51%, 70%)',
                    ],
                    borderColor: 'hsl(243, 51%, 70%)',
                    borderWidth: 1,
                    fill: false,
                }
            ]
        })
    }

    useEffect(()=>{
        chart()
    }, [])

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
                    <div className="chart-section">
                        <p className="date-txt">{data.date}</p>
                        <div className="chart-cont">
                            <Line data={chartData} options={{
                                responsive: true,
                            }} />
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default Modalresume;