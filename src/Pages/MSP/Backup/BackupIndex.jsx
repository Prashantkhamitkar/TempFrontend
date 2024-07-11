import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import BackupCalendar from './BackupCalendar'

const BackupIndex = () => {
  return (
<>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Backup" />
          <BackupCalendar/>
          </Container>
          </div>
</>
  )
}

export default BackupIndex