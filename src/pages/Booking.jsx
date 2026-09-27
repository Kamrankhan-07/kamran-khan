
import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    match: "",
    tickets: 1,
    category: "General",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.match) {
      alert("Please fill in all required fields.");
      return;
    }

   const { error } = await supabase
  .from("Bookings")
  .insert([
    {
      "user name": formData.name,
      email: formData.email,
      "match id": formData.match,
      seats: String(formData.tickets),
      category: formData.category,
    },
  ]);
      

    if (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
      return;
    }

    alert("🎉 Booking successful!");

    setFormData({
      name: "",
      email: "",
      match: "",
      tickets: 1,
      category: "General",
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <p className="section-label">IPL 2026</p>
          <h1>Book Your Tickets</h1>
          <p>Reserve your seat and enjoy the IPL live!</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="match">Select Match</label>
            <select
              id="match"
              name="match"
              value={formData.match}
              onChange={handleChange}
              required
            >
              <option value="">Select a match</option>
              <option value="CSK vs RCB — April 5, 2026">
                CSK vs RCB — April 5, 2026
              </option>
              <option value="MI vs KKR — April 6, 2026">
                MI vs KKR — April 6, 2026
              </option>
              <option value="SRH vs DC — April 7, 2026">
                SRH vs DC — April 7, 2026
              </option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Ticket Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="General">General</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tickets">Number of Tickets</label>
              <select
                id="tickets"
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="confirm-booking">
            🎟️ Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
