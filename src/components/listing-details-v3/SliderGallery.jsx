import Image from "next/image";
import Slider from "react-slick";

const SliderGallery = ({gallery}) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay:true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Array of image paths
  const imagePaths = gallery;

  return (
    <>
      <Slider {...settings} arrows={true}>
        {imagePaths.map((imagePath, index) => (
          <div className="item" key={index}>
            <Image
              width={515}
              height={435}
              className="img-fluid w-100 h-100 cover"
              src={imagePath.image}
              alt={imagePath.image}
              // src={`http://localhost:8000${imagePath.image}`}
              // alt={`http://localhost:8000${imagePath.image}`}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderGallery;
