import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="py-5" style={{ 
            background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
            color: 'white'
        }}>
            <Container>
                <Row className="g-4">
                    <Col lg={4}>
                        <div className="pe-lg-5">
                            <h4 className="mb-4 d-flex align-items-center">
                                <i className="fa-solid fa-list-check me-2"></i>
                                Project Fair
                            </h4>
                            <p className="mb-4 text-white-50">
                                Your one-stop destination for discovering and showcasing innovative software development projects. Join our community of talented developers!
                            </p>
                            <p className="mb-2 small text-white-50">
                                Code licensed MIT, docs CC BY 3.0.
                            </p>
                            <p className="small text-white-50">
                                Currently v5.3.3
                            </p>
                        </div>
                    </Col>

                    <Col sm={6} lg={2}>
                        <h5 className="mb-4">Quick Links</h5>
                        <div className="d-flex flex-column gap-2">
                            <Link to={'/'} className="text-white-50 text-decoration-none hover-white">Home</Link>
                            <Link to={'/projects'} className="text-white-50 text-decoration-none hover-white">Projects</Link>
                            <Link to={'/dashboard'} className="text-white-50 text-decoration-none hover-white">Dashboard</Link>
                        </div>
                    </Col>

                    <Col sm={6} lg={3}>
                        <h5 className="mb-4">Resources</h5>
                        <div className="d-flex flex-column gap-2">
                            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" 
                                className="text-white-50 text-decoration-none hover-white">React</a>
                            <a href="https://react-bootstrap.github.io" target="_blank" rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-white">React Bootstrap</a>
                            <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-white">React Router</a>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <h5 className="mb-4">Stay Connected</h5>
                        <Form className="d-flex gap-2 mb-4">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="rounded-pill"
                                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                            />
                            <Button 
                                variant="light" 
                                className="rounded-pill px-3"
                                style={{ width: 'auto' }}
                            >
                                <i className="fa-solid fa-paper-plane"></i>
                            </Button>
                        </Form>
                        <div className="d-flex gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none fs-5 hover-white">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none fs-5 hover-white">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none fs-5 hover-white">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4 opacity-25" />
                
                <div className="text-center small text-white-50">
                    Copyright © {new Date().getFullYear()} Project Fair. All rights reserved.
                </div>
            </Container>

            <style>
                {`
                    .hover-white:hover {
                        color: white !important;
                        transition: color 0.2s;
                    }
                    .form-control::placeholder {
                        color: rgba(255,255,255,0.5);
                    }
                    .form-control:focus {
                        background: rgba(255,255,255,0.15);
                        box-shadow: none;
                        color: white;
                    }
                `}
            </style>
        </footer>
    )
}

export default Footer
