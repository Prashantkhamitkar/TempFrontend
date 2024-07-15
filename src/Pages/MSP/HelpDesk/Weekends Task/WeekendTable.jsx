import React, { useEffect, useState } from 'react'
import {data} from "./Weekend"
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import WeekendData from './WeekendData';
import CreateModal from './CreateModal';
const customers = [
  { value: "Acme Corp", label: "Acme Corp" },
  { value: "customer2", label: "Customer 2" },
  // add more customers here
];

const assignees = [
  { value: "John Doe", label: "John Doe" },
  { value: "jane_doe", label: "Jane Doe" },
  // add more assignees here
];

const WeekendTable = () => {
const [taskdata,setTaskData]=useState(data);
const [toggle,setToggle]=useState(false);
const[search,setsearch]=useState("");
useEffect(()=>{
    const filtered=data.filter((item)=>
        Object.values(item).some((val)=>
        String(val).toLowerCase().includes(search.toLowerCase())
        )
    );
    setTaskData(filtered);
},[search])
const handleclick=()=>{
setToggle(!toggle);
}
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TASKS</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <button
                    type="button"
                    className="btn btn-rounded btn-info waves-effect waves-light "
                    onClick={handleclick}
                  >
                    CREATE
                  </button>
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div
                    className="app-search d-flex mt-0 align-items-center gap-3"
                    style={{ width: "100%" }}
                  >
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                      />
                      <span className="ri-search-line"></span>
                    </div>
                  </div>
                </Col>
              </Row>

              <WeekendData data={taskdata} customers={customers} assignees={assignees} />
              <CreateModal
                modal={toggle}
                toggleModal={handleclick}
                customers={customers}
                assignees={assignees}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default WeekendTable
