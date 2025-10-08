import avatar from "../assets/avatar.png";
import { Paypal, BadgeHd } from "react-bootstrap-icons";

function Settings() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-xxl-22 text-netflixgrey p-4 ">
          <h2>Account</h2>
          <hr />
          <div className="row">
            <div className="col">
              <h6>MEMBERSHIP & BILLING</h6>
              <button className="btn btn-bg btn-sm fs-8 p-2">CANCEL MEMBERSHIP</button>
            </div>
            <div className="col">
              <div className="d-flex justify-content-between">
                <div className="left">
                  <p className="text-dark fw-bold m-0">student@strive.school</p>
                  <p className="m-0">Password: ********</p>
                  <p>Phone: 321 044 1279</p>
                </div>
                <div className="right text-end">
                  <a className="a" href="">
                    Change account email
                  </a>
                  <a className="a" href="">
                    Change password
                  </a>
                  <a className="a" href="">
                    Change phone number
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="left">
                  <Paypal className=" d-inline-block align-top" />
                  <p className="text-dark d-inline-block align-middle ms-2 fw-semibold">admin@strive.school</p>
                </div>
                <div className="right text-end">
                  <a className="a" href="">
                    Update payment info{" "}
                  </a>
                  <a className="a" href="">
                    Billing details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h6>PLAN DETAILS</h6>
            </div>
            <div className="col">
              <div className="d-flex justify-content-between">
                <div className="left">
                  <p className="text-dark d-inline-block me-2 align-middle fw-semibold">Premium</p>
                  <BadgeHd className=" d-inline-block align-top" />
                </div>
                <div className="right">
                  <a className="a" href="">
                    Change plan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h6>SETTINGS</h6>
            </div>
            <div className="col text-end">
              <a className="a" href="">
                Parental controls{" "}
              </a>
              <a className="a" href="">
                Test participation{" "}
              </a>
              <a className="a" href="">
                Manage download devices{" "}
              </a>
              <a className="a" href="">
                Activate a device{" "}
              </a>
              <a className="a" href="">
                Recent device streaming activity{" "}
              </a>
              <a className="a" href="">
                Sign out of all devices{" "}
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h6>MY PROFILE</h6>
            </div>
            <div className="col">
              <div className="d-flex justify-content-between">
                <div className="left">
                  <div className="account">
                    <img className="align-middle" src={avatar} alt="avatar" style={{ width: "30px" }} />
                    <p className="text-dark ms-2 d-inline-block align-middle fw-semibold">Strive Student</p>
                  </div>
                  <a className="a mt-4" href="">
                    Language
                  </a>
                  <a className="a" href="">
                    Playback settings
                  </a>
                  <a className="a" href="">
                    Subtitle appearance
                  </a>
                </div>
                <div className="center">
                  <a className="a" href="">
                    Viewing activity
                  </a>
                  <a className="a" href="">
                    Ratings
                  </a>
                </div>
                <div className="right">
                  <a className="a" href="">
                    Manage profiles
                  </a>
                  <a className="a" href="">
                    Add profile email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;
