import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import AssigneeTable from './AssigneeTable'

const AssigneeIndex = () => {
  return (
<>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Assignees" />
          <AssigneeTable/>
          </Container>
          </div>
</>
  )
}

export default AssigneeIndex