import React, { useState } from "react";
import "./App.scss";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

import TotalBadge from './components/TotalBadge';
import DailyBadge from './components/DaylyBadge'

import faceLogo from './components/images/icon-facebook.svg';
import twitLogo from './components/images/icon-twitter.svg';
import instaLogo from './components/images/icon-instagram.svg';
import youtLogo from './components/images/icon-youtube.svg';
import ArrowUp from './components/images/icon-up.svg';
import ArrowDown from './components/images/icon-down.svg';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [popup, setPopup] = useState(false)
  const [data, setData] = useState({})


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleModal = () => {
    // pasar demas estados para el modal
    setData({
      name: 'fac',
      number: 2323
    })
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

            <label class="switchBtn">
              <input type="checkbox" onClick={() => themeToggler()} />
              <div class="slide round"></div>
            </label>
          </div>
        </div>
        
                
        <div className="total-media">
          <TotalBadge theme={theme} borderBox="face-border" logoBox={faceLogo} userAccount="@nathamf"  numberFollow="1987" kindFollows="FOLLOWERS" Arrow={ArrowUp} arrowClass="arrow-up" todayNumber="12" onClick={() => handleModal()} />
          <TotalBadge theme={theme} borderBox="twit-border" logoBox={twitLogo} userAccount="@nathamf"  numberFollow="1044" kindFollows="FOLLOWERS" Arrow={ArrowUp} arrowClass="arrow-up" todayNumber="99" onClick={() => handleModal()} />
          <TotalBadge theme={theme} borderBox="insta-border" logoBox={instaLogo} userAccount="@realnathamf"  numberFollow="11k" kindFollows="FOLLOWERS" Arrow={ArrowUp} arrowClass="arrow-up" todayNumber="1099" onClick={() => handleModal()} />
          <TotalBadge theme={theme} borderBox="yout-border" logoBox={youtLogo} userAccount="@nathamf"  numberFollow="8239" kindFollows="SUSCRIBERS" Arrow={ArrowDown} arrowClass="arrow-down" todayNumber="144" onClick={() => handleModal()} />
        </div>

        <div className="daily-media">
          <h6 className={`second-title ${theme}`}>Overview - Today</h6>
          <DailyBadge theme={theme}  interactionType="Page Views" logoBox={faceLogo} interactionNumber="87"  Arrow={ArrowUp} arrowClass="arrow-up" interactionAmmount="3"/>
          <DailyBadge theme={theme}  interactionType="Likes" logoBox={faceLogo} interactionNumber="52"  Arrow={ArrowDown} arrowClass="arrow-down" interactionAmmount="2"/>
          <DailyBadge theme={theme}  interactionType="Likes" logoBox={instaLogo} interactionNumber="5462"  Arrow={ArrowUp} arrowClass="arrow-up" interactionAmmount="2257"/>
          <DailyBadge theme={theme}  interactionType="Profile Views" logoBox={instaLogo} interactionNumber="52k"  Arrow={ArrowUp} arrowClass="arrow-up" interactionAmmount="1375"/>
          <DailyBadge theme={theme}  interactionType="Retweets" logoBox={twitLogo} interactionNumber="117"  Arrow={ArrowUp} arrowClass="arrow-up" interactionAmmount="303"/>
          <DailyBadge theme={theme}  interactionType="Likes" logoBox={twitLogo} interactionNumber="507"  Arrow={ArrowUp} arrowClass="arrow-up" interactionAmmount="553"/>
          <DailyBadge theme={theme}  interactionType="Likes" logoBox={youtLogo} interactionNumber="107"  Arrow={ArrowDown} arrowClass="arrow-down" interactionAmmount="19"/>
          <DailyBadge theme={theme}  interactionType="Total Views" logoBox={youtLogo} interactionNumber="1407"  Arrow={ArrowDown} arrowClass="arrow-down" interactionAmmount="12"/>
        </div>

        <div>
          <div className="overlay" onClick={() => setPopup(currentState => !currentState)}></div>
          <div>
            <button onClick={() => setPopup(currentState => !currentState)}>X</button>
            modal
          </div>
        </div>

      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
