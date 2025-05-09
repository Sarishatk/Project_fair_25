import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { HomeProject } from '../services/allAPI'; 

 
function Home(){
  const [logged,setLogged] = useState(false)
  const [HomeProjects,setHomeProjects] = useState([])
  const getHomeProjects = async () => {
    try {
      const result = await HomeProject();
      if (result.status === 200) {
        setHomeProjects(result.data);
      } else {
        console.log('Unexpected response:', result);
      }
    } catch (error) {
      console.log('API Error:', error);
    }
  };
  
console.log(HomeProjects);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
  setLogged(true)
    }else{
      setLogged(false)
    }
getHomeProjects()

   },[])
  return (
   
    <>
    {/* landin section */}
      <div style={{width:'100%',height:'100vh',backgroundColor:'#52a447'}} className='container-fluid rounded'>
       <div className='Row align-items-center p-5 d-flex'>

          <Col sm={12} md={6}>
            <h1 style={{fontSize:'50px'}} className='fw-bolder d-flex align-items-center ' ><i className="fa-solid fa-list-check overflow-hidden "></i>Project Fair</h1>

            <p style={{fontSize:'25px'}}>one stop destination for all software development projects.where user can add and manage their projects.As well as access all projects available in our website...what are you waiting forr!!!</p>
          {logged?
            <Link to={'/dashboard'}  className='btn btn-warning'>Manage your projects <i className="fa-solid fa-arrow-right ms-2"></i>  </Link>:
          <Link to={'/login'}  className='btn btn-warning'>start to Explore <i className="fa-solid fa-arrow-right ms-2"></i>  </Link>}

          </Col>
          <Col style={{marginTop:'100px',marginLeft:'100px'}}><img style={{width:'600px'}} src="https://avatars.githubusercontent.com/u/87497641?v=4" alt="" /></Col>
         </div> 
      </div>
      {/* all projects */}
      <div className="all-projects mt-3">
        <h1 className='text-center mb-2'>Explore our Projects</h1>
        <marquee scrollAmount={25}>
          
          <Row >
  
{HomeProjects?.length>0?HomeProjects.map(project=>(   
         <Col cmd={6} sm={12} lg={4}>
            <ProjectCard  project={project} />
                   </Col>

)):null
}

          </Row>
          
        </marquee>
        <div className="text-center  "><Link to={'/projects'}>View More Projects</Link></div>

      </div>
    </>
  )
}

export default Home
