
import { Link } from "react-router-dom";

function Matches(matches) {
 
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

              <h3>{match['team 1']} vs {match['team 2']}</h3>

              <div className="match-info">
               <p>{match.date}</p>
               <p>{match.time}</p>
               <p>{match.venue}</p>
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

