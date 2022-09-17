import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Le component Navbar

export function Navbar(props : any) {
  const {label } = props;
    return(
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <h1 style={{marginLeft : "30%", color : "white"}}
            >{label}</h1>
            <div>
              <Link to="/"><Button variant="outline-warning"  className = "logout">
                Logout
              </Button></Link> 
            </div>
      </nav>
    </div>
    )
    
}