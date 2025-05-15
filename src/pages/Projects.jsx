import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../services/allAPI';

function Projects() {
  const [allprojects, setallProjects] = useState([])
  const [secretekey, setsecretekey] = useState("")
  const [loading, setLoading] = useState(true)

  const getAllvideos = async () => {
    if (sessionStorage.getItem("token")) {
      setLoading(true)
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
      const result = await allProjectApi(secretekey, reqHeader)
      if (result.status === 200) {
        setallProjects(result.data)
      } else {
        console.log(result);
      }
      setLoading(false)
    }
  }
  useEffect(() => {
    getAllvideos()
  }, [secretekey]); return (
    <>
      <Header />
      <Container fluid className="py-5 px-4" style={{ marginTop: '60px', backgroundColor: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-2 rounded-pill px-3 py-2">
              Project Gallery
            </span>
            <h1 className="display-4 fw-bold" style={{
              background: 'linear-gradient(45deg, #2196F3, #4CAF50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Discover Amazing Projects
            </h1>
            <p className="text-muted">Explore innovative projects from our talented community</p>
          </div>

          <div className="d-flex align-items-center justify-content-center mb-5">
            <div className="search-container position-relative w-75">
              <input
                onChange={e => setsecretekey(e.target.value)}
                type="text"
                className="form-control py-3 ps-4 pe-5 rounded-pill shadow-sm"
                placeholder="Search projects by technologies..."
                style={{
                  border: 'none',
                  backgroundColor: '#ffffff'
                }}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute"
                style={{
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6c757d'
                }}
              ></i>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Discovering amazing projects...</p>
            </div>
          ) : (
            <Row className="g-4">
              {allprojects?.length > 0 ? (
                allprojects?.map((project, index) => (
                  <Col key={index} sm={12} md={6} lg={4} xl={4} className="d-flex">
                    <div className="w-100">
                      <ProjectCard project={project} />
                    </div>
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <div className="text-center py-5 bg-white rounded-4 shadow-sm">
                    <i className="fa-regular fa-folder-open display-1 text-muted mb-4"></i>
                    <h3 className="fw-light text-muted">No projects found</h3>
                    <p className="text-muted mb-4">Try adjusting your search criteria</p>
                    <button className="btn btn-outline-primary rounded-pill px-4"
                      onClick={() => setsecretekey("")}>
                      Clear Search
                    </button>
                  </div>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </Container>    </>
  );
}

export default Projects;
