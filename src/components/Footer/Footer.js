import React from "react";
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div>
            <div>
              <h5>Trend Hub</h5>
            </div>
            <div className="footer-contact">
              <p>Contact Us:</p>
              <p>
                <strong>Trend Hub LTD.</strong>
              </p>
              <p>Khilkhet</p>
              <p>13/3 Ka, Road 10, Namapara</p>
              <p>Dhaka-1229, Bangladesh</p>
            </div>
            <div style={{ marginTop: 15 }}>
              <p>Phone: +880 01900-000000</p>
              <p>
                {" "}
                Email:
                <strong> trendhub@gmail.com</strong>
              </p>
            </div>
          </div>
          <div className="footer-more">
            <h5 className="footer-title">More at TrendHub</h5>
            <p>
              <Link to="#">Download APP</Link>
            </p>
            <p>
              <Link to="#">Gift Voucher</Link>
            </p>
            <p>
              <Link to="#">Customer Feedback</Link>
            </p>
            <p>
              <Link to="#">Privacy Policy</Link>
            </p>
          </div>
          <div>
            <h5 className="footer-title">Social Media</h5>
            <IconButton>
              <FacebookIcon color="primary" />
            </IconButton>
            <IconButton>
              <LinkedInIcon color="primary" />
            </IconButton>
            <IconButton>
              <TwitterIcon color="primary" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <small>TrendHub Limited 2021 © All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
