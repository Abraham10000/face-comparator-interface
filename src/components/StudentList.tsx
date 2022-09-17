import { MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import background from '../images/bg-2.jpg' ;
import './StudentList.css'

export function StudentList() {
    const [show, setShow] = useState(false);
    const [form , setForm] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="intro">
  <div className="bg-image h-100" >
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card mask-custom">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">ID STUDENT</th>
                        <th scope="col">NAME</th>
                        <th scope="col">LASTNAME</th>
                        <th scope="col">STATUS</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">STD21001</th>
                        <td>RAKOTO</td>
                        <td>Bozy Kely</td>
                        <td>Expected</td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleShow}>
                                Presence
                            </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
</section>
    )
    
}