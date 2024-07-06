import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="footer_contacts">
          <ul>
            <li>
              <span>Mail :</span>
              <Link
                style={{ color: "#EDC16C" }}
                href="mailto:enquiry@realityshots.art"
                target="_blank"
              >
                enquiry@realityshots.art
              </Link>
            </li>
            <li>
              <span>Phone :</span>
              <a style={{ color: "#EDC16C" }} href="tel:+447412417060">
                +44 741 241 7060
              </a>
            </li>
            <li>
              <span>Address :</span>
              <a style={{ color: "#EDC16C" }} href="javascript">
                Unit 6c, Bakers Yard, Alphin Brook Rd, Marsh Barton, Exeter EX2
                8RG
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
