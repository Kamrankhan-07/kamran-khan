import { Link } from "react-router-dom";

function Home() {
  const matches = [
    {
      teams: "CSK vs RCB",
      date: "April 5, 2026",
      stadium: "MA Chidambaram Stadium",
    },
    {
      teams: "MI vs KKR",
      date: "April 6, 2026",
      stadium: "Wankhede Stadium",
    },
    {
      teams: "SRH vs DC",
      date: "April 7, 2026",
      stadium: "Rajiv Gandhi International Stadium",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🏏 IPL 2026</p>

          <h1>Book Your IPL Experience</h1>

          <p className="hero-subtitle">
            Watch your favourite teams live and experience the excitement of
            IPL.
          </p>

          <Link to="/booking" className="hero-button">
            BOOK TICKETS
          </Link>
        </div>
      </section>

      <section className="matches-section">
        <div className="section-heading">
          <p className="section-label">DON'T MISS THE ACTION</p>
          <h2>Upcoming Matches</h2>
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
                <p>📍 {match.stadium}</p>
              </div>

              <Link to="/booking" className="book-button">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;