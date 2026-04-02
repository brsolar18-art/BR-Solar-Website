import React, { useEffect, useState } from "react";
import "./Projects.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://br-solar-backend.vercel.app/api/projects");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch projects");
        }

        setProjects(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects9-page">
      <Navbar />

      <main className="projects9-main">
        <section className="projects9-hero">
          <div className="projects9-hero-overlay"></div>
          <div className="projects9-container">
            <div className="projects9-hero-content">
              <span className="projects9-pill">BR SOLAR PROJECTS</span>
              <h1 className="projects9-title">Our Solar Installation Projects</h1>
              <p className="projects9-subtitle">
                Explore our completed installations, project locations, and real on-site work delivered with quality, precision, and trust.
              </p>
            </div>
          </div>
        </section>

        <section className="projects9-section">
          <div className="projects9-container">
            {loading ? (
              <div className="projects9-empty">Loading projects...</div>
            ) : projects.length === 0 ? (
              <div className="projects9-empty">No projects available right now.</div>
            ) : (
              <div className="projects9-list">
                {projects.map((project, index) => (
                  <div className="projects9-item" key={project.id || index}>
                    <div className="projects9-project-shell">
                      <div className="projects9-project-head">
                        <div className="projects9-project-badge">Project #{project.id}</div>
                        <div className="projects9-project-line"></div>
                      </div>

                      <div className="projects9-grid">
                        <div className="projects9-card projects9-details-card">
                          <div className="projects9-meta">
                            <span className="projects9-mini-label">Client Name</span>
                            <h2 className="projects9-client">{project.client_name}</h2>
                          </div>

                          <div className="projects9-meta">
                            <span className="projects9-mini-label">Installation Location</span>
                            <div className="projects9-location">{project.installation_location}</div>
                          </div>

                          <div className="projects9-meta">
                            <span className="projects9-mini-label">Project Overview</span>
                            <p className="projects9-description">{project.project_description}</p>
                          </div>
                        </div>

                        {project.image_1 && (
                          <div className="projects9-card projects9-image-card">
                            <img src={project.image_1} alt={`${project.client_name} project view 1`} className="projects9-image" />
                          </div>
                        )}

                        {project.image_2 && (
                          <div className="projects9-card projects9-image-card">
                            <img src={project.image_2} alt={`${project.client_name} project view 2`} className="projects9-image" />
                          </div>
                        )}

                        {project.image_3 && (
                          <div className="projects9-card projects9-image-card">
                            <img src={project.image_3} alt={`${project.client_name} project view 3`} className="projects9-image" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}