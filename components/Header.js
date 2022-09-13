import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Link from "next/Link";
import { useState } from "react";

function Header() {
    const [offcanvas, setOffcanvas] = useState(false);

    const links = [
        { name: "Home", url: "/" },
        { name: "Resources", url: "/resources" },
        { name: "Speakers", url: "/speakers" },
        { name: "Equilibrium", url: "/equilibrium" },
        { name: "Competitions", url: "/competitions" },
        { name: "Our Team", url: "/our-team" },
    ];

    return (
        <Navbar bg="light" expand="lg" className="p-3 sticky-top border-bottom border-secondary">
            <Navbar.Brand href="/" className="py-0 d-none d-sm-block">
                <h4 className="mb-0">Oeconomia Economics Society</h4>
                <div className="navbrand-subtitle text-muted">Harker&apos;s Student-Run Economics Organization</div>
            </Navbar.Brand>

            <Navbar.Brand href="/" className="py-0 d-block d-sm-none">
                <h4 className="mb-0">Oeconomia</h4>
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setOffcanvas(true)}/>

            <Navbar.Offcanvas show={offcanvas} placement="end" className="offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title>Pages</Offcanvas.Title>
                    <Button className="btn-close" variant="" onClick={() => setOffcanvas(false)}></Button>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="justify-content-end">
                    <Nav>
                        {links.map((link, index) => {
                            return (
                                <Link href={link.url} passHref key={index}>
                                    <a className="nav-link" onClick={() => setOffcanvas(false)}>{link.name}</a>
                                </Link>
                            );
                        })}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

export default Header;