import Link from "next/link";

const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      priceMount: 3,
      priceDiscount:2,
      priceyearly: 30,
      title: "Asequible",
      categories: "3",
      products: "15",
      reviews: "No",
      ads:"No",
      
    },
    {
      id: 2,
      priceMount: 10,
      priceDiscount:2,
      priceyearly: 100,
      title: "Recomendado",
      categories: "10",
      products: "60",
      reviews: "Si",
      ads:"Si",
      
    },
    {
      id: 3,
      priceMount: 30,
      priceDiscount:3,
      priceyearly: 270,
      title: "Premium",
      categories: "Sin limite",
      products: "Sin limite",
      reviews: "Si",
      ads:"Si",
      
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="pricing_table">
            <div className="pricing_header">
              <h3 className="price">{item.title}  </h3>
              <div className="price"><h4 className="price">${item.priceMount} <span className="text-dark">/mes</span> </h4></div>
              
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                <li><h5>Categorias: <span className="price">{item.categories}</span> </h5></li>
                <li><h5>Productos: <span className="price">{item.products}</span> </h5></li>
                <li><h5>Gestionar reseñas: <span className="price">{item.reviews}</span> </h5></li>
                <li><h5>Publicidad: <span className="price">{item.ads}</span> </h5></li>
              </ul>
            </div>
            <div className="pricing_header" >
              <h3>Ahorre : <span className="price text-decoration-line-through " style={{
              fontSize:20
            }}>${item.priceMount*item.priceDiscount}</span> </h3>
              <div className="price"><h4 className="price">${item.priceyearly} <span className="text-dark">/año</span> </h4></div>
            </div>
            <div className="pricing_footer">
              <Link className="btn pricing_btn btn-block" href="https://wa.me/+5354916751">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
