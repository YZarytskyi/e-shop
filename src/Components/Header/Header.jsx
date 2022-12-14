import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Reducers/authReducer";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onLinkClick = () => {
    const collapse = document.getElementById("navbarScroll");
    collapse.classList.toggle("show");
  };

  const onClickLogout = () => {
    dispatch(logout());
    onLinkClick();
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`${style.header} py-3 my-1 bg-white shadow-sm`}
    >
      <Container>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <Navbar.Brand className={`fw-bold fs-4 mt-1 ${style.brand}`}>PRESTIGE</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={style.nav} navbarScroll>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? style.active : style.item
              }
              onClick={() => onLinkClick()}
            >
              <span className={style.item}>Home</span>
            </NavLink>
            <NavLink
              to="/products"
              className={(navData) =>
                navData.isActive ? style.active : style.item
              }
              onClick={() => onLinkClick()}
            >
              <span className={style.item}>Products</span>
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? style.active : style.item
              }
              onClick={() => onLinkClick()}
            >
              <span className={style.item}>About</span>
            </NavLink>
            <NavLink
              to="/contacts"
              className={(navData) =>
                navData.isActive ? style.active : style.item
              }
              onClick={() => onLinkClick()}
            >
              <span className={style.item}>Contacts</span>
            </NavLink>
          </Nav>
          {isAuth ? (
            <div className={style.auth}>
              <button
                onClick={() => onClickLogout()}
                className="btn btn-outline-dark border-0 mt-2 ms-5"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-right-to-bracket"
                  className="me-2"
                />
                Logout
              </button>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark border-0 mt-2"
                onClick={() => onLinkClick()}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  className="me-2"
                />
                Cart ({cart.length})
              </NavLink>
            </div>
          ) : (
            <div className={style.auth}>
              <NavLink
                to="/login"
                className="btn btn-outline-dark border-0 mt-2"
                onClick={() => onLinkClick()}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-right-to-bracket"
                  className="me-2"
                />
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-dark border-0 mt-2"
                onClick={() => onLinkClick()}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-user-plus"
                  className="me-2"
                />
                Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark border-0 mt-2"
                onClick={() => onLinkClick()}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  className="me-2"
                />
                Cart ({cart.length})
              </NavLink>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
