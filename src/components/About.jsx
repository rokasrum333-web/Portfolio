import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-label-col">
            <span className="section-label">About Me</span>
          </div>
          <div className="about-content">
            <h2 className="section-title">
              Building digital solutions<br />
              <span className="title-accent">that drive results</span>
            </h2>
            <div className="about-text">
              <p>
                I'm a vocational education graduate from Lietuvos Verslo Kolegija with studies 
                in construction materials and economics. My path led me to web development, 
                where I discovered my passion for creating functional, business-focused solutions.
              </p>
              <p>
                I specialize in WordPress development enhanced with custom JavaScript and PHP. 
                From booking systems to admin dashboards, I build tools that automate processes 
                and make businesses more efficient. My approach combines clean code with 
                practical functionality.
              </p>
            </div>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Lithuania</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Languages</span>
                <span className="detail-value">Lithuanian (Native), English (Fluent)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Focus</span>
                <span className="detail-value">WordPress, JavaScript, Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
