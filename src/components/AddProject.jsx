import React from 'react'
import { useState
} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
<img style={{height:'300px',width:'300px'}} className='image-fluid ' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="profile picture" />
  </div>
  <div className="col "> 
<div className=' mb-3 '><input type='text' className='form-control' placeholder='project title'></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='Language used'></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='GitHub Link'></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='Website Link'></input></div>
<div className='mb-3'><input type='text' className='form-control ' placeholder='OverView'></input></div>
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
