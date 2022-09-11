import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="p-3 sticky-top border-bottom border-secondary">
            <Navbar.Brand href="/" className="py-0 d-none d-sm-block">
                <h4 className="mb-0">Oeconomia Economics Society</h4>
                <div className="navbrand-subtitle text-muted">Harker's Student Run Economics Organization</div>
            </Navbar.Brand>

            <Navbar.Brand href="/" className="py-0 d-block d-sm-none">
                <h4 className="mb-0">Oeconomia</h4>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar"/>

            <Navbar.Offcanvas id="navbar" aria-labelledby="navbar" placement="end" className="offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Pages</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/resources">Resources</Nav.Link>
                        <Nav.Link href="/speakers">Speakers</Nav.Link>
                        <Nav.Link href="/equilibrium">Equilibrium</Nav.Link>
                        <Nav.Link href="/competitions">Competitions</Nav.Link>
                        <Nav.Link href="/our-team">Our Team</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

export default Header;