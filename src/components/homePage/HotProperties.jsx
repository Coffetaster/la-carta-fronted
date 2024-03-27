import Link from "next/link";
import properties from "../../data/properties";
import Image from "next/image";

const HotProperties = ({favorites}) => {

  return (
    <>
      {favorites.map((singleItem) => (
        
        <>
        <div className="col-md-6 col-lg-4" key={singleItem.id}>
          <div className="item">
            <div className="feat_property home7 style2">
              <div className="thumb">
                <Image
                  width={364}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={singleItem.local.image}
                  alt={singleItem.local.image}
                  
                  // src={`http://localhost:8000${singleItem.local.image}`}
                  // alt={`http://localhost:8000${singleItem.local.image}`}
                />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    
                      <li className="list-inline-item">
                        <Link href={`/local-detail/${singleItem.local.id}`}>Visitar</Link>
                      </li>
                    
                  </ul>
                  
                  <Link className="fp_price" href={`/local-detail/${singleItem.local.id}`}>
                  <small>Le gusta a : </small>{singleItem.local.visit}
                    
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{singleItem.local.type}</p>
                  <h4>
                    <Link href={`/local-detail/${singleItem.local.id}`}>
                      {singleItem.local.local_name}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {singleItem.local.address} 
                  </p>

                  {/* <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        ))}
        
      
      
    </>
  );
};

export default HotProperties;
