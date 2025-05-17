import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'
function Dashboard() {
  const [username, setUsername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) { setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username) }

  })
  return (

    <>

      <Header insideDashboard />
      <Row style={{ marginTop: '10px' }}>
        <Col className='sm={12} md={8}'>
          {/* my project */}
          <h2>Welcome <span style={{ color: 'red' }}>{username}</span></h2>
          <MyProject />

        </Col>
        <Col className='sm={12} md={8}'>
          {/* my profile */}
          <Profile />
        </Col>

      </Row>

    </>
  )
}

export default Dashboard
