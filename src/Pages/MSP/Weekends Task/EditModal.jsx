// EditModal.js

import React, { useState, useEffect } from "react";
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import Select from "react-select";

const EditModal = ({ modal, toggleModal, rowData, customers, assignees }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [resolution, setResolution] = useState("");
  const [status, setStatus] = useState({ value: "Open", label: "Open" });
  const [assignedTo, setAssignedTo] = useState(null);

 useEffect(() => {
   if (rowData) {
     const customerOption = customers.find(
       (c) => c.value === rowData.CUSTOMER_NAME
     );
     const assigneeOption = assignees.find(
       (a) => a.value === rowData.ASSIGNED_TO
     );

     setSelectedCustomer(customerOption || null); // Initialize with existing customer name
     setSubject(rowData.SUBJECT);
     setDescription(rowData.DESCRIPTION); // Assuming these fields exist in your rowData
     setResolution(rowData.RESOLUTION); // Assuming these fields exist in your rowData
     setStatus({ value: rowData.STATUS, label: rowData.STATUS });
     setAssignedTo(assigneeOption || null); // Initialize with existing assigned to value
   }
 }, [rowData, customers, assignees]);

  const statusOptions = [
    { value: "Open", label: "Open" },
    { value: "Completed", label: "Completed" },
    { value: "In Progress", label: "In Progress" },
  ];

  const handleSubmit = () => {
    // Handle form submission for editing
    console.log({
      selectedCustomer,
      subject,
      description,
      resolution,
      status,
      assignedTo,
    });
    toggleModal();
  };

  const handleDelete = () => {
    // Handle delete operation
    console.log("Deleting...");
    toggleModal(); // Close modal after delete operation
  };

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} size="lg" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CUSTOMER
                    </Label>
                    <Select
                      placeholder="Select Customer"
                      options={customers}
                      onChange={setSelectedCustomer}
                      value={selectedCustomer}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      styles={customStyles}
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="subject"
                      style={{ position: "relative", display: "inline-block" }}
                      className="mt-3 mt-md-3 mt-lg-0"
                    >
                      SUBJECT
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <Input
                      id="subject"
                      className="custominput"
                      placeholder="Enter subject"
                      required={true}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        DESCRIPTION
                        <i
                          className="fas fa-asterisk"
                          style={{
                            color: "red",
                            fontSize: "0.5em",
                            position: "absolute",
                            top: "0.5em",
                            right: "-1.5em",
                          }}
                        ></i>
                      </Label>
                      <div>
                        <textarea
                          placeholder="Enter Additional Product Information"
                          required
                          className="form-control custominput"
                          rows="5"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label className="form-label">RESOLUTION</Label>
                      <div>
                        <textarea
                          placeholder="Enter Additional Product Information"
                          required
                          className="form-control custominput"
                          rows="5"
                          value={resolution}
                          onChange={(e) => setResolution(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <div className="mb-3">
                      <Label>STATUS</Label>
                      <Select
                        placeholder="Select Status"
                        classNamePrefix="select2-selection"
                        styles={customStyles}
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        options={statusOptions}
                        value={status}
                        onChange={setStatus}
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label>ASSIGNED TO</Label>
                      <Select
                        placeholder="Select Assignee"
                        classNamePrefix="select2-selection"
                        styles={customStyles}
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        options={assignees}
                        value={assignedTo}
                        onChange={setAssignedTo}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>
            DELETE
          </Button>
          <Button color="info" onClick={handleSubmit}>
            SAVE
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            CANCEL
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditModal;
