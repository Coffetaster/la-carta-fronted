import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import image2 from "../../../public/assets/images/presentation/coctel.png"
import image from "../../../public/assets/images/presentation/cafe.png"

const HeroSlider = ({offer}) => {
  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  

  // {singleItem.image}

  const sliderContent = [
    {
      id: 1,
      
      offer_name: "Conozca y disfrute",
      offer_description: "Disfrute con sus amistades y amigos de un buen café",
      image: image,
    },
    {
      id: 2,
      offer_name: "Las fiestas y eventos están a su alcance",
      offer_description: "Salga y disfrute",
      image: image2,
    }
  ];

  return (
    <Slider {...settings} arrows={false}>
      {offer.length > 0 ? offer.map((singleItem) => (
        
        <div className="bs_carousel_bg  vh-100"key={offer.id}>
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-lg-8">
                    <div className="main_title">{singleItem.offer_name}</div>
                    <p className="parag">{singleItem.offer_description}</p>
                    <Link href={`/local-detail/${singleItem.local}`} className="btn-booking mt-4">
                      Visitar
                    </Link>
                  </div>

                  <div className="col-md-5 center col-lg-4" style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    }}>
                          <Image
                        width={279}
                        height={329}
                        className="img-fluid w-70 h-70 cover"
                        src={singleItem.image_first}
                        alt={singleItem.image_first}
                        // src={`http://localhost:8000${singleItem.image_first}`}
                        // alt={`http://localhost:8000${singleItem.image_first}`}
                      />
                  </div>
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
        
      )): 
      sliderContent.map((singleItem) =>(
        
        <div className="bs_carousel_bg  vh-100"key={offer.id}>
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-lg-8">
                    <div className="main_title">{singleItem.offer_name}</div>
                    <p className="parag">{singleItem.offer_description}</p>
                    
                  </div>

                  <div className="col-md-5 center col-lg-4" style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    }}>
                          <Image
                        width={279}
                        height={329}
                        className="img-fluid w-70 h-70 cover"
                        src={singleItem.image}
                        alt={singleItem.image}
                      />
                  </div>
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
        
      ))}
   

      
    </Slider>
  );
};

export default HeroSlider;
