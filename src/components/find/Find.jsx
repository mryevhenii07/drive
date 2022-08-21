import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Card from "./Card";
import s from "./Find.module.css";
import "swiper/css";
import "swiper/css/navigation";

const Find = () => {
  return (
    <div className={s.find}>
      <div className={s.heading}>
        <h1>Find your drive</h1>
        <div className={s.textBg}>
          <p>
            <span>Explore the worlds largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={s.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: { width: 200, slidesPerView: 1 },
            768: { width: 768, slidesPerView: 4 },
            1040: { width: 1040, slidesPerView: 5 },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1567779781359-061ca60d3fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              make="BMW"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1544567430-993e6cead679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              make="Mercedes"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1605409087984-f2a1c1f69996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              make="Mustang"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1600099260176-341fb0d9a6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              make="Porshe"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
              make="Honda"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1605393694134-15c3bd150638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1620387980826-fb34b8065f48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              make="Subaru"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1572634302117-74d5936414ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
              make="Volkswagen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1619943798168-aa763a95fb26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80"
              make="Volvo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1619767886645-0ae16581bf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              make="Toyota"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
