// components/portfoliocard.js
import Header from "./header";
import Avatar from "./Avatar";
import PersonalInfo from "./personalinfo";
import Bio from "./Bio";

import './portfolio.css';
function PortfolioCard() {
    return (
        <div className="portfolio-card">
    <Header/>
    <div className="card-content">
       <Avatar/>
       <PersonalInfo/>
        <Bio/>
    </div>
    </div>
    );
}
export default PortfolioCard
