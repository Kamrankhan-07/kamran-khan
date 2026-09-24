import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
      return;
    }

    setBookings(data || []);
    setLoading(false);
  };

  return (
    <div className="booking-history-page">
      <div className="booking-history-container">
        <div className="booking-header">
          <p className="section-label">IPL 2026</p>
          <h1>Booking History</h1>
          <p>View your IPL ticket bookings.</p>
        </div>

        {loading ? (
          <p className="history-message">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="history-message">No bookings found.</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div className="booking-card" key={booking.id}>
                <div className="booking-card-header">
                  <h2>{booking.match}</h2>
                  <span className="booking-status">CONFIRMED</span>
                </div>

                <div className="booking-details">
                  <p>
                    <strong>Name:</strong> {booking.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>

                  <p>
                    <strong>Category:</strong> {booking.category}
                  </p>

                  <p>
                    <strong>Tickets:</strong> {booking.tickets}
                  </p>

                  <p>
                    <strong>Booking ID:</strong> #{booking.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingHistory;
