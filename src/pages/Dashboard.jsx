import React from 'react'
import Header from '../components/Header'
import { Row ,Col} from 'react-bootstrap'

function Dashboard() {
  return (
    <>
  
    <Header insideDashboard/>
    <Row style={{ marginTop: '10px' }}>
<Col className='sm={12} md={8}'>

</Col>
<Col className='sm={12} md={8}'>

</Col>

    </Row>

</>
  )
}

export default Dashboard
