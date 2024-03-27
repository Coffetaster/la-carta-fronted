import Link from "next/link";
import Image from "next/image";

const FindProperties = ({name,localitation,locals}) => {
  console.log(name)
    const filteredLocals = locals.filter((local) => {
      // Si se proporciona una localización, filtrar por ella
      if (localitation && !local.address.toLowerCase().includes(localitation.toLowerCase())) {
        return false;
      }
      // Si se proporciona un nombre, filtrar por el nombre del local
      if (name && !local.local_name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      // Si no se proporciona ninguna localización o nombre, o si el local cumple con ambas condiciones, incluirlo
      return true;
  });
  return (
    <>
      {filteredLocals.map((local) => (
        <>
      <div className="col-md-4 col-lg-4 col-sm-6" key={local.id}>
          <div className="item">
            <div className="feat_property home7 style2">
              <div className="thumb">
                <Image
                  width={364}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={item.image}
                  alt={item.image}
                  // src={`http://localhost:8000${local.image}`}
                  // alt={`http://localhost:8000${local.image}`}
                />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    
                      <li className="list-inline-item">
                        <Link href={`/local-detail/${local.id}`}>Visitar</Link>
                      </li>
                    
                  </ul>
                  <Link className="fp_price" href={`/local-detail/${local.id}`}>
                    <small>Visto por : {local.visit}</small>
                    
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{local.type}</p>
                  <h4>
                    <Link href={`/local-detail/${local.id}`}>
                      {local.local_name}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {local.address}
                  </p>
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

export default FindProperties;
