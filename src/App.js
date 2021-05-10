import React, { useState } from "react";
import "./App.scss";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

import TotalBadge from './components/TotalBadge';
import DailyBadge from './components/DaylyBadge';
import ModalResume   from './components/ModalResume';

import faceLogo from './components/images/icon-facebook.svg';
import twitLogo from './components/images/icon-twitter.svg';
import instaLogo from './components/images/icon-instagram.svg';
import youtLogo from './components/images/icon-youtube.svg';
import ArrowUp from './components/images/icon-up.svg';
import ArrowDown from './components/images/icon-down.svg';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const mediaTotalInfo = [{
    network: "Facebook",
    borderBox: "face-border",
    logoBox: faceLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    interactionNumber:"87",
    date: "May 4 - May 13",
    interactionType: "Page Views",
    interactionAmmount:"3"
  },{
    network: "Twitter",
    borderBox: "twit-border",
    logoBox: twitLogo,
    userAccount: "@nathamf",
    numberFollow:"1044",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    arrowClass: "arrow-up",
    todayNumber: "27",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    todayNumber: "99",
    interactionType:"Total Views",
    interactionNumber:"87",
    date: "May 4 - May 13",
    interactionType: "Page Views",
    interactionAmmount:"3"
  },{
    network: "Instagram",
    borderBox: "insta-border",
    logoBox: instaLogo,
    userAccount: "@realnathamf",
    numberFollow:"11k",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    todayNumber: "1099",
    interactionType:"Total Views",
    interactionNumber:"87",
    date: "May 4 - May 13",
    interactionType: "Page Views",
    interactionAmmount:"3"
  },{
    network: "Youtube",
    borderBox: "yout-border",
    logoBox: youtLogo,
    userAccount: "Nathan F.",
    numberFollow:"8239",
    kindFollows: "SUSCRIBERS",
    Arrow: ArrowDown,
    arrowClass: "arrow-down",
    todayNumber: "12",
    tenDaysArrow: ArrowDown,
    tenDaysArrowTxt:"arrow-down",
    tenDayNumber:"81",
    todayNumber: "144",
    interactionType:"Total Views",
    interactionNumber:"87",
    date: "May 4 - May 13",
    interactionType: "Page Views",
    interactionNumber:"87",
    interactionAmmount:"3"
  }
]

const mediaDailyInfo = [
  { network: "Facebook",
    borderBox: "face-border",
    logoBox: faceLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    interactionNumber:"87",
    date: "May 4 - May 13",
    interactionType: "Page Views",
    interactionAmmount:"3"
  },{
    network: "Facebook",
    borderBox: "face-border",
    logoBox: faceLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    interactionNumber:"52",
    date: "May 4 - May 13",
    interactionType: "Likes",
    interactionAmmount:"2"
  },{
    network: "Instagram",
    borderBox: "insta-border",
    logoBox: instaLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    date: "May 4 - May 13",
    interactionType: "Likes",
    interactionNumber:"5462",
    interactionAmmount:"2257"
  }
  ,{
    network: "Instagram",
    borderBox: "insta-border",
    logoBox: instaLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    date: "May 4 - May 13",
    interactionType: "Profile Views",
    interactionNumber:"52k",
    interactionAmmount:"1375"
  }
  ,{
    network: "Twitter",
    borderBox: "insta-border",
    logoBox: twitLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    date: "May 4 - May 13",
    interactionType: "Retweets",
    interactionNumber:"117",
    interactionAmmount:"303"
  }
  ,{
    network: "Twitter",
    borderBox: "insta-border",
    logoBox: twitLogo,
    userAccount: "@nathamf",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowUp,
    arrowClass: "arrow-up",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    date: "May 4 - May 13",
    interactionType: "Likes",
    interactionNumber:"507",
    interactionAmmount:"303"
  } ,{
    network: "YouTube",
    borderBox: "insta-border",
    logoBox: youtLogo,
    userAccount: "Nathan f.",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowDown,
    arrowClass: "arrow-down",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    Number:"5462",
    date: "May 4 - May 13",
    interactionType: "Likes",
    interactionNumber:"107",
    interactionAmmount:"19"
  } ,{
    network: "YouTube",
    borderBox: "insta-border",
    logoBox: youtLogo,
    userAccount: "Nathan f.",
    numberFollow:"1987",
    kindFollows: "FOLLOWERS",
    Arrow: ArrowDown,
    arrowClass: "arrow-down",
    todayNumber: "12",
    tenDaysArrow: ArrowUp,
    tenDaysArrowTxt:"arrow-up",
    tenDayNumber:"81",
    interactionType:"Total Views",
    date: "May 4 - May 13",
    interactionType: "Total Views",
    interactionNumber:"107",
    interactionAmmount:"12"
  }
]

function App() {
  const [theme, setTheme] = useState("light");
  const [popup, setPopup] = useState(false)
  const [data, setData] = useState({})


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleModal = (info) => {
    // pasar demas estados para el modal
    setData(
      info
    )
    setPopup(currentState => !currentState)
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>

        <div className="row header">
          <div className="col-6 tittle-space">
            <h5 className={`first-title ${theme}`} >Social Media Dashboard</h5>
            <p>Total Followers: 23,0004</p>
          </div>
          <div className="col-6 btn-col">
            <p>Dark Mode</p>

            <label className="switchBtn">
              <input type="checkbox" onClick={() => themeToggler()} />
              <div className="slide round"></div>
            </label>
          </div>
        </div>
        
                
        <div className="total-media">
          {mediaTotalInfo.map(item =>
            <TotalBadge theme={theme} data={item} onClick={() => handleModal(item)} />
          )}
        </div>

        <div className="daily-media">
          <h6 className={`second-title ${theme}`}>Overview - Today</h6>
          
          {mediaDailyInfo.map(item =>
            <DailyBadge theme={theme} data={item} onClick={() => handleModal(item)} />
          )}
          
        </div>

        <ModalResume theme={theme} data={data} isOpen={popup} onClick={()=>setPopup(currentState=>!currentState)} />

      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
