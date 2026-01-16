import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real solutions built for real businesses. Each project represents 
            custom development work that solved specific operational challenges.
          </p>
        </div>

        {/* Project 1: SPA Levanda */}
        <article className="project-showcase">
          <div className="project-intro">
            <div className="project-meta">
              <span className="project-number">01</span>
              <span className="project-type">Full-Stack Development</span>
            </div>
            <h3 className="project-title">SPA Levanda Management System</h3>
            <p className="project-description">
              A comprehensive spa management and booking system with custom functionality 
              built from scratch. This was my most ambitious project, combining frontend 
              interfaces with backend automation to streamline spa operations.
            </p>
            <a href="https://spalevanda.lt" target="_blank" rel="noopener noreferrer" className="project-link">
              Visit spalevanda.lt
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="project-features">
            {/* Feature 1: Voucher System */}
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <h4 className="feature-title">Voucher & Coupon System</h4>
              </div>
              <p className="feature-description">
                Custom-built voucher system that automatically generates unique codes 
                and sends them via email upon purchase. Includes admin controls for 
                discount types, expiration dates, and usage tracking.
              </p>
              <div className="feature-mockup voucher-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-title">Voucher Management</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Voucher Code</label>
                        <div className="input-with-btn">
                          <input type="text" value="SPA-2024-X7K9" readOnly />
                          <button>Generate</button>
                        </div>
                      </div>
                    </div>
                    <div className="form-row two-col">
                      <div className="form-group">
                        <label>Discount Type</label>
                        <select><option>Percentage (%)</option></select>
                      </div>
                      <div className="form-group">
                        <label>Amount</label>
                        <input type="text" value="15" />
                      </div>
                    </div>
                    <div className="form-row two-col">
                      <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="text" value="2024-12-31" />
                      </div>
                      <div className="form-group">
                        <label>Status</label>
                        <div className="status-badge active">Active</div>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button className="mockup-btn primary">Save & Send Email</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Admin Dashboard */}
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h4 className="feature-title">Admin Purchase Dashboard</h4>
              </div>
              <p className="feature-description">
                Custom admin panel for managing customer purchases with real-time 
                tracking, status updates, and filtering capabilities. Enables staff 
                to monitor all transactions at a glance.
              </p>
              <div className="feature-mockup dashboard-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-title">Purchase History</span>
                </div>
                <div className="mockup-content">
                  <div className="dashboard-filters">
                    <input type="text" placeholder="Search customers..." className="search-input" />
                    <select className="filter-select"><option>All Status</option></select>
                    <button className="export-btn">Export</button>
                  </div>
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1042</td>
                        <td>Jonas P.</td>
                        <td>jonas@email.lt</td>
                        <td>€89.00</td>
                        <td>Jan 15</td>
                        <td><span className="status completed">Completed</span></td>
                      </tr>
                      <tr>
                        <td>#1041</td>
                        <td>Rūta K.</td>
                        <td>ruta@email.lt</td>
                        <td>€145.00</td>
                        <td>Jan 14</td>
                        <td><span className="status completed">Completed</span></td>
                      </tr>
                      <tr>
                        <td>#1040</td>
                        <td>Mindaugas S.</td>
                        <td>mind@email.lt</td>
                        <td>€65.00</td>
                        <td>Jan 14</td>
                        <td><span className="status pending">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Feature 3: Calendar System */}
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h4 className="feature-title">Staff Calendar System</h4>
              </div>
              <p className="feature-description">
                Interactive staff scheduling calendar with color-coded services 
                and time management. Allows easy visualization of appointments 
                across different spa zones and staff members.
              </p>
              <div className="feature-mockup calendar-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-title">Staff Schedule</span>
                </div>
                <div className="mockup-content">
                  <div className="calendar-nav">
                    <button className="nav-btn">←</button>
                    <span className="calendar-date">January 15 - 19, 2024</span>
                    <button className="nav-btn">→</button>
                  </div>
                  <div className="calendar-grid">
                    <div className="time-column">
                      <div className="time-slot">09:00</div>
                      <div className="time-slot">11:00</div>
                      <div className="time-slot">13:00</div>
                      <div className="time-slot">15:00</div>
                    </div>
                    <div className="day-column">
                      <div className="day-header">Mon</div>
                      <div className="event massage">Massage - Lina</div>
                      <div className="event empty"></div>
                      <div className="event facial">Facial - Ana</div>
                      <div className="event sauna">Sauna Zone</div>
                    </div>
                    <div className="day-column">
                      <div className="day-header">Tue</div>
                      <div className="event empty"></div>
                      <div className="event massage">Massage - Jonas</div>
                      <div className="event massage">Massage - Lina</div>
                      <div className="event empty"></div>
                    </div>
                    <div className="day-column">
                      <div className="day-header">Wed</div>
                      <div className="event facial">Facial - Ana</div>
                      <div className="event sauna">Sauna Zone</div>
                      <div className="event empty"></div>
                      <div className="event massage">Massage - Jonas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-tech">
            <span className="tech-label">Technologies:</span>
            <div className="tech-list">
              <span className="tech-tag">WordPress</span>
              <span className="tech-tag">Custom JavaScript</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">Elementor</span>
              <span className="tech-tag">Email Integration</span>
            </div>
          </div>
        </article>

        {/* Project 2: SaulÄ—s VÄ—jas */}
        <article className="project-showcase project-secondary">
          <div className="project-intro">
            <div className="project-meta">
              <span className="project-number">02</span>
              <span className="project-type">Website Development</span>
            </div>
            <h3 className="project-title">SaulÄ—s VÄ—jas</h3>
            <p className="project-description">
              A modern, professional website for a renewable energy company. Built with 
              WordPress and customized with clean design principles, responsive layouts, 
              and optimized contact forms to help the business attract new clients.
            </p>
            <a href="https://saulesvejas.com" target="_blank" rel="noopener noreferrer" className="project-link">
              Visit saulesvejas.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="project-highlights">
            <div className="highlight-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Modern, clean design with professional branding</span>
            </div>
            <div className="highlight-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Fully responsive across all devices</span>
            </div>
            <div className="highlight-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Custom CSS/SCSS styling and JavaScript enhancements</span>
            </div>
            <div className="highlight-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Optimized Contact Form 7 integration</span>
            </div>
          </div>

          <div className="project-tech">
            <span className="tech-label">Technologies:</span>
            <div className="tech-list">
              <span className="tech-tag">WordPress</span>
              <span className="tech-tag">Elementor</span>
              <span className="tech-tag">Custom CSS/SCSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Contact Form 7</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
