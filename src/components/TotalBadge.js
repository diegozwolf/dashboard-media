import React from 'react';
import "./styles/TotalBadge.scss"
import faceLogo from '../components/images/icon-facebook.svg';
import Arrow from '../components/images/icon-down.svg';

class TotalBadge extends React.Component {
    render() {
        return (
            <div className="total-bage">
                <div className="total-bage__main-line">
                    <img src={faceLogo} className="total-bage__main-line--network-img" alt="netwotk logo"></img>
                    <p>user account</p>
                </div>
                <div className="total-bage__number">
                    <p className="total-bage__number--big">1978</p>
                    <p className="total-bage__number--user">followers</p>
                </div>
                <div className="total-bage__update">
                        <p className="total-bage__update--number"><img src={Arrow} className="total-bage__update--arrow" alt="netwotk logo"></img>
                        80 users
                    </p>
                </div>
            </div>
        )
    }
}

export default TotalBadge;