import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseUrl';
import { addProject } from '../services/allAPI';
import {addProjectResponseContext} from '../ContextSareApi/ContextShare'
import { ToastContainer, toast } from 'react-toastify';


function EditProject({ project }) {

    const [show, setShow] = useState(false);     const [projectData, setProjectData] = useState({
        _id: project?._id || '',
        title: project?.title || '',
        language: project?.language || '',
        github: project?.github || '',
        website: project?.website || '',
        overview: project?.overview || '',
        projectImage: project?.projectImage || ''
    });
    const [preview, setPreview] = useState("");

    const handleClose = () => {
        setShow(false);
        setPreview("");
    };
    
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (projectData.projectImage instanceof File) {
            setPreview(URL.createObjectURL(projectData.projectImage));
        }
    }, [projectData.projectImage]);
  const  onUpdateNewProject=()=>{
    const {_id,title, language, overview, projectImage, github, website} = projectData
    if (!title || !language || !overview || !projectImage || !github || !website){
        toast.info("please fill the form")
   }else{
const reqBody = new FormData();
reqBody.append("title", title);
reqBody.append("language", language);
reqBody.append("overview", overview);
reqBody.append("github", tigithubtle);
reqBody.append("website", website)
preview? reqBody.append("projectImage", projectImage):  reqBody.append("projectImage", project.projectImage);
        if(preview){
            const reqHeader = {
               "content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,         }
        //   api call to update project
        }else{
const reqHeader = {
    "content-type": "application/json",
    
}
        }
    }
  }

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                size='lg'
                contentClassName="rounded-4 shadow-lg border-0"
            >
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fs-4">Add New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="d-block cursor-pointer">                <input
                                type='file'
                                style={{ display: 'none' }}
                                onChange={(e) => setProjectData({ ...projectData, projectImage: e.target.files[0] })}
                            />
                                <div
                                    className="rounded-4 overflow-hidden shadow-sm position-relative"
                                    style={{
                                        aspectRatio: '1',
                                        cursor: 'pointer',
                                        background: '#f8f9fa'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
                                    onMouseOut={e => e.currentTarget.style.opacity = '1'}
                                >                                    <img
                                        className="w-100 h-100"
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                        src={preview || `${BASE_URL}/uploads/${project?.projectImage}`}
                                        alt='Project thumbnail'
                                    />
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle text-white text-center p-2 rounded-circle"
                                        style={{
                                            background: 'rgba(0,0,0,0.5)',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <i className="fa-solid fa-camera"></i>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">               
                                 <input
                                type='text'
                                className='form-control form-control-lg rounded-3'
                                placeholder='Project Title'
                                value={projectData.title}
                                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                                style={{
                                    border: '1px solid #dee2e6',
                                    background: '#ffffff',
                                    color: '#495057'
                                }}
                            />
                                <input
                                    type='text'
                                    className='form-control form-control-lg rounded-3'
                                    placeholder='Technologies Used'
                                    value={projectData.language}
                                    onChange={(e) => setProjectData({ ...projectData, language: e.target.value })}
                                    style={{
                                        border: '1px solid #dee2e6',
                                        background: '#ffffff',
                                        color: '#495057'
                                    }}
                                />
                                <input
                                    type='url'
                                    className='form-control form-control-lg rounded-3'
                                    placeholder='GitHub Repository URL'
                                    value={projectData.github}
                                    onChange={(e) => setProjectData({ ...projectData, github: e.target.value })}
                                    style={{
                                        border: '1px solid #dee2e6',
                                        background: '#ffffff',
                                        color: '#495057'
                                    }}
                                />
                                <input
                                    type='url'
                                    className='form-control form-control-lg rounded-3'
                                    placeholder='Live Demo URL'
                                    value={projectData.website}
                                    onChange={(e) => setProjectData({ ...projectData, website: e.target.value })}
                                    style={{
                                        border: '1px solid #dee2e6',
                                        background: '#ffffff',
                                        color: '#495057'
                                    }}
                                />
                                <textarea
                                    className='form-control form-control-lg rounded-3'
                                    placeholder='Project Overview'
                                    value={projectData.overview}
                                    onChange={(e) => setProjectData({ ...projectData, overview: e.target.value })}
                                    rows="3"
                                    style={{
                                        border: '1px solid #dee2e6',
                                        background: '#ffffff',
                                        color: '#495057',
                                        resize: 'none'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <style>
                        {`
              .form-control::placeholder {
                color: #6c757d !important;
                opacity: 0.8;
              }
              .form-control:focus {
                background: #ffffff;
                border-color: #52a447;
                box-shadow: 0 0 0 0.2rem rgba(82, 164, 71, 0.25);
              }
            `}
                    </style>
                </Modal.Body>                <Modal.Footer className="border-0 pt-0 d-flex gap-2 justify-content-end">
                    <Button
                        variant="light"
                        onClick={handleClose}
                        className="rounded-pill px-4"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => {
                            // Add your update logic here
                            console.log("Updated Project Data:", projectData);
                            handleClose();
                           onUpdateNewProject();
                        }}
                        className="rounded-pill px-4"
                        style={{
                            background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
                            border: 'none'
                        }}
                    >
                        Update Project
                    </Button>
                </Modal.Footer>
                                  <ToastContainer position='top-right' autoClose={2000} theme='colored' />

            </Modal>

        </>
    )
}

export default EditProject
