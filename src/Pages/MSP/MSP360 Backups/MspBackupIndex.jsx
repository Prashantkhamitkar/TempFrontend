import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import MspTable from './MspTable'

const MspBackupIndex = () => {
  return (
<>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="All Backups" />
          <MspTable/>
          </Container>
          </div>
</>
  )
}

export default MspBackupIndex