
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Event } from './components/Event';
import { EventList } from './components/EventListComponent';
import { EventListAdd } from './components/EventList';
import { Presence } from './components/Presence';
import { StudentList } from './components/StudentList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Event/>}/>
        <Route path='/event' element={<EventListAdd/>}/>
        <Route path='/card' element={<EventList/>}/>
        <Route path='/presence' element={<Presence/>}/>
        <Route path='/student' element={<StudentList/>}/>
      </Routes>
    </>
    
  );
}

export default App;
