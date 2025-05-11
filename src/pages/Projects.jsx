import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {Row,Col} from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard'
import {  allProjectApi} from '../services/allAPI'; 
function Projects() {
const [allprojects,setallProjects] = useState([])
const [secretekey,setsecretekey] = useState("")
const getAllvideos = async ()=>{
  if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "content-type":"application/json",
          "Authorization": `Bearer ${token}`,
    }
    const result = await  allProjectApi(secretekey,reqHeader)
    if(result.status==200){
      setallProjects(result.data)
    }else{
      console.log(result);
      
    }
  }
}


useEffect(()=>{
  getAllvideos()
},[])

  return (
    <>
      
        <Header/>
        <div style={{ marginTop: '100px' }} className="">
  <h1 className="text-center mb-2">All Projects</h1>
  <div className="d-flex align-items-center justify-content-center">
    <div className="d-flex border w-50 rounded mb-2">
      <input 
      onChange={e=>setsecretekey(e.target.value)}
        type="text"
        className="form-control"
        placeholder="search projects by technologies used"
      />
      <i style={{ marginLeft: '-35px' }} className="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  <Row className="mt-2 container-fluid">
  {allprojects?.length > 0 && allprojects.map(project => (
  <Col md={6} sm={12} lg={4} key={project.id}>
    <ProjectCard project={project} />
  </Col>
))}:<p style={{fontSize:'80px'}} className='fw-bolder text-danger m-5'>Please Login To View More Project</p>
  </Row>
</div>



    </>
  
  )
}

export default Projects
