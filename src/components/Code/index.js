import React from 'react';
import Card from '../Card';
const projects = require('./projectData.json');

const Code = () => {
  return (
    <>
      <div className="accordion-item">
        <div className="album py-5 code" id="code">
          <div className="container">
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
              id="card-holder"
            >
              {projects.map((project) => {
                const { id, name, img, github, action, desc } = project;
                return (
                  <Card
                    id={id}
                    name={name}
                    img={img}
                    github={github}
                    action={action}
                    desc={desc}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
