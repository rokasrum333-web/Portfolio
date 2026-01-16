import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-content">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-text">
              I'm currently available for freelance projects and full-time opportunities. 
              If you're looking for a developer who delivers practical, well-built solutions, 
              I'd love to hear from you.
            </p>
          </div>
          <div className="contact-info">
            <a href="mailto:rokasrumeika@gmail.com" className="contact-link">
              <span className="contact-label">Email</span>
              <span className="contact-value">rokasrumeika@gmail.com</span>
            </a>
            <a href="tel:+37064394477" className="contact-link">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+370 643 94477</span>
            </a>
            <div className="contact-link">
              <span className="contact-label">Location</span>
              <span className="contact-value">Lithuania, EU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
