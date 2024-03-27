import Image from "next/image";
import featureProContent from "../../../data/properties";
import Slider from "react-slick";
import Link from "next/link";

const FeatureProperties = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {featureProContent.slice(0, 5).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home7">
              <div className="thumb">
                <Image
                  width={300}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="properties identity"
                />

                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    
                      <li className="list-inline-item" >
                        <Link href={`/local-detail/${item.id}`}>Visitar</Link>
                      </li>
                    
                  </ul>
                  
                  <h4 className="posr color-white"> <Link className="color-white" href={`/local-detail/${item.id}`}>{item.title}</Link></h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeatureProperties;
