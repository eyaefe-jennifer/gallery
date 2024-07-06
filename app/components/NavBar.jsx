"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  useEffect(() => {
    // Toggle mobile menu
    const toggleMobileMenu = () => {
      const mainMenu = document.querySelector(".main-menu");
      const sbOverlay = document.querySelector(".sb-overlay");
      if (mainMenu && sbOverlay) {
        mainMenu.classList.toggle("vismobmenu");
        sbOverlay.classList.toggle("visible");
      }
    };

    const navButtonWrap = document.querySelector(".nav-button-wrap");
    if (navButtonWrap) {
      navButtonWrap.addEventListener("click", toggleMobileMenu);
    }

    // Initialize mobile menu
    const mobMenuInit = () => {
      const ww = window.innerWidth;
      const mainMenu = document.querySelector(".main-menu");
      if (mainMenu) {
        const menusb = document.querySelector(".menusb");
        if (ww < 1064) {
          if (menusb) menusb.remove();
          mainMenu.classList.remove("nav-holder");
          const nav = mainMenu.querySelector("nav");
          if (nav) {
            const cloneMenu = nav.cloneNode(true);
            cloneMenu.classList.add("menusb");
            mainMenu.appendChild(cloneMenu);
            // Add menu functionality if needed
          }
        } else {
          if (menusb) menusb.remove();
          mainMenu.classList.add("nav-holder");
        }
      }
    };

    mobMenuInit();

    window.addEventListener("resize", () => {
      // Call your other functions like csselem() and setUpCarouselSlider() here
      mobMenuInit();
    });

    // Sidebar toggle functionality
    const sbOverlay = document.querySelector(".sb-overlay");
    const sidebarWrap = document.querySelector(".sidebar-wrap");
    const sbButton = document.querySelector(".sb-button");
    const sbWidgetWrap = document.querySelectorAll(".sb-widget-wrap");

    const showSb = () => {
      const mainMenu = document.querySelector(".main-menu");
      if (mainMenu) {
        mainMenu.classList.remove("vismobmenu");
      }
      if (sbOverlay && sidebarWrap && sbButton) {
        sbOverlay.classList.add("visible");
        sidebarWrap.classList.add("vis-sb");
        sbButton.classList.remove("c_sb");
        sbButton.classList.add("r_sbb");
        setTimeout(() => {
          sbWidgetWrap.forEach((widget, index) => {
            gsap.to(widget, {
              duration: 0.9,
              y: "0",
              opacity: 1,
              ease: "Power2.easeOut",
              delay: 0.11 * index,
            });
          });
        }, 500);
      }
    };

    const hideSb = () => {
      if (sidebarWrap && sbButton && sbOverlay) {
        sidebarWrap.classList.remove("vis-sb");
        sbButton.classList.add("c_sb");
        sbButton.classList.remove("r_sbb");
        setTimeout(() => {
          sbWidgetWrap.forEach((widget) => {
            gsap.to(widget, {
              duration: 0.9,
              y: "50px",
              opacity: 0,
              ease: "Power2.easeOut",
            });
          });
        }, 300);
        sbOverlay.classList.remove("visible");
      }
    };

    if (sbButton) {
      sbButton.addEventListener("click", () => {
        if (sbButton.classList.contains("c_sb")) {
          showSb();
        } else {
          hideSb();
        }
      });
    }

    const closeSb = document.querySelector(".close_sb");
    if (sbOverlay) {
      sbOverlay.addEventListener("click", hideSb);
    }
    if (closeSb) {
      closeSb.addEventListener("click", hideSb);
    }

    return () => {
      if (navButtonWrap) {
        navButtonWrap.removeEventListener("click", toggleMobileMenu);
      }
      window.removeEventListener("resize", mobMenuInit);
      if (sbButton) {
        sbButton.removeEventListener("click", hideSb);
      }
      if (sbOverlay) {
        sbOverlay.removeEventListener("click", hideSb);
      }
      if (closeSb) {
        closeSb.removeEventListener("click", hideSb);
      }
    };
  }, []);

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
          {/* Uncomment and update the following section as needed  */}
          {/* <div className="share-btn isShare">
            <div className="sidebar-social fl-wrap">
              <ul>
                <li>
                  <a
                    href="https://web.facebook.com/profile.php?id=61556692174005"
                    target="_blank"
                  >
                    <span
                      className="fab fa-facebook"
                      style={{ fontSize: "1.8em", color: "#EDC16C" }}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/realityshotsss/"
                    target="_blank"
                  >
                    <span
                      className="fab fa-instagram"
                      style={{ fontSize: "1.8em", color: "#EDC16C" }}
                    ></span>
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
          {/* <div className="share-wrapper">
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
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
