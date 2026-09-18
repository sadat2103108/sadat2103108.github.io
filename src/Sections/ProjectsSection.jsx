// ProjectsSection.jsx
import React from "react";

const projectsData = [
  {
    name: "Space Invader Game",
    description: "Classic Space Invader game in python-pygame. My first ever project",
    html_url: "https://github.com/sadat2103108/Space-Invader-Game-CSE2100",
    featured: true,
  },
  {
    name: "Broadcast App",
    description: "A messaging app using React and Node.js.",
    html_url: "https://github.com/sadat2103108/broadcast",
    featured: false,
  },
  {
    name: "Neural Network From Scratch",
    description: "Learned, built, and trained a neural network from scratch using raw theory, without tensorflow or pytorch.",
    html_url: "https://github.com/sadat2103108/neural_network_theories",
    featured: true,
  },
  {
    name: "Routine Planner",
    description: "Plan your daily routine efficiently.",
    html_url: "https://github.com/sadat2103108/RoutinePlanner_CSE3100",
    featured: false,
  },
  {
    name: "Genetic Algorithm Visualizer",
    description: "Implementation and visualization of the genetic algorithms.",
    html_url: "https://github.com/sadat2103108/visualize-genetic-algorithm",
    featured: false,
  },
];

export default function ProjectsSection() {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {/* Featured Projects */}
      <div className="featured-projects">
        {featured.map((p, i) => (
          <div
            key={i}
            className="featured-card"
            onClick={() => window.open(p.html_url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <div className="featured-content">
              <span className="project-name">{p.name}</span>
              <p className="project-desc">{p.description}</p>
              <a
                href={p.html_url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="github-icon"
                  style={{ filter: "invert(1)" }}
                />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="projects-grid">
        {others.map((p, i) => (
          <div key={i} className="project-card"
            onClick={() => window.open(p.html_url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <span className="project-name">{p.name}</span>
            <p className="project-desc">{p.description}</p>
            <a
              href={p.html_url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="github-icon"
                style={{ filter: "invert(1)" }}
              />
            </a>
          </div>

          <p className="more-projects">
            ...and many more{" "}
            <a
              href="https://github.com/sadat2103108"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub →
            </a>
          </p>
      
        ))}
      </div>
    </section>
  );
}
