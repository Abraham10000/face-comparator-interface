
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Event } from './components/Event';
import { EventList } from './components/EventListComponent';
import { EventListAdd } from './components/EventList';
import { Navbar } from './components/NavBarComponent';
import { Presence } from './components/Presence';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Event/>}/>
        <Route path='/event' element={<EventListAdd/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/presence' element={<Presence/>}/>
      </Routes>
    </>
    
  );
}

export default App;
