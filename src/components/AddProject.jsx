import React from 'react'

import { useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  
  const [show, setShow] = useState(false);

const [projectDetails,setprojectDetails] = useState({
  title:"",language:"",overview:"",github:"",projectImage:"",website:""
 
  
})


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(projectDetails);

  
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
      
      <input type='file' style={{display:'none'}} onChange={e=>setprojectDetails({...projectDetails,projectImage:e.target.files[0]})} />
  <img style={{height:'300px',width:'300px'}} className='image-fluid ' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="profile picture" />
   </label>
  </div>
  <div className="col "> 
<div className=' mb-3 '><input type='text' className='form-control' placeholder='project title' value={projectDetails.title} onChange={e=>setprojectDetails({...projectDetails,title:e.target.value})}></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='Language used'  value={projectDetails.language} onChange={e=>setprojectDetails({...projectDetails,language:e.target.value})} ></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='GitHub Link' value={projectDetails.github} onChange={e=>setprojectDetails({...projectDetails,github:e.target.value})}></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='Website Link' value={projectDetails.website} onChange={e=>setprojectDetails({...projectDetails,website:e.target.value})}></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='OverView' value={projectDetails.overview} onChange={e=>setprojectDetails({...projectDetails,overview:e.target.value})}></input></div>
  </div>
</div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject
