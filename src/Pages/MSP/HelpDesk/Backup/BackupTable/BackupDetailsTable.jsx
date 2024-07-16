import React, { useEffect, useState } from "react";
import backupData from "./BackupDetails";
import BackupData from "./BackupData";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import BackupButton from "./BackupButton";
import { CSVLink } from "react-csv";

const BackupDetailsTable = () => {
  const [backupdata, setbackupdata] = useState(backupData);
  const [searchTerm, setSearchTerm] = useState("");
  const [check, setcheck] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const filtered = backupData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setbackupdata(filtered);
  }, [searchTerm]);
  const toggleModal = () => setToggle(!toggle);
  const csvHeaders = [
    { label: "Status", key: "Status" },
    { label: "Comments", key: "Comments" },
    { label: "Backup Date", key: "BackupDate" },
    { label: "Taken By", key: "TakenBy" },
    { label: "Customer Name", key: "CustomerName" },
    { label: "Asset Name", key: "AssetName" },
    { label: "Asset Tag", key: "AssetTag" },
    { label: "Schedule Date", key: "ScheduleDate" },
    { label: "Backup Schedule", key: "BackupSchedule" },
    { label: "Backup Type", key: "BackupType" },
    { label: "Backup Server", key: "BackupServer" },
    { label: "Backup Software", key: "BackupSoftware" },
  ];
  return (
    <>
      <CSVLink
        data={backupdata}
        headers={csvHeaders}
        filename="backup-data.csv"
        className="btn btn-primary mb-3"
      >
        DOWNLOAD CSV
      </CSVLink>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">BACKUP DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <BackupButton check={check} toggle={toggleModal} />
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
              <BackupData
                data={backupdata}
                setToggle={setToggle}
                modal={toggle}
                check={setcheck}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BackupDetailsTable;
