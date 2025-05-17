import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { userProjectAPI } from '../services/allAPI';
function MyProject() {

  const [userProjects,setuserProjects] = useState([])

  const getUserProject = async ()=>{
    // before calling api token is created here
    if(sessionStorage.getItem('token')){
    const token =   sessionStorage.getItem('token')
     const reqHeader = {
          "content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        const result = await userProjectAPI(reqHeader)
        if(result.status === 200){
         setuserProjects(result.data);
          
        }else{
          console.log(result);
          console.log(result.response.data);
          
          
        }
    }
  }

  useEffect(()=>{
getUserProject()
  },[])

  return (
   <div className='card shadow mt-2 container-fluid'>
    <div className='d-flex'>
        <h2>My projects</h2>
        <div className='ms-auto'><AddProject/></div>
        </div>
        <div className='mt-4'>
     {/* collection of user projects */}
    {  userProjects?.length>0? userProjects.map(project=>(<div className='border d-flex align-items-center rounded p-2'>
<h5>{project.title}</h5>
<div className='icon ms-auto'>
    <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button className='btn'><i class="fa-brands fa-github"></i></button>
    <button className='btn'><i class="fa-solid fa-trash"></i></button>
</div>
     </div>
     )):
     <p className='text-danger fw-bolder fs-5'>No projects uploaded yet!!!</p>
    }
        </div>
   </div>
  )
}

export default MyProject
