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

        const [eventType,setEventType] = useState<string>("");
        
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
              Créer un Event
              </Button>
              <Link to="/event">
                <Button variant="outline-warning" size="lg" style={{marginLeft : "20px",width: "200px"}}>
                  Voir la liste des Events
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
                <Modal.Title>Création d'un Nouvel Event</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className='choice-container'>
                    <h6>Type de l'Event : </h6>
                    <div className='choice'>
                        <input 
                          className='form-control'
                          onChange={(e) => setEventType(e?.target?.value)}
                          value={eventType} />
                    </div> 
                  </div> <br />
                  <div className='course-type-container'>
                    <h6>Choisissez un Cours ou un Event</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        {
                          eventType.toLowerCase() === "course" ? <Form.Select defaultValue="Chose Course" className="form-control" name="a_state"onChange={(e) => {setForm(e.target.value)}}>
                          <option value="Choose...">Choisisez un cours</option>
                          <option value="SYS1">SYS1</option>
                          <option value="PROG1">PROG1</option>
                          <option value="PROG2">PROG2</option>
                          <option value="EL1">EL1</option>
                        </Form.Select> :
                      <Form.Control aria-label="Text input with dropdown button"  placeholder="Nom de l'Event"/>
                      }  
                      </InputGroup>
                    </div>
                  </div> <br />
                  <div className='group-check-container'>
                    <h6>Choisissez les groupes participants :</h6>
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
                    <h6>Début</h6>
                    <Form.Group>
                      <input type={"datetime-local"} name="date" />
                    </Form.Group>
                    <h6 style={{marginTop : "1%"}}>Fin</h6>
                    <Form.Group>
                      <input type={"datetime-local"} name="date" />
                    </Form.Group>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Link to='/presence'>
                <Button variant="warning">
                  Sauvegarder
                </Button>
                </Link>
              </Modal.Footer>
            </Modal>
        </div>

          </>
    )
}