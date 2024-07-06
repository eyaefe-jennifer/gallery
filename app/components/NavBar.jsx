import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <header className="main-header">
        <div className="main-inner">
          <Link href="/" className="logo-holder">
            <Image
              src="https://res.cloudinary.com/cardin-africa/image/upload/v1713527570/realityshots/aclkog56ilqio1etqe3s.png"
              width={1030}
              height={600} // Adjust the height as necessary
              alt=""
              priority
              className="img"
            />
          </Link>
          <div className="sb-button c_sb">
            <span></span>
          </div>
          <div className="nav-button-wrap">
            <div className="nav-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* Uncomment and update the following section as needed */}
          {/* <div className="share-btn isShare">
          <div className="sidebar-social fl-wrap">
            <ul>
              <li>
                <a href="https://web.facebook.com/profile.php?id=61556692174005" target="_blank">
                  <span className="fab fa-facebook" style={{ fontSize: '1.8em', color: '#EDC16C' }}></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/realityshotsss/" target="_blank">
                  <span className="fab fa-instagram" style={{ fontSize: '1.8em', color: '#EDC16C' }}></span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
          <div className="main-menu">
            <div className="nav-holder">
              <nav>
                <ul>
                  <li>
                    <Link href="/" className="act-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link
                      href="https://calendly.com/realityshots"
                      target="_blank"
                      style={{ color: "#EDC16C" }}
                    >
                      Book Us Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="menusb sliding-menu" style={{ height: "144px" }}>
              <div className="sliding-menu-wrapper" style={{ width: "240px" }}>
                <ul
                  id="menu-panel-y4cmo"
                  className="menu-panel-root"
                  style={{ width: "240px" }}
                >
                  <li>
                    <Link href="/" className="act-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <a
                      href="https://calendly.com/realityshots"
                      target="_blank"
                      style={{ color: "#EDC16C" }}
                    >
                      Book Us Now
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="share-wrapper">
            <div className="share-inner">
              <div className="share-container">
                <a
                  href="http://www.facebook.com/share.php?u=https%3A%2F%2Frealityshots.art%2F"
                  title="Share this page on facebook"
                  className="pop share-icon share-icon-facebook"
                ></a>
                <a
                  href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Frealityshots.art%2F&amp;media=&amp;description=Welcome to RealityShots, your premier destination for professional photography services in the United Kingdom and beyond! Our skilled team specializes in capturing unforgettable moments, from personal and portfolio photography to events and entertain"
                  title="Share this page on pinterest"
                  className="pop share-icon share-icon-pinterest"
                ></a>
                <a
                  href="https://twitter.com/share?via=in1.com&amp;text=RealityShots - Premier Professional Photography Services in the United Kingdom"
                  title="Share this page on twitter"
                  className="pop share-icon share-icon-twitter"
                ></a>
                <a
                  href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Frealityshots.art%2F&amp;title=RealityShots - Premier Professional Photography Services in the United Kingdom&amp;summary=Welcome to RealityShots, your premier destination for professional photography services in the United Kingdom and beyond! Our skilled team specializes in capturing unforgettable moments, from personal and portfolio photography to events and entertain&amp;source=in1.com"
                  title="Share this page on linkedin"
                  className="pop share-icon share-icon-linkedin"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
