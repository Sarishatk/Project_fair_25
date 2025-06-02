import React, { useEffect, useState, useContext } from 'react'
import {addProjectResponseContext} from '../ContextSareApi/ContextShare'
import { EditShareResponseContext } from '../ContextSareApi/ContextShare';
import AddProject from './AddProject'
import { deleteProject, userProjectAPI } from '../services/allAPI';
import EditProject from './EditProject';
import { toast } from 'react-toastify';
function MyProject() {

  const [userProjects, setuserProjects] = useState([])
      const { editResponse, seteditResponse } = useContext(EditShareResponseContext)
  
 const {addProjectResponse,setaddProjectResponse} = useContext(addProjectResponseContext)
  const getUserProject = async () => {
    // before calling api token is created here
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      };

      const result = await userProjectAPI(reqHeader)
      if (result.status === 200) {
        setuserProjects(result.data);

      } else {
        console.log(result);
        console.log(result.response.data);


      }
    }
  }

  useEffect(() => {
    getUserProject()
  }, [addProjectResponse,editResponse])

const handleDeleteProject = async (id)=>{
  const token = sessionStorage.getItem('token')
  const reqHeader = {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call to delete project
                const result = await deleteProject(id, reqHeader)
                if(result.status === 200){
                  // page reload
                  getUserProject()
                }else{
                  toast.error(result.response.data)
                }
}

  return (
    <div className='card shadow mt-2 mb-3 container-fluid'>
      <div className='d-flex'>
        <h2>My projects</h2>
        <div className='ms-auto'><AddProject /></div>
      </div>
      <div className='mt-4 mb-3'>
        {/* collection of user projects */}
        {userProjects?.length > 0 ? userProjects.map(project => (<div className='border d-flex align-items-center rounded p-2'>
          <h5>{project.title}</h5>
          <div className='icon ms-auto'>
           <EditProject project={project}/>
            <button className='btn'><i className="fa-brands fa-github"></i></button>
            <button  onClick={()=>handleDeleteProject(project._id)} className='btn'><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
        )) :
          <p className='text-danger fw-bolder fs-5'>No projects uploaded yet!!!</p>
        }
      </div>
    </div>
  )
}

export default MyProject
