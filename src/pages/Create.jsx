import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import person from "../assets/person.png";

const Create = () => {
  const redirect = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description, tags });
    try {
      const res = await fetch(
        "https://olastaskserver.onrender.com/api/tasks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, tags }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success("Goal was created");
        redirect("/all");
      } else {
        toast.error("Error creating Task , TryAgain");
      }
      setTitle("");
      setDescription("");
      setTags("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
      </div>
      <div className="container">
        <div>
          

          <div>
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <div >
                <h3>New Task</h3>
                <label className="title">
                  <legend className="Task-header">Task Title:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input ps-2"
                    placeholder="E.g Project Defense, Assignment ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <label className="title">
                  <legend className="Task-header ">Description:</legend>
                </label>
                <fieldset>
                  <textarea
                    className="area ps-2"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </fieldset>
              </div>

              <div>
                <label>
                  <legend className="Task-header">Tags:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input ps-2"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <button className="form-done mt-5 fw-bolder fs-5">Done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;