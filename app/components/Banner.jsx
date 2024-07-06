"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
  Parallax,
} from "swiper";

SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
  Parallax,
]);

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const thumbnails = document.querySelectorAll(
        ".slider-fw.thumb-contr .swiper-slide .bg"
      );
      const thumbnailWrap = document.querySelector(".thumbnail-wrap");

      thumbnails.forEach((thumbnail) => {
        const bg = thumbnail.getAttribute("data-bg");
        const thumbImg = document.createElement("div");
        thumbImg.classList.add("thumb-img");
        thumbImg.innerHTML = `<img src="${bg}">`;
        thumbnailWrap.appendChild(thumbImg);
      });

      document.querySelectorAll(".thumb-img").forEach((thumbImg, index) => {
        thumbImg.addEventListener("click", () => {
          if (window.innerWidth > 768) {
            swiperInstance.slideTo(index, 500);
          }
        });
      });

      const totalSlides = document.querySelectorAll(
        ".slider-fw .swiper-slide:not(.swiper-slide-duplicate) .bg"
      ).length;
      document.querySelector(".total").innerHTML = "0" + totalSlides;

      swiperInstance.on("slideChange", () => {
        const csli = swiperInstance.realIndex + 1;
        document.querySelector(".current").innerHTML = "0" + csli;
      });

      swiperInstance.on("slideChangeTransitionStart", () => {
        document.querySelector(".slide-progress").style.height = 0;
        document.querySelector(".slide-progress").style.transition =
          "height 0s";
      });

      swiperInstance.on("slideChangeTransitionEnd", () => {
        document.querySelector(".slide-progress").style.height = "100%";
        document.querySelector(".slide-progress").style.transition =
          "height 2000ms";
      });
    }
  }, []);

  const slides = [
    {
      image:
        "https://res.cloudinary.com/cardin-africa/image/upload/v1713443003/realityshots/cflgvoqoe8whikg6vtyu.jpg",
      title: "Unforgettable Memories Await",
      description:
        "Join us at RealityShots, where unforgettable memories are waiting to be captured. Let our skilled professionals transform your special moments into timeless keepsakes.",
    },
    {
      image:
        "https://res.cloudinary.com/cardin-africa/image/upload/v1713477232/realityshots/sw5k0ek4evrncw326ka6.jpg",
      title: "Capture Every Moment",
      description:
        "At RealityShots, we specialize in capturing every moment, turning ordinary events into extraordinary memories that last a lifetime.",
    },
    {
      image:
        "https://res.cloudinary.com/cardin-africa/image/upload/v1713450976/realityshots/usj7tgeseysbcxmevkwq.jpg",
      title: "Your Vision, Our Expertise",
      description:
        "Experience the expertise of RealityShots. From personal portraits to professional events, we'll work with you to bring your vision to life, creating stunning images you'll treasure forever.",
    },
    {
      image:
        "https://res.cloudinary.com/cardin-africa/image/upload/v1713443000/realityshots/xiazzsrkjpczyhvupjhe.jpg",
      title: "Elevate Your Events",
      description:
        "Elevate your events with RealityShots. Whether it's a milestone celebration or a corporate gathering, our photography services will capture the essence and excitement of the moment, ensuring memories that last a lifetime.",
    },
  ];

  return (
    <div className="">
      <div id="wrapper">
        <div className="slider-fw thumb-contr ">
          <div className="swiper-container">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{ prevEl: ".ccsw-prev", nextEl: ".ccsw-next" }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = { swiper })}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="fslider-fw-item fl-wrap"
                    style={{ height: "453px" }}
                  >
                    <div
                      className="bg"
                      data-bg={slide.image}
                      style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                    <div className="overlay"></div>
                    <div className="thumb-info">
                      <h3 id="mobileText">
                        <a href="portfolio-single.html" className="ajax">
                          {slide.title}
                        </a>
                      </h3>
                      <p>{slide.description}</p>
                    </div>
                    <div className="cirle-dec"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="thumbnail-wrap"></div>
          <div
            className="ccsw ssanim_btn ccsw-prev"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="fal fa-angle-left" />
          </div>
          <div
            className="ccsw ssanim_btn ccsw-next"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
          >
            <FiChevronRight className="fal fa-angle-right" />
          </div>
          <div className="fs-slider_counter">
            <div className="current">01</div>
            <div className="total">04</div>
          </div>
        </div>
        <div className="fixed-bottom-container">
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
          <div className="hero-slider-wrap_pagination-wrap">
            <div className="hero-slider-wrap_pagination hero-slider-pag swiper-pagination-clickable swiper-pagination-bullets"></div>
          </div>
          <div className="slide-progress-wrap">
            <div className="slide-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
