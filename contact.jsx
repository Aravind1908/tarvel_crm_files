import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function TravelForm() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row shadow rounded overflow-hidden w-75">
        {/* Left Panel */}
        <div
          className="col-md-5 p-4 text-white"
          style={{
            background: "linear-gradient(180deg, #EB662B 0%, #f28d5c 100%)",
          }}
        >
          <h3 className="fw-bold mb-4">TravelPro</h3>
          <p className="mb-4">Your Journey Starts Here</p>

          <h5 className="fw-semibold mb-3">How It Works</h5>
          <ul className="list-unstyled mb-5">
            <li className="mb-3">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Select Your Tour
            </li>
            <li className="mb-3">
              <i className="bi bi-card-checklist me-2"></i>
              Get Multiple Free Quotes
            </li>
            <li className="mb-3">
              <i className="bi bi-bookmark-check-fill me-2"></i>
              Customize &amp; Book
            </li>
          </ul>

          <div className="bg-white bg-opacity-10 rounded p-3 mb-4">
            <p className="mb-1">
              1500+ <small>Verified Agents</small>
            </p>
            <p className="mb-1">
              100k+ <small>Happy Travellers</small>
            </p>
            <p className="mb-0">
              190+ <small>Destinations</small>
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded p-3">
            <i className="bi bi-telephone-fill me-2"></i>
            Need Help? Call Us
            <br />
            <span className="fw-bold">+1 (555) 123-4567</span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-md-7 bg-white p-4">
          <h4 className="fw-bold mb-1">Where do you want to go?</h4>
          <p className="text-muted mb-4">
            Tell us about your dream destination
          </p>

          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Destination"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search City"
              />
            </div>

            {/* Departure toggle */}
            <div className="d-flex gap-2 mb-3">
              <button
                type="button"
                className="btn w-50 fw-bold text-white"
                style={{ backgroundColor: "#EB662B" }}
              >
                Fixed
              </button>
              <button
                type="button"
                className="btn w-50 fw-bold"
                style={{ borderColor: "#EB662B", color: "#EB662B" }}
              >
                Flexible
              </button>
            </div>

            <div className="row g-2 mb-3">
              <div className="col">
                <input type="date" className="form-control" />
              </div>
              <div className="col">
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Adults / Children / Infants */}
            <div className="row g-2 mb-3">
              <div className="col">
                <select className="form-select">
                  <option>Adults</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select className="form-select">
                  <option>Children</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select className="form-select">
                  <option>Infants</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="whatsapp"
              />
              <label className="form-check-label" htmlFor="whatsapp">
                I agree to Terms &amp; Get updates on WhatsApp
              </label>
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold text-white"
              style={{ backgroundColor: "#EB662B" }}
            >
              Plan My Holidays
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
