import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import person from "../assets/person.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Homepage = () => {


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
                    to="/Create"
                    className="text-decoration-none text-dark fw-bold tag me-2"
                  >
                    New Tasks
                  </Link>

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
      <div>
        <div
          className="container d-block d-lg-flex justify-content-lg-between align-items-lg-center gap-2 mt-5 pb-4"
          id="content"
        >
          <div className="mt-3 mt-md-0 img-text">
            <h2 className="fw-bold">
              Manage your Tasks on <br />
              <span className="blue-text">TaskDuty</span>{" "}
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.
            </p>
            <div className="d-flex align-items-center gap-2">
              <Link to="/all" className="text-decoration-none">
                <button className="blue-bg btn1 text-white p-2 d-block mt-2">
                  Go to My Tasks
                </button>
              </Link>
            </div>
          </div>
          <div className="text-center">
 <img className="img-logo" src={image2} alt="main image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
