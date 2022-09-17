import React, { useState } from 'react';
import { Dropdown, InputGroup, SplitButton} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import background from '../images/bg-2.jpg' ;
import './Event.css';

 // Cette fonction prend en chargfe tout les fonctionnalités du page SEE AND CREATE EVENT


export function Event() {
       
        const [show, setShow] = useState(false);
        const [form , setForm] = useState("");
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [time , setTime] = useState("");
        
        function getTime() {
          var today = new Date();

          let curTime = today.getHours() + ":" + today.getMinutes();
          console.log(curTime);
          
          setTime(curTime);
        }


       return (
          <>
        <div className='event-container'  style={{background : `url(${background})`}}>
          <div className='button-container'>
            <div className = "create-button">
              <Button variant="outline-warning" size="lg" onClick={handleShow} style={{width : "200px",marginLeft : "90px"}}>
              Create Event
              </Button>
              <Link to="/event">
                <Button variant="outline-warning" size="lg" style={{marginLeft : "20px",width: "200px"}}>
                  See Event
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/"><Button variant="outline-warning"  className = "logout">
                Logout
              </Button></Link> 
            </div>
            
          </div>
            

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Creat a new Course !</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className='choice-container'>
                    <h6>Chose one event : </h6>
                    <div className='choice'>
                        <Form.Select defaultValue="Choose..." className="form-control" name="a_state"   onChange={(e) => {setForm(e.target.value)}}>
                            <option value="Choose...">Course</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bombay">Bommbay</option>
                            <option value="New York">New York</option>
                            <option value="Kashmir">Kashmir</option>
                        </Form.Select>
                    </div> 
                  </div> <br />
                  <div className='course-type-container'>
                    <h6>Chose a course or give the event:</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Select defaultValue="Chose Course" className="form-control" name="a_state"onChange={(e) => {setForm(e.target.value)}}>
                            <option value="Choose...">Chose course</option>
                            <option value="Delhi">SYS</option>
                            <option value="Bombay">DONNEE</option>
                            <option value="New York">EL</option>
                            <option value="Kashmir">TN</option>
                        </Form.Select>
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Give the new event'/>
                      </InputGroup>
                    </div>
                  </div> <br />
                  <div className='group-check-container'>
                    <h6>Choise the group participant :</h6>
                    {['checkbox'].map((type) => (
                        <div key={`reverse-${type}`} className="group">
                            <Form.Check
                                reverse
                                label="G1"
                                name="group1"
                                id={`reverse-${type}-2`}
                            />
                            <Form.Check
                                className="g2"
                                reverse
                                label="G2"
                                name="group1"
                                id={`reverse-${type}-2`}
                            />
                            <Form.Check
                                className="g3"
                                reverse
                                label="G3"
                                name="group1"
                                id={`reverse-${type}-2`}
                            />
                        </div>
                    ))}      
                  </div> <br />
                  <div className='time'>
                    <h6>Begin Time :</h6>
                    <Form.Group>
                      <Form.Control type="time" name="date" placeholder="Begin time" size="sm" 
                      style={{marginTop : "2%"}}/>
                    </Form.Group>
                    <h6 style={{marginTop : "1%"}}>Time to finish</h6>
                    <Form.Group>
                      <Form.Control type="time" name="date" placeholder="Begin time" size="sm" 
                      style={{marginTop : "2%"}}/>
                    </Form.Group>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Link to='/presence'>
                <Button variant="warning">
                  Save Changes
                </Button>
                </Link>
              </Modal.Footer>
            </Modal>
        </div>

          </>
    )
}