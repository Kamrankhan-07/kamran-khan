
import { Link } from "react-router-dom";

function Matches() {
  const matches = [
    {
      teams: "CSK vs RCB",
      date: "April 5, 2026",
      time: "7:30 PM",
      stadium: "MA Chidambaram Stadium",
    },
    {
      teams: "MI vs KKR",
      date: "April 6, 2026",
      time: "7:30 PM",
      stadium: "Wankhede Stadium",
    },
    {
      teams: "SRH vs DC",
      date: "April 7, 2026",
      time: "7:30 PM",
      stadium: "Rajiv Gandhi International Stadium",
    },
  ];

  return (
    <div className="matches-page">
      <div className="matches-section">
        <div className="section-heading">
          <p className="section-label">IPL 2026</p>
          <h1>Upcoming Matches</h1>
          <p>Choose your match and book your IPL tickets.</p>
        </div>

        <div className="matches-grid">
          {matches.map((match, index) => (
            <div className="match-card" key={index}>
              <div className="match-card-top">
                <span>IPL 2026</span>
                <span>🏏</span>
              </div>

              <h3>{match.teams}</h3>

              <div className="match-info">
                <p>📅 {match.date}</p>
                <p>⏰ {match.time}</p>
                <p>📍 {match.stadium}</p>
              </div>

              <Link to="/booking" className="book-button">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Matches;

