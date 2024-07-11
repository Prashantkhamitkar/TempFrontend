import React from "react";
import { Container } from "reactstrap";

import Breadcrumbs from "../../../components/Common/Breadcrumb";
import MyShiftCalendar from "./MyShiftCalendar";
const MyShifts = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="My Shifts" />
          <MyShiftCalendar />
        </Container>
      </div>
    </>
  );
};

export default MyShifts;
