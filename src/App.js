import './App.css';
import Navbar from './Navbar';  
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Create';
import ExerciseDetails from './ExerciseDetails';
import NotFound from './NotFound';


function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Create"  element={<Create />} />
          <Route path="/Workout/:id"  element={<ExerciseDetails />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
