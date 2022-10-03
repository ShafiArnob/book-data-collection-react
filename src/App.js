import {Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './pages/components/Navbar';
import Create from './pages/create/Create';
import Display from './pages/display/Display';
function App() {

  return (
    <div className="App  h-screen w-full">
      <div className="container">
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/display" element={<Display></Display>}></Route>
          <Route path='/' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
