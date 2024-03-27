import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const PropertyVideo = () => {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState('oqNZOOWF8qM')

  const handleTabClickLocal = () => {
    setVideo('oqNZOOWF8qM'); 
    setOpen(true);
 };
 
  const handleTabClickImages = () => {
    setVideo('nKPbfIU442g'); 
    setOpen(true);
 };

  const handleTabClickRed = () => {
    setVideo('Z-11MBl5zkA'); 
    setOpen(true);
  };


  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={video}
        onClose={() => setOpen(false)}
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#video-local"
            role="tab"
          >
            Gestionar local
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#video-imagenes"
            role="tab"
          >
            Servicios de imagenes
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#video-redes"
            role="tab"
          >
            Servicios de redes
          </a>
        </li>
      </ul>
      {/* End .nav-tabs */}

      <div className="tab-content" id="myTabContent2">
      <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199 "
          id="video-local"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={handleTabClickLocal}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="video-imagenes"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={handleTabClickImages}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="video-redes"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={handleTabClickRed}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .tab-conten */}
    </>
  );
};

export default PropertyVideo;
