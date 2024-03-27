import Image from "next/image";
import Link from "next/link";

const Menu = ({products}) => {
  return (
    <>
      
        <ul className="col-12" >
        {products.map((product) => (
          <>
          <li >
            <br />
            <h4>{product.category_name}</h4>
              <div className="row" >
                {product.productCategory.map((item) => (
                  <>
                  {/* product card*/}
                  <Link href={`/product-detail/${item.id}`} className="col-md-4 col-lg-4 col-sm-6">
                      <div className="item">
                        <div className="feat_property home7 style2">
                          <div className="thumb">
                            <Image
                              width={364}
                              height={220}
                              className="img-whp w-100 h-100 cover"
                              src={item.image}
                              alt={item.image}
                              // src={`http://localhost:8000${item.image}`}
                              // alt={`http://localhost:8000${item.image}`}
                            />
                            
                          </div>
                          <div className="details">
                            <div className="tc_content">
                              <p className="text-thm">{item.category_name}</p>
                              <h4>
                                
                                {item.product_name}
                                
                              </h4>
                              {item.discount > 0 ? <>
                                <h4 className="text-thm">
                                $ {(item.cost-(item.cost*item.discount)/100).toFixed(2)} cup
                              </h4>
                              <p className="text-decoration-line-through">
                                $ {item.cost} cup
                              </p>
                              
                              </> : <h4 className="text-thm">
                                $ {item.cost} cup
                              </h4>}
                              

                              
                            </div>
                          </div>
                          
                    </div>
                    </div>
                    </Link>
                  {/* end product card*/}
                  </>
                  ))}
                  
                  
                
            </div>
        
          </li>
          </>
         ))}
          
        </ul>
      
      {/* End .col */}

      
      {/* End .col */}

      
    </>
  );
};

export default Menu;


