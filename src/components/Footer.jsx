import { Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="mt-6 pb-5 bg-netflixbg">
      <div className="footContain text-netflixgrey mx-md-5 mx-lg-6 mx-xl-7 mx-xxl-8  ">
        <div className="social d-flex gap-3">
          <a className="text-netflixgrey" target="_blank" href="https://www.facebook.com/netflix/">
            <Facebook className="fs-2" />
          </a>
          <a className="text-netflixgrey" target="_blank" href="https://www.instagram.com/netflix/">
            <Instagram className="fs-2" />
          </a>
          <a className="text-netflixgrey" target="_blank" href="https://x.com/netflix/">
            <TwitterX className="fs-2" />
          </a>
          <a className="text-netflixgrey" target="_blank" href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
            <Youtube className="fs-2" />
          </a>
        </div>
        <div className="row mt-3 fs-8">
          <div className="col">
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div className="col">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className="col">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="col">
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </div>
        </div>
        <Button type="button" variant="outline-netflixgrey">
          Service Code
        </Button>

        <p className="fs-9 mt-2 m-0">&copy; 1997-2025 Netflix Inc.(i-3e3423423452)</p>
      </div>
    </div>
  );
}

export default Footer;
