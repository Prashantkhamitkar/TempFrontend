import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import {data} from  './Assignee';
import AssigneeData from './AssigneeData';

const AssigneeTable = () => {
  const [assigneeData, setAssigneeData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setAssigneeData(filtered);
  }, [searchTerm]);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">ASSIGNEE DATA</h5>
            </CardHeader>
            <CardBody>
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span className="ri-search-line"></span>
                    </div>
                  </div>
                </Col>
              </Row>
              <AssigneeData data={assigneeData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AssigneeTable