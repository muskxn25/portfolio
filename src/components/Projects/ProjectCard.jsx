import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // State to control the expanded state of the description
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to expand/collapse description
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}>
        {description}
      </div>
      {description.length > 100 && (
        <span className={styles.readMore} onClick={toggleReadMore}>
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      )}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      {/* Uncomment if you want to use the links */}
      {/* <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div> */}
    </div>
  );
};
