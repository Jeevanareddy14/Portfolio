import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Have a project in mind or looking for a
            Frontend Developer? Feel free to contact me.
          </p>

          <div className="info-card">
            <h4>Email</h4>
            <p>Jeevanaparlapalli14@gmail.com</p>

            <h4>Phone</h4>
            <p>+91 9490308511</p>
          </div>
        </div>

        <div className="contact-form-card">
          <form>
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}