import {Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './pages/components/Navbar';
import Create from './pages/create/Create';
import Display from './pages/display/Display';
import SingleBook from './pages/singleBook/SingleBook';
function App() {

  return (
    <div className="App  h-screen w-full">
      <div className="container">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Create></Create>}></Route>
          <Route exact path="/books" element={<Display></Display>}></Route>
          <Route path="books/:id" element={<SingleBook></SingleBook>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
