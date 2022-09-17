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
import { StudentList } from './StudentList';
import Pagination from 'react-bootstrap/Pagination';


export function Presence() {
    const [show, setShow] = useState(false);
    const [form , setForm] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{background : `url(${background})`}}>
            <div>
            <Navbar label="STUDENT REKOGNITION"/>
            </div> <br />
            <div className='event-container'  style={{display : "flex", flexDirection : "column"}}>
              <div>
                <StudentList/>
              </div> <br /> 
              <div style={{display : "flex",alignItems : "center", justifyContent : "center", justifyItems :"center"}}>
                <Link to='/event'><Button variant="warning" size='lg' style={{width : "150px"}}>
                    Finish
                </Button></Link>
              </div>
              
            </div>           
        </div>
    )
}