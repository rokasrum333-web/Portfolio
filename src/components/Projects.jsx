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

          <div className="project-features two-col">
            {/* Feature 1: Staff Calendar System */}
            <div className="feature-card feature-large">
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
                Interactive scheduling calendar with 7 color-coded spa zones, 
                real-time appointment management, role-based permissions, and 
                mobile-responsive timeline view. Built with custom PHP/AJAX backend.
              </p>
              <div className="feature-mockup calendar-mockup-real">
                <div className="mockup-header mockup-header-modern">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-title">Kalendorius</span>
                </div>
                <div className="mockup-content calendar-content">
                  <div className="calendar-toolbar">
                    <div className="calendar-nav-modern">
                      <button className="nav-arrow">&lsaquo;</button>
                      <span className="current-date">Sausio 16, Ketvirtadienis</span>
                      <button className="nav-arrow">&rsaquo;</button>
                    </div>
                  </div>
                  <div className="calendar-grid-real">
                    <div className="calendar-header-row">
                      <div className="time-col-header"></div>
                      <div className="zone-header zone-didzioja">DIDZIOJI</div>
                      <div className="zone-header zone-mazoja">MAZOJI</div>
                      <div className="zone-header zone-roziu">Roziu</div>
                      <div className="zone-header zone-levandu">Levandu</div>
                      <div className="zone-header zone-magnoliju">Magnoliju</div>
                    </div>
                    <div className="calendar-body">
                      <div className="time-row">
                        <div className="time-label">09:00</div>
                        <div className="slot"></div>
                        <div className="slot">
                          <div className="appt appt-mazoja">
                            <span className="appt-time">09:00-10:30</span>
                            <span className="appt-name">Masazas</span>
                            <span className="appt-staff">Lina K.</span>
                          </div>
                        </div>
                        <div className="slot"></div>
                        <div className="slot">
                          <div className="appt appt-levandu">
                            <span className="appt-time">09:00-11:00</span>
                            <span className="appt-name">SPA ritualas</span>
                            <span className="appt-staff">Ana M.</span>
                          </div>
                        </div>
                        <div className="slot"></div>
                      </div>
                      <div className="time-row">
                        <div className="time-label">11:00</div>
                        <div className="slot">
                          <div className="appt appt-didzioja">
                            <span className="appt-time">11:00-12:00</span>
                            <span className="appt-name">Grupe</span>
                            <span className="appt-staff">Jonas P.</span>
                          </div>
                        </div>
                        <div className="slot"></div>
                        <div className="slot">
                          <div className="appt appt-roziu">
                            <span className="appt-time">11:00-12:30</span>
                            <span className="appt-name">Veido proc.</span>
                            <span className="appt-staff">Ruta S.</span>
                          </div>
                        </div>
                        <div className="slot"></div>
                        <div className="slot">
                          <div className="appt appt-magnoliju">
                            <span className="appt-time">11:00-13:00</span>
                            <span className="appt-name">Aromaterapija</span>
                            <span className="appt-staff">Lina K.</span>
                          </div>
                        </div>
                      </div>
                      <div className="time-row">
                        <div className="time-label">13:00</div>
                        <div className="slot"></div>
                        <div className="slot">
                          <div className="appt appt-mazoja">
                            <span className="appt-time">13:00-14:00</span>
                            <span className="appt-name">Masazas</span>
                            <span className="appt-staff">Jonas P.</span>
                          </div>
                        </div>
                        <div className="slot"></div>
                        <div className="slot"></div>
                        <div className="slot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Admin Dashboard */}
            <div className="feature-card feature-large">
              <div className="feature-header">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h4 className="feature-title">Orders Management Dashboard</h4>
              </div>
              <p className="feature-description">
                Custom DataTables-powered admin panel with real-time order tracking, 
                inline editing, status management, and export functionality. 
                Handles voucher purchases and customer data efficiently.
              </p>
              <div className="feature-mockup dashboard-mockup-real">
                <div className="mockup-header mockup-header-blue">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-title">Uzsakymai</span>
                </div>
                <div className="mockup-content">
                  <div className="dashboard-toolbar">
                    <div className="toolbar-left">
                      <span className="show-label">Rodyti</span>
                      <select className="entries-select">
                        <option>25</option>
                      </select>
                      <span className="show-label">irasu</span>
                    </div>
                    <div className="toolbar-right">
                      <input type="text" placeholder="Ieskoti..." className="search-box" />
                    </div>
                  </div>
                  <table className="orders-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Produktas</th>
                        <th>Kiekis</th>
                        <th>Suma</th>
                        <th>Busena</th>
                        <th>Panaud.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="id-cell">#1042</td>
                        <td>2024-01-15</td>
                        <td className="product-cell">SPA dovanu kuponas - 100</td>
                        <td>1</td>
                        <td className="amount-cell">100.00</td>
                        <td><span className="order-status completed">Apmoketa</span></td>
                        <td><input type="checkbox" className="used-check" /></td>
                      </tr>
                      <tr className="row-used">
                        <td className="id-cell">#1041</td>
                        <td>2024-01-14</td>
                        <td className="product-cell">Masazo abonementas x5</td>
                        <td>1</td>
                        <td className="amount-cell">225.00</td>
                        <td><span className="order-status completed">Apmoketa</span></td>
                        <td><input type="checkbox" className="used-check" checked readOnly /></td>
                      </tr>
                      <tr>
                        <td className="id-cell">#1040</td>
                        <td>2024-01-14</td>
                        <td className="product-cell">Veido procedura Premium</td>
                        <td>2</td>
                        <td className="amount-cell">180.00</td>
                        <td><span className="order-status pending">Laukiama</span></td>
                        <td><input type="checkbox" className="used-check" /></td>
                      </tr>
                      <tr>
                        <td className="id-cell">#1039</td>
                        <td>2024-01-13</td>
                        <td className="product-cell">Aromaterapijos seansas</td>
                        <td>1</td>
                        <td className="amount-cell">65.00</td>
                        <td><span className="order-status completed">Apmoketa</span></td>
                        <td><input type="checkbox" className="used-check" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="table-footer">
                    <span className="showing-info">Rodoma 1-25 is 148</span>
                    <div className="pagination">
                      <button className="page-btn">&lsaquo;</button>
                      <button className="page-btn active">1</button>
                      <button className="page-btn">2</button>
                      <button className="page-btn">3</button>
                      <button className="page-btn">&rsaquo;</button>
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
              <span className="tech-tag">PHP / AJAX</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">DataTables</span>
            </div>
          </div>
        </article>

        {/* Project 2: Saules Vejas */}
        <article className="project-showcase project-secondary">
          <div className="project-intro">
            <div className="project-meta">
              <span className="project-number">02</span>
              <span className="project-type">Website Development</span>
            </div>
            <h3 className="project-title">Saules Vejas</h3>
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
