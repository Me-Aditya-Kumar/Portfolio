import React from 'react'
import "./Projects.css"
import Projects_Data from '../../assets/projects_data'

function Projects() {
  return (
    <div id='projects' className="projects container text-center ">
      <div className="projects-title mb-5">
        <h1>Projects</h1>
      </div>
      <div className="row g-4">
        {Projects_Data.map((project, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="projects-format h-100">
                <img className='f' width="64" height="64" src={project.p_img} alt="website--v2" />
                <h2>{project.p_name}</h2>
                <p>{project.p_desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
