import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React', 'HTML5', 'CSS/SCSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'WordPress', 'REST APIs', 'MySQL']
    },
    {
      title: 'Tools & CMS',
      skills: ['Elementor', 'Contact Form 7', 'Git/GitHub', 'VS Code']
    },
    {
      title: 'Specialties',
      skills: ['Custom Code Integration', 'Form Optimization', 'Email Automation', 'Admin Dashboards']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-grid">
          <div className="skills-header">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              A focused toolkit for building practical web solutions. 
              I prioritize mastery over breadth.
            </p>
          </div>
          <div className="skills-content">
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h4 className="category-title">{category.title}</h4>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
