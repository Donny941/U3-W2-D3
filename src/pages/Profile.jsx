import { Col, Dropdown, Row } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import { PencilSquare } from "react-bootstrap-icons";

function Profile() {
  return (
    <>
      <div className="mx-md-5 mx-lg-6 mx-xl-7 mx-xxl-9 mt-5">
        <div className="title">
          <p className="display-2 fw-normal">Edit Profile</p>
        </div>
        <hr />
        <div className="row gap-2 justify-content-center">
          <div className="col-12 col-md-3 d-flex justify-content-center position-relative">
            <div className="avatar-container position-relative d-inline-block">
              <img src={avatar} alt="avatar" style={{ width: "150px", height: "150px" }} />
              <PencilSquare className=" position-absolute top-0 mt-2 start-0 ms-2 shadow-icon pointer" />
            </div>
          </div>
          <div className="col-8">
            <div className="up">
              <h3 className="text-bg-netflixgrey text-white p-2 ps-3 fs-5">Donny Dunk</h3>
              <h4 className="fs-5 fw-normal text-netflixlightgrey mt-4">Language:</h4>
              <Dropdown className="d-inline-block align-middle ">
                <Dropdown.Toggle variant="dark" className="btn-sm border-white border-radius-1 btn-fw-bold bg-netflixblack" id="dropdown-basic">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu menuVariant="dark">
                  <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Mandarin Chinese</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Russian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ukrainian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Japanese</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <hr />
            <div className="center">
              <h4 className="fs-5 fw-normal text-netflixlightgrey mt-4">Maturity Settings:</h4>
              <h5 className="fs-8 my-4">
                <span className="bg-netflixdarkgrey text-white p-2">ALL MATURITY RATINGS</span>
              </h5>
              <p>
                Show title of <span className="fw-semibold">all maturity ratings</span> for this profile.
              </p>
              <button type="button" className="mt-2 btn btn-sm btn-outline-netflixgrey px-4 tracking-wider fw-semibold">
                EDIT
              </button>
            </div>
            <hr />
            <div className="bottom">
              <h4>Autoplay controls</h4>
              <div className="form">
                <input className="form-check-input mb-2 me-1" type="checkbox" value="" id="checkDefault" defaultChecked />

                <label className="form-check-label fs-8" htmlFor="checkDefault">
                  Autoplay next episode in a series on all devices.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input me-1" type="checkbox" value="" id="checkChecked" defaultChecked />

                <label className="form-check-label fs-8" htmlFor="checkChecked">
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
          </div>
        </div>

        <Row className="justify-content-end mt-4">
          <Col xs={2}>
            <button className="mt-2 btn btn-sm btn-light px-4 tracking-wider fw-semibold">SAVE</button>
          </Col>
          <Col xs={2}>
            <button className="mt-2 btn btn-sm btn-outline-netflixgrey px-4 tracking-wider fw-semibold">CANCEL</button>
          </Col>
          <Col xs={4}>
            <button className="mt-2 btn btn-sm btn-outline-netflixgrey px-4 tracking-wider fw-semibold">DELETE PROFILE</button>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Profile;
