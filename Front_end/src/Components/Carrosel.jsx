import { Image } from "@chakra-ui/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../assets/pmenos1.jpg";
import image2 from "../assets/pmenos2.jpg";
import image3 from "../assets/pmenos3.jpg";
import image4 from "../assets/pmenos4.jpg";
import image5 from "../assets/pmenos5.jpg";
import image6 from "../assets/pmenos6.jpg";
import image8 from "../assets/pmenos8.jpg";
import image9 from "../assets/pmenos9.jpg";
import image10 from "../assets/pmenos10.jpg";

function Carrosel() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        width: "100%",
        marginTop: "5%",
      }}
      autoplay={{ delay: 700 }}
      speed={600}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      navigation={true}
    >
      <SwiperSlide>
        <Image h="50%" src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image4} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image5} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image6} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image8} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image9} />
      </SwiperSlide>
      <SwiperSlide>
        <Image h="50%" src={image10} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrosel;
