import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import PickShiftCard from './PickShiftCard'

const PickShift = () => {
  return (
    <>
     <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Pick Shifts" />
          <PickShiftCard/>
          </Container>
          </div>
    </>
  )
}

export default PickShift