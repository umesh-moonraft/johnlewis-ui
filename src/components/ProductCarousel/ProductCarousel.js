// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProductsCarousel.css";
import ExternalProduct from "../ExternalProduct/ExternalProduct";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function ProductsCarousel({ products }) {
  return (
    <div className="products-carousel-container my-8 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        centerInsufficientSlides={true}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ExternalProduct product={product}></ExternalProduct>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsCarousel;
