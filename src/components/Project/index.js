import React from 'react';
import './style.css';

const Project = ({project}) => {
  return (
    <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/projects/${project.name}.jpg`)} 
          className="card-img-top" 
          alt={project.name}
        />
      <div className="card-body">
        <p className="card-text">
          {project.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <a href={project.link} class="btn btn-secondary name-bt">
              {project.name}
            </a>
            <a href={project.repo} class="btn btn-secondary git-bt">
              <i className="fab fa-github"></i>
            </a>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Project;
