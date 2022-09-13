import React, { useState } from 'react';
import { Dropdown, InputGroup, SplitButton} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import background from '../images/bg-2.jpg' ;
import { Navbar } from "./NavBarComponent";
import './Event.css';
import { MDBFile } from 'mdb-react-ui-kit';


export function Presence() {
    const [show, setShow] = useState(false);
    const [form , setForm] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
            <Navbar label="Welcome to Facial Reocognition"/>
            </div>
            <div className='event-container'  style={{background : `url(${background})`}}>
          <div className='button-container'>
            <div className = "create-button">
              <Button variant="danger" size="lg" onClick={handleShow} style={{width : "400px",marginLeft : "0px"}}>
              Recognition Mode
              </Button>
            </div>
          </div>
          <div style={{marginTop : ""}}>
            <Link to="/event">
                <Button variant="primary" size="lg" style={{marginLeft : "90%",width: "100px", marginTop : "-9%"}}>
                  Finish
                </Button>
              </Link>
            </div>
            

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Importer ici votre image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <MDBFile size='lg' id='formFileLg' />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning">
                  Finish
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        </div>
    )
}