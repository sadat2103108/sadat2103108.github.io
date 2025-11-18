// ProjectsSection.jsx
import React from "react";

const projectsData = [
  {
    name: "Space Invader Game",
    description: "Classic Space Invader game in JavaScript.",
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
    name: "Routine Planner",
    description: "Plan your daily routine efficiently.",
    html_url: "https://github.com/sadat2103108/RoutinePlanner_CSE3100",
    featured: false,
  },
  {
    name: "Tic-Tac-Toe Minimax",
    description: "Tic-Tac-Toe AI using Minimax algorithm.",
    html_url: "https://github.com/sadat2103108/tic-tac-toe-minimax-algo",
    featured: false,
  },
  {
    name: "Genetic Algorithm Visualizer",
    description: "Visualize genetic algorithms with JS animations.",
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
        ))}
      </div>
    </section>
  );
}
