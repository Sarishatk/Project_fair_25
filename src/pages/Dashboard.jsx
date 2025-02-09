import React from 'react'
import Header from '../components/Header'
import { Row ,Col} from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
  
    <Header insideDashboard/>
    <Row style={{ marginTop: '10px' }}>
<Col className='sm={12} md={8}'>
{/* my project */}
<h2>Welcome <span>User</span></h2>
<MyProject/>

</Col>
<Col className='sm={12} md={8}'>
{/* my profile */}
<Profile/>
</Col>

    </Row>

</>
  )
}

export default Dashboard
