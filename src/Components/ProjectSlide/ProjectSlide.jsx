import React, { useState } from 'react'; // Import useState here
import LazyLoad from '../LazyLoad.jsx';

function useCarousel(imageSources) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  return { currentIndex, goToNextImage };
}

function ImageCarousel({ images }) {
  const { currentIndex, goToNextImage } = useCarousel(images);

  return (
    <div onClick={goToNextImage} style={{ cursor: 'pointer' }}>
      <img
        src={images[currentIndex]}
        alt="Carousel"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

const Project = ({ images, title, date, description, skills, sourceLink }) => {
  return (
    <div className="project fade">
      <div className="project-text">
        <div className="top-bar">
          <div id="project-name">{title}</div>
          <div id="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-bubble s${skill.level}`}>{skill.name}</div>
            ))}
          </div>
        </div>
        <div id="project-date">{`${date}`}</div>
        <div id="project-desc-container">
          {description.map((paragraph, index) => (
            <React.Fragment key={index}>
              <div>{paragraph}</div>
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        {sourceLink && (
          <a target="_blank" rel="noopener noreferrer" href={sourceLink} className="src-container">
            <span className="material-symbols-outlined project-src-icon">link</span>
            <p className="project-src">Source Code</p>
          </a>
        )}
      </div>
      <div className="project-img-container">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};

export default Project;
