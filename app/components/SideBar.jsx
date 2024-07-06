import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar-wrap">
        <div className="sidebar-wrap-container">
          <div className="sb-widget-wrap fl-wrap">
            <h3>Brief Intro on RealityShots</h3>
            <div className="sb-widget  fl-wrap">
              <p>
                RealityShots specializes in professional photography services,
                capturing unforgettable moments with precision and artistry.
                From personal portraits to event coverage, our dedicated team
                ensures every detail and emotion is preserved. Let us transform
                your vision into reality. Book your session today and create
                timeless memories with RealityShots.
              </p>
            </div>
          </div>

          <div className="sb-widget-wrap fl-wrap">
            <h3>Social Links</h3>
            <div className="sb-widget    fl-wrap">
              <div className="sidebar-social fl-wrap">
                <ul>
                  <li>
                    <a
                      href="https://web.facebook.com/profile.php?id=61556692174005"
                      target="_blank"
                    >
                      <span className="fab fa-facebook text-[#EDC16C] text-[1.8em]"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/realityshotsss/"
                      target="_blank"
                    >
                      <span className="fab fa-instagram text-[#EDC16C] text-[1.8em]"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sb-overlay"></div>
    </div>
  );
};

export default SideBar;
