import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProject } from '../services/allAPI';
import {addProjectResponseContext} from '../ContextSareApi/ContextShare'

function AddProject() {
  const [addProjectResponse,setaddProjectResponse] = useContext(addProjectResponseContext)
  const [preview, setPreview] = useState("")
  const [show, setShow] = useState(false);

  const [projectDetails, setprojectDetails] = useState({
    title: "", language: "", overview: "", github: "", projectImage: "", website: ""
  })

  const [token, setToken] = useState("")
  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, language, overview, projectImage, github, website } = projectDetails;

    if (!title || !language || !overview || !projectImage || !github || !website) {
      toast.info("Please fill the form");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);
      reqBody.append("github", github);
      reqBody.append("website", website);

      let reqHeader = {};
      if (token) {
        reqHeader = {
          "content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        try {
          const result = await addProject(reqBody, reqHeader);
          if (result.status === 201) {
            console.log(result.data);
            handleClose();
           setaddProjectResponse(result.data)
          } else {
            toast.warning(result?.data?.message || "Something went wrong");
          }
        } catch (error) {
          console.error("Caught error:", error);
          toast.error(error?.response?.data?.message || error.message || "Request failed");
        }
      }
    }
  };


  const handleClose = () => {
    setShow(false);
    setprojectDetails({
      title: "", language: "", overview: "", github: "", projectImage: "", website: ""
    })
    setPreview("")
  }

  const handleShow = () => setShow(true);



  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token")) // ✅ Fix: typo "tokem" → "token"
    } else {
      setToken("")
    }
  }, []) // ✅ Fix: add empty dependency array to avoid infinite loop

  return (
    <>
      <div className='mt-2'>
        <Button 
          variant="success" 
          onClick={handleShow}
          className="rounded-pill px-4 d-flex align-items-center gap-2"
          style={{
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
            border: 'none'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add Project</span>
        </Button>
      </div>

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
              <label className="d-block cursor-pointer">
                <input 
                  type='file' 
                  style={{ display: 'none' }} 
                  onChange={e => setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] })} 
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
                >
                  <img
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover'
                    }}
                    src={preview || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
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
                  value={projectDetails.title}
                  onChange={e => setprojectDetails({ ...projectDetails, title: e.target.value })}
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
                  value={projectDetails.language}
                  onChange={e => setprojectDetails({ ...projectDetails, language: e.target.value })}
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
                  value={projectDetails.github}
                  onChange={e => setprojectDetails({ ...projectDetails, github: e.target.value })}
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
                  value={projectDetails.website}
                  onChange={e => setprojectDetails({ ...projectDetails, website: e.target.value })}
                  style={{
                    border: '1px solid #dee2e6',
                    background: '#ffffff',
                    color: '#495057'
                  }}
                />
                <textarea 
                  className='form-control form-control-lg rounded-3'
                  placeholder='Project Overview'
                  value={projectDetails.overview}
                  onChange={e => setprojectDetails({ ...projectDetails, overview: e.target.value })}
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
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button 
            variant="light" 
            onClick={handleClose}
            className="rounded-pill px-4"
          >
            Cancel
          </Button>
          <Button 
            variant="success" 
            onClick={handleAdd}
            className="rounded-pill px-4"
            style={{
              background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
              border: 'none'
            }}
          >
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </>
  )
}

export default AddProject