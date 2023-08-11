import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import person from "../assets/person.png";
import Task from '../components/Task';
import Loading from '../components/Loading'
import task from '../data/task'
import TaskHeader from '../components/TaskHeader';


const Alltasks = () => {
  const [task, setTask] = useState([]);
const [loading, setLoading] = useState(true);

const getTasks = async () =>{
  try {
    const res = await fetch('https://olastaskserver.onrender.com/api/tasks');
    const data = await res.json();
    setLoading(false);
    setTask(data.tasks)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getTasks();
}, [])

  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto my-2 my-lg-0 d-flex">
              <div className="mt-3 me-3 ">
                <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                  
             <Link
                    to="/all"
                    className="text-decoration-none text-dark fw-bold tag"
                  >
                    All Tasks
                  </Link>
                </Nav>
              </div>
              <img src={person} alt="" className="mx-2 my-2 my-lg-0 d-block" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container'>
         <TaskHeader heading="My Tasks"/>
      {loading && <Loading/>}
      <div>
        <div>
          { task &&
          task.map((g) => {
            return <Task key={g._id} {...g} />;
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Alltasks