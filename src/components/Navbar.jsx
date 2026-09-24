import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        IPL<span>Tickets</span>
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/booking">Book Ticket</Link>
        <Link to="/booking-history">Booking History</Link>
      </div>
    </nav>
  );
}

export default Navbar;