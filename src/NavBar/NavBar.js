import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Container>
        <Navbar.Brand><div className='head1'>
          LeaveApp</div></Navbar.Brand>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home"><div className='new1'><u>Home</u></div>
            </Nav.Link>
            <Nav.Link href="/about"><div className='new1'><u>About</u></div></Nav.Link>
            <Nav.Link href="/manual"><div className='new1'><u>How to use</u></div></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/school"><div className='new1'><u>Create An Institute</u></div></Nav.Link>
            <Nav.Item>|</Nav.Item>
            <Nav.Link href="/signup"><div className='new1'><u>SignUp</u></div></Nav.Link>
            <Nav.Item>|</Nav.Item>
            <Nav.Link href="/login"><div className='new1'><u>Login</u></div></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavBar;