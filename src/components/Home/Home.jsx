import Kegiatan from './Kegiatan'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from '../../Asset/hero1.jpg';
import bannerImage2 from '../../Asset/hhero2.png';
import bannerImage3 from '../../Asset/hero3.jpg';
import '../../index.css'
import Tentang from './Tentang'
import Contack from './Contact'
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
    
  };

  return (
    <section className='slide overflow-hidden home' >
    <Slider {...settings}>
      <div className="relative">
        <img src={bannerImage1} alt="Banner 1"className='w-full'/>
        <div className="absolute inset-0 flex top-48 smartphone:top-16">
          <div className="text-white text-left">
            <h2 className="text-[64px] font-bold mb-2 smartphone:text-[24px] px-[100px]">PT. SONOKELING</h2>
            <p className="text-[32px] font-light smartphone:text-[16px] px-[100px]">Natural Resource Management, <br /> 
GIS/RS, Survey and Mapping Consultant</p>
            <button className="ml-[100px] mt-4 bg-[#47B5FF] hover:bg-black text-white hover:text-white py-2 px-4 rounded">
            <Link to="/shop">Download Company Profile</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img src={bannerImage2} alt="Banner 2" className='w-full' />
      </div>
      <div className="relative">
        <img src={bannerImage3} alt="Banner 3" className='w-full' />
      </div>
    </Slider>
<section>
  <Kegiatan />
  <Tentang />
  <Contack />
  
</section>
    </section>
  );
};

export default Home;
