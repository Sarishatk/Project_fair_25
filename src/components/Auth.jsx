import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

function Auth({ register }) {
    const isRegisterForm = register ? true : false;

    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex align-items-center justify-content-center'>
            <div className='w-75 container'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}>
                    <i className="fa-solid fa-arrow-left me-1"></i>Back to Home
                </Link>
                <div className="card shadow p-5 bg-success">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img style={{ width: '100%' }} src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?semt=ais_hybrid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <h5 style={{ fontSize: '40px' }} className='fw-bolder d-flex align-items-center'>
                                    <i className="fa-solid fa-list-check overflow-hidden"></i> Project Fair
                                </h5>
                                <h5 className='fw-bolder mt-2 text-light'>
                                    {isRegisterForm ? 'Sign up your account' : 'Sign in to your account'}
                                </h5>
                                <Form className='text-light w-100'>
                                    {isRegisterForm && (
                                        <>
                                            <Form.Group className="mb-3" controlId="formBasicUser">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your username" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter your password" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Sign Up
                                            </Button>
                                        </>
                                    )}
                                    {!isRegisterForm && (
                                        <>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email" />
                                            </Form.Group>
        


