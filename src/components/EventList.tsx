import { EventList } from "./EventListComponent";
import { Navbar } from "./NavBarComponent";
import background from '../images/bg-2.jpg' ;

// Cette fonciton prend en charge de mettre en place la page qui gère les event.

export function EventListAdd() {
    return (
    <>
        <div>
            <Navbar label="Welcome to EVENT MANAGER"/>
            <div style={{backgroundImage : `url(${background})`}}>
                <div>
                    <EventList/>
                    <EventList />
                </div>
            </div>            
        </div>           
    </>
    )
}

