import './Hero.css'

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Welcome</span>
          <h1 className="hero-title">
            I'm Rokas Rumeika
          </h1>
          <p className="hero-subtitle">
            A web developer based in Lithuania, specializing in WordPress development 
            and custom JavaScript solutions. I build real, functional systems that 
            help businesses streamline their operations.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="hero-line"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
