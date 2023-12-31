import React from 'react';
import './style.css'

const Resume = () => {
  return <div className="skills">
    <p className="resume">
      <button type="button" class="btn btn-secondary btn-lg">
      <a href="https://www.canva.com/design/DAFtI8CaCMM/I6OklLn6XdCHJrynQIHozA/edit?utm_content=DAFtI8CaCMM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Download My Resume</a>
      </button>
    </p>
    <div className="row mt-5">
      <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
        <h3 className="end-title">Front-end Proficiencies</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">JQuery</li>
          <li className="list-group-item">Responsive Design</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Bootstrap</li>
        </ul>
      </div>
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
        <h3 className="end-title">Back-end Proficiencies</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">APIs</li>
          <li className="list-group-item">Node</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">MySQL && Sequelize</li>
          <li className="list-group-item">MongoDB && Mongoose</li>
          <li className="list-group-item">REST</li>
          <li className="list-group-item">GraphQL</li>
        </ul>
      </div>
    </div>
    
  </div>;
};

export default Resume;
