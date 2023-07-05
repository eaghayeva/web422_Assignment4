import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainNav() {
    const router = useRouter();
    const [ searchText, setSearchText ] = useState("");

    // As the input to the search bar changes, this function updates the search text in real time using state
    const updateSearchText = (event) => {
        setSearchText(event.target.value)
    }

    // When the user clicks on the search button, the form is submitted and the app redirects the user to the custom URL requested
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);
        router.push(`/artwork?title=true&q=${searchText}`);
        setSearchText("");
    }

    return (
        <>
            <Navbar expand="lg" className="bg-dark navbar-dark fixed-top nav-bar">
                <Container>
                    <Navbar.Brand>Emiliya Aghayeva</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                        <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
                    </Nav>

                    {/* Form uses the idea of controlled components and keeps track of state */}
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control onChange={updateSearchText} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button  type='submit' variant="outline-success ">Search</Button>
                    </Form>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br />
        </>
    );
}