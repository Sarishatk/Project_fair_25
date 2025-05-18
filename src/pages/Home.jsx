import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { HomeProject } from '../services/allAPI';

function Home() {
  const [logged, setLogged] = useState(false)
  const [HomeProjects, setHomeProjects] = useState([])
  const getHomeProjects = async () => {
    try {
      const result = await HomeProject();
      if (result.status === 200) {
        setHomeProjects(result.data);
      } else {
        console.log('Unexpected response:', result);
      }
    } catch (error) {
      console.log('API Error:', error);
    }
  };

  console.log(HomeProjects);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLogged(true)
    } else {
      setLogged(false)
    }
    getHomeProjects()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section position-relative" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
        overflow: 'hidden'
      }}>
        <Container>
          <Row className="align-items-center min-vh-100 py-5">
            <Col lg={6} className="text-white">
              <div className="hero-content pe-lg-5">
                <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">
                  <i className="fa-solid fa-list-check me-3 overflow-hidden"></i>
                Projexpo
                </h1>
                <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  Your one-stop destination for software development projects. Add, manage, and discover innovative projects from developers around the world.
                </p>
                {logged ? (
                  <Link to={'/dashboard'} className="btn btn-light btn-lg rounded-pill animate__animated animate__fadeInUp animate__delay-2s">
                    Manage Projects <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                ) : (
                  <Link to={'/login'} className="btn btn-light btn-lg rounded-pill animate__animated animate__fadeInUp animate__delay-2s">
                    Start Exploring <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                )}
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <div className="hero-image text-center animate__animated animate__fadeInRight overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/87497641?v=4"
                  alt="Project Fair Hero"
                  className="img-fluid rounded-circle shadow-lg "
                  style={{ maxWidth: '400px', transform: 'rotate(5deg)' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Projects Section */}
      <section className="projects-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="badge bg-success bg-opacity-10 text-success mb-2 rounded-pill px-3 py-2">
              Featured Projects
            </span>
            <h2 className="display-5 fw-bold mb-4">Explore Our Projects</h2>
            <p className="text-muted">Discover amazing projects from our talented community</p>
          </div>

          <div className="projects-slider position-relative mb-5">
            <div className="overflow-hidden">
              <Row className="flex-nowrap" style={{ animation: 'slide 30s linear infinite' }}>
                {HomeProjects?.length > 0 ? HomeProjects.map((project, index) => (
                  <Col key={index} md={4} className="px-3" style={{ minWidth: '360px' }}>
                    <ProjectCard project={project} />
                  </Col>
                )) : null}
              </Row>
            </div>
          </div>

          <div className="text-center">
            <Link
              to={'/projects'}
              className="btn btn-outline-success btn-lg rounded-pill px-4"
            >
              View More Projects <i className="fa-solid fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </Container>

        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-360px * ${HomeProjects?.length || 0})); }
            }
          `}
        </style>
      </section>
    </>
  )
}

export default Home
