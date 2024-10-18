import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import styles from './Navbar.module.css';
import navLogo from '../../Assets/navlogo.png';

const DroneNavbar = ({ scrollToContact }) => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} fixed="top" expand={expand} className={styles.navouter}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={navLogo} className={styles.navLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={styles.togl}
            >
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className={styles.offcan}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className={styles.homeBack}>
                    Home
                  </Link>
                  <Link to="/products" className={styles.homeBack1}>
                    Products
                  </Link>
                  <Link to="/services" className={styles.homeBack1}>
                    Services
                  </Link>
                  <Link to="/sectors" className={styles.homeBack1}>
                    Sectors
                  </Link>
                  <Link className={styles.homeBack1}>About</Link>
                  <Link className={styles.homeBack2} onClick={scrollToContact}>
                    Contact
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default DroneNavbar;
