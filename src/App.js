import {Routes,Route,Navigate} from 'react-router-dom'

import './App.css';
import Create from './pages/create/Create';
import Display from './pages/display/Display';
function App() {

  return (
    <div className="App bg-slate-800">
      <div className="container">
        <Routes>
          <Route exact path="/create" element={<Display></Display>}></Route>
          <Route path='/' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
