import FilmGallery from "../components/FilmGallery";

import { Component } from "react";

class Home extends Component {
  state = {
    courrentPage: "home",
  };
  render() {
    return (
      <div className="bg-netflixbg min-vh-100">
        {/* <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fs-8 fw-1">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => this.setState({ courrentPage: "home" })}>Home</Nav.Link>
                <Link>Home</Link>
                <Nav.Link href="#link">Tv Shows</Nav.Link>
                <Nav.Link href="#link">Movies</Nav.Link>
                <Nav.Link href="#link">Recently Added</Nav.Link>
                <Nav.Link href="#link">My List</Nav.Link>
              </Nav>
              <Nav className="d-flex align-items-center gap-3">
                <Search color="white" size={20} style={{ cursor: "pointer" }} />
                <img src={kids} alt="kids" style={{ width: "30px", height: "30px" }} />
                <BellFill color="white" size={20} style={{ cursor: "pointer" }} />
                <NavDropdown title={<img src={avatar} alt="avatar" style={{ width: "30px" }} />} id="basic-nav-dropdown-dark" menuVariant="dark" align="end">
                  <NavDropdown.Item onClick={() => this.setState({ courrentPage: "profile" })}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.setState({ courrentPage: "settings" })}>Settings</NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/profile">Profile</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/settings">Settings</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#info">Info</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

        <FilmGallery galleryTitle="Trending Now" listFilms="spider man" />
        <FilmGallery galleryTitle="Watch It Again" listFilms="star wars" />
        <FilmGallery galleryTitle="New Releases" listFilms="nightmare" />

        {/* {this.state.courrentPage === "settings" && <Settings />}
        {this.state.courrentPage === "profile" && <Profile />} */}
      </div>
    );
  }
}

export default Home;
