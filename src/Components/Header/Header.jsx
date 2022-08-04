import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Header.module.css'


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className={`${style.header} py-3 bg-white shadow-sm`} >
      <Container>
        <Navbar.Brand href="/" className='fw-bold fs-4'>PRESTIGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to='/' className={(navData) => navData.isActive 
            ? style.active : style.item}>
              <span className={style.item}>Home</span>
            </NavLink>
            <NavLink to='/products' className={(navData) => navData.isActive 
            ? style.active : style.item}>
              <span className={style.item}>Products</span>
            </NavLink>
            <NavLink to='/about' className={(navData) => navData.isActive 
            ? style.active : style.item}>
              <span className={style.item}>About</span>
            </NavLink>
            <NavLink to='/contacts' className={(navData) => navData.isActive 
            ? style.active : style.item}>
              <span className={style.item}>Contacts</span>
            </NavLink>
          </Nav>
          <a href="/" className="btn btn-outline-dark">
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className="me-2" />Login</a>
          <a href="/" className="btn btn-outline-dark">
          <FontAwesomeIcon icon="fa-solid fa-user-plus" className="me-2" />Register</a>
          <a href="/" className="btn btn-outline-dark">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="me-2" />Cart(0)</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
