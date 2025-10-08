import { Button, ButtonGroup, Col, Container, Dropdown } from "react-bootstrap";
import { List, BorderAll } from "react-bootstrap-icons";

function MainHead() {
  return (
    <Container>
      <div className="row align-items-center justify-content-between mt-3">
        <Col>
          <h2 className="d-inline-block align-middle me-4 text-white">TV Shows</h2>{" "}
          <Dropdown className="d-inline-block align-middle ">
            <Dropdown.Toggle variant="dark" className="btn-sm border-white border-radius-1 btn-fw-bold bg-netflixblack" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu menuVariant="dark">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sci-fi</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Adventure</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Colossal</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={1} className="d-flex justify-content-end">
          <ButtonGroup size="sm" aria-label="Basic example">
            <Button variant="outline-netflixgrey">
              <List />
            </Button>
            <Button variant="outline-netflixgrey">
              <BorderAll />
            </Button>
          </ButtonGroup>
        </Col>
      </div>
    </Container>
  );
}

export default MainHead;
