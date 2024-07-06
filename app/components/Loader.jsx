"use client";
import Image from "next/image";
import { useEffect } from "react";
import { gsap, Linear } from "gsap";

const Loader = () => {
  useEffect(() => {
    const firstLoad = () => {
      document
        .querySelectorAll(".ml_bg-item")
        .forEach((item) => item.classList.add("mgl_vis"));
      gsap.to(".ml-mask", {
        duration: 1.7,
        xPercent: 100,
        ease: Linear.easeNone,
        onComplete: () => {
          document
            .querySelectorAll(".ml_bg-item, .ml-wrap img")
            .forEach((item) => item.classList.add("mgl_clos"));
          setTimeout(() => {
            document.querySelector(".main-loader").style.display = "none";
          }, 1800); // 500ms delay + 1300ms fadeOut
        },
      });
    };

    firstLoad();
  }, []);
  return (
    <div className="main-loader" style={{ display: "none" }}>
      <div className="ml-wrap">
        <div
          className="ml-mask"
          style={{ transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)" }}
        ></div>
        <Image
          src="https://res.cloudinary.com/cardin-africa/image/upload/v1713527570/realityshots/aclkog56ilqio1etqe3s.png"
          width={1030}
          height={600} // Adjust the height as necessary
          alt=""
          className="mgl_clos"
        />
      </div>
      <div className="ml_images-wrap">
        <div
          className="ml_bg-item mgl_vis mgl_clos"
          style={{ top: "-30px", left: "0" }}
        >
          <div
            className="bg"
            data-bg="https://res.cloudinary.com/cardin-africa/image/upload/v1713450976/realityshots/usj7tgeseysbcxmevkwq.jpg"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/cardin-africa/image/upload/v1713450976/realityshots/usj7tgeseysbcxmevkwq.jpg)",
            }}
          ></div>
        </div>
        <div
          className="ml_bg-item mgl_vis mgl_clos"
          style={{ bottom: "-20px", left: "50px" }}
        >
          <div
            className="bg"
            data-bg="https://res.cloudinary.com/cardin-africa/image/upload/v1713450976/realityshots/s4cngaxmcgvypnaqucic.jpg"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/cardin-africa/image/upload/v1713450976/realityshots/s4cngaxmcgvypnaqucic.jpg)",
            }}
          ></div>
        </div>
        <div
          className="ml_bg-item mgl_vis mgl_clos"
          style={{ top: "30px", right: "-120px" }}
        >
          <div
            className="bg"
            data-bg="https://res.cloudinary.com/cardin-africa/image/upload/v1713477797/realityshots/nyebfghnng3nwte4oz4l.jpg"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/cardin-africa/image/upload/v1713477797/realityshots/nyebfghnng3nwte4oz4l.jpg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
