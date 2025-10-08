import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import kids from "../assets/kids_icon.png";
import { Search, BellFill } from "react-bootstrap-icons";
import { NavLink, Link } from "react-router";

function NetflixNav() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fs-8 fw-1 bg-netflixbg ">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/tv-shows">Tv Shows</Link>
            <NavLink href="#link">Movies</NavLink>
            <NavLink href="#link">Recently Added</NavLink>
            <NavLink href="#link">My List</NavLink>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
            <Search color="white" size={20} style={{ cursor: "pointer" }} />
            <img src={kids} alt="kids" style={{ width: "30px", height: "30px" }} />
            <BellFill color="white" size={20} style={{ cursor: "pointer" }} />
            <NavDropdown title={<img src={avatar} alt="avatar" style={{ width: "30px" }} />} id="basic-nav-dropdown-dark" menuVariant="dark" align="end">
              <NavDropdown.Item>
                <NavLink to="/profile">Profile</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/settings">Settings</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>Info</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNav;
