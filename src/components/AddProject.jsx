import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// ✅ Make sure to import the API function
import { addProject } from '../services/allAPI'; // 🔁 Change to actual path where your API method exists

function AddProject() {
  const [preview, setPreview] = useState("")
  const [show, setShow] = useState(false);

  const [projectDetails, setprojectDetails] = useState({
    title: "", language: "", overview: "", github: "", projectImage: "", website: ""
  })

  const [token, setToken] = useState("")

  const handleAdd = async (e) => {
    e.preventDefault(); // ✅ Fix: add parentheses
    const { title, language, overview, projectImage, github, website } = projectDetails

    if (!title || !language || !overview || !projectImage || !github || !website) {
      toast.info("please fill the form")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)
      reqBody.append("github", github)
      reqBody.append("website", website)

      let reqHeader = {} // ✅ Fix: define reqHeader in outer scope
      if (token) {
        reqHeader = {
          "content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProject(reqBody, reqHeader) // ✅ Fix: make sure addProject is defined
      console.log(result);

      if (result === 200) {
        console.log(result.data);
      } else {
        console.log(result);
        console.log(result.data.response);
      }
      }

      
    }
  }

  const handleClose = () => {
    setShow(false);
    setprojectDetails({
      title: "", language: "", overview: "", github: "", projectImage: "", website: ""
    })
    setPreview("")
  }

  const handleShow = () => setShow(true);

  console.log(projectDetails);

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
        <Button variant="primary" onClick={handleShow}>
          Add Project
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <label>
                <input type='file' style={{ display: 'none' }} onChange={e => setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                <img
                  style={{ height: '300px', width: '300px' }}
                  className='image-fluid'
                  src={
                    preview
                      ? preview
                      : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
                  }
                  alt='profile picture'
                />
              </label>
            </div>
            <div className="col ">
              <div className=' mb-3 '><input type='text' className='form-control' placeholder='project title' value={projectDetails.title} onChange={e => setprojectDetails({ ...projectDetails, title: e.target.value })}></input></div>
              <div className='mb-3'><input type='text' className='form-control ' placeholder='Language used' value={projectDetails.language} onChange={e => setprojectDetails({ ...projectDetails, language: e.target.value })} ></input></div>
              <div className='mb-3'><input type='text' className='form-control ' placeholder='GitHub Link' value={projectDetails.github} onChange={e => setprojectDetails({ ...projectDetails, github: e.target.value })}></input></div>
              <div className='mb-3'><input type='text' className='form-control ' placeholder='Website Link' value={projectDetails.website} onChange={e => setprojectDetails({ ...projectDetails, website: e.target.value })}></input></div>
              <div className='mb-3'><input type='text' className='form-control ' placeholder='OverView' value={projectDetails.overview} onChange={e => setprojectDetails({ ...projectDetails, overview: e.target.value })}></input></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdd}>
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </>
  )
}

export default AddProject
