import Image from "next/image";
import { FaEye } from "react-icons/fa";
import Gallery from "./Gallery";

const Portfolio = () => {
  return (
    <div>
      {/* <!-- wrapper  */}
      <div id="wrapper">
        <div className="column-image">
          <Image
            className="bg "
            src="https://res.cloudinary.com/cardin-africa/image/upload/v1713516747/realityshots/b8l44yxgl22oncoxd73w.jpg"
            alt="bg"
            width={700}
            height={500}
          />
          <div className="overlay"></div>
          <div className="column-title">
            <h2>Creative Portfolios by RealityShots</h2>
            <h3>
              Explore the diverse and captivating portfolios crafted by
              RealityShots. From stunning personal portraits to dynamic event
              coverage, discover the creativity and artistry behind each
              captivating image. Let our portfolios inspire your imagination and
              showcase the endless possibilities of visual storytelling.
            </h3>
          </div>
        </div>
        {/* <!-- column-image end  --> */}
        {/* <!-- column-wrapper --> */}
        <div className="column-wrapper">
          <div className="inline-filters-wrap">
            <div className="gallery-filters">017</div>
            <div className="inline-folio-counter">
              <div className="num-album">017</div>
              <div className=" all-album">017</div>
            </div>
          </div>
          {/* <!-- portfolio start --> */}
          <Gallery />
          {/* <!-- gallery-item end-->                            */}

          {/* <!-- portfolio end -->  */}
          <div className="order-wrap">
            <div className="container small-container">
              <h4>Ready To Book an Appointment?</h4>
            </div>
            <a
              href="https://calendly.com/realityshots"
              target="_blank"
              className="order_btn"
            >
              Get In Touch
            </a>
          </div>
          {/* </div> */}
          {/* <!-- column-wrapper --> */}
          {/* <!-- fixed-bottom-container --> */}
          <div className="fixed-bottom-container">
            <div className="scroll-down-wrap">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
            <a href="/" className="bth_btn hbn_vis">
              <i className="fal fa-home-lg-alt"></i>
              <strong>Back to Home</strong>
            </a>
            <div className="progress-bar-wrap">
              <div className="progress-bar color-bg"></div>
            </div>
          </div>
          {/* <!-- fixed-bottom-container end--> */}
        </div>
        {/* <!-- content-holder end --> */}
      </div>
      {/* <!-- wrapper end --> */}
    </div>
  );
};

export default Portfolio;
