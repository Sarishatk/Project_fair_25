import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
   <div className='card shadow mt-2 container-fluid'>
    <div className='d-flex'>
        <h2>My projects</h2>
        <div className='ms-auto'><AddProject/></div>
        </div>
        <div className='mt-4'>
     {/* collection of user projects */}
     <div className='border d-flex align-items-center rounded p-2'>
<h5>Project Title</h5>
<div className='icon ms-auto'>
    <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button className='btn'><i class="fa-brands fa-github"></i></button>
    <button className='btn'><i class="fa-solid fa-trash"></i></button>
</div>
     </div>
     <p className='text-danger fw-bolder fs-5'>No projects uploaded yet!!!</p>
        </div>
   </div>
  )
}

export default MyProject
