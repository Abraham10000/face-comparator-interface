import { EventList } from "./EventListComponent";
import { Navbar } from "./NavBarComponent";
import background from '../images/bg-2.jpg' ;
import { Link } from "react-router-dom";

// Cette fonciton prend en charge de mettre en place la page qui gère les event.

export function EventListAdd() {
    return (
    <>
        <div style={{backgroundImage : `url(${background})`}}>
            <div style={{position : "fixed", width : "100vw", zIndex : "2000"}}>
            <Navbar label="Welcome to EVENT MANAGER"/>
            </div> <br /> <br /> 
            <div style={{backgroundImage : `url(${background})`}}>
                <div style={{marginTop : "20px"}}>
                   <Link to='/presence'><EventList/></Link> 
                    <EventList /> 
                </div>
            </div>            
        </div>           
    </>
    )
}

