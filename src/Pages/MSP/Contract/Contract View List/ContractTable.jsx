import React, { useEffect, useState } from 'react'
import ContractData from './ContractData';
import {contracts as data} from "./Contract"
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const ContractTable = () => {
  const [contractData, setContractData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setContractData(filtered);
  }, [searchTerm]);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">CONTRACT DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <Button color='info' className='btn btn-rounded' onClick={()=>navigate("/new-contract")}>ADD CONTRACT</Button>
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span className="ri-search-line"></span>
                    </div>
                  </div>
                </Col>
              </Row>
              <ContractData data={contractData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContractTable;