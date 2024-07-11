import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import WeekendTable from "./WeekendTable";

const WeekendTaskIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Weekend Tasks" />
          <WeekendTable/>
        </Container>
      </div>
    </>
  );
};

export default WeekendTaskIndex;
