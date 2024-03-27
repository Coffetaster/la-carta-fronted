import Link from "next/link";
import Image from "next/image";
import comfortPlace from "../../data/comfortPlace";
import image from "../../../public/assets/images/categoryLocals/bar.png";
const ComfortPlace = () => {
  return (
    
    <>
      {/* {comfortPlace.map((item) => (
        <div className="col-sm-6 col-lg-4" key={item.id}>
          
          <Link
            href={`/local/${item.name}`}
            className="icon_hvr_img_box image-1 d-block"
            style={{
              backgroundImage: `url(${item.bgImg})`,
            }}
          >
            <div className="overlay">
              <div className="icon">  
                <span className={item.icon}></span>
              </div>
              <div className="details">
                <h4>{item.name}</h4>
                
              </div>
            </div>
          </Link>
        </div>
      ))} */}
      <div className="col-sm-6 col-lg-4">
          
          <Link
            href={`/local/Cafeteria`}
            className="icon_hvr_img_box image-1 d-block"
          >
            <div className="overlay">
              <div className="icon">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coffee" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5a5f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
                <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
                <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
              </svg>
              </div>
              <div className="details">
                <h4>Cafetería</h4>
              </div>
            </div>
          </Link>
        </div>
      <div className="col-sm-6 col-lg-4">
          
          <Link
            href={`/local/Pizzeria`}
            className="icon_hvr_img_box image-1 d-block"
          >
            <div className="overlay">
              <div className="icon">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pizza" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5a5f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" />
                <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
                <path d="M13 11.01v-.01" />
                <path d="M11 14v-.01" />
              </svg>
              </div>
              <div className="details">
                <h4>Pizzería</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4">
          
          <Link
            href={`/local/Restaurante`}
            className="icon_hvr_img_box image-1 d-block"
          >
            <div className="overlay">
              <div className="icon">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chef-hat" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5a5f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
                <path d="M6.161 17.009l11.839 -.009" />
              </svg>
              </div>
              <div className="details">
                <h4>Restaurante</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4">
          
          <Link
            href={`/local/Heladeria`}
            className="icon_hvr_img_box image-1 d-block"
          >
            <div className="overlay">
              <div className="icon">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ice-cream-2" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5a5f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17.657 11a6 6 0 1 0 -11.315 0" />
                <path d="M6.342 11l5.658 11l5.657 -11z" />
              </svg>
              </div>
              <div className="details">
                <h4>Heladería</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4">
          
          <Link
            href={`/local/Bar`}
            className="icon_hvr_img_box image-1 d-block"
          >
            <div className="overlay">
              <div className="icon">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-beer" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5a5f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 21h6a1 1 0 0 0 1 -1v-3.625c0 -1.397 .29 -2.775 .845 -4.025l.31 -.7c.556 -1.25 .845 -2.253 .845 -3.65v-4a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v4c0 1.397 .29 2.4 .845 3.65l.31 .7a9.931 9.931 0 0 1 .845 4.025v3.625a1 1 0 0 0 1 1z" />
                <path d="M6 8h12" />
              </svg>
              </div>
              <div className="details">
                <h4>Bar</h4>
              </div>
            </div>
          </Link>
        </div>
    </>
  );
};

export default ComfortPlace;
