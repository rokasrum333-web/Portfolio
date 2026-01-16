import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-name">Rokas Rumeika</span>
          <span className="footer-divider">•</span>
          <span className="footer-copy">© {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
