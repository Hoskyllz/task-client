import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Homepage, Ongoing, Complete, Create, Alltasks, Update, Error} from './pages'


function App() {
  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all" element={<Alltasks />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/completed" element={<Complete />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:taskId" element={<Update />} />
            <Route path="*" element={<Error />} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
