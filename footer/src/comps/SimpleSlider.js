import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SimpleSlider = () => {
  return (
    <Swiper
      spaceBetween={50} // Slaytlar arasındaki boşluk (piksel cinsinden)
      slidesPerView={3} // Görüntülenmesi gereken slaytların sayısı
    >
      <SwiperSlide>Slayt 1</SwiperSlide>
      <SwiperSlide>Slayt 2</SwiperSlide>
      <SwiperSlide>Slayt 3</SwiperSlide>
      {/* Daha fazla slayt ekleyin... */}
    </Swiper>
  );
};

export default SimpleSlider;
