import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = ({search,filtros,locals}) => {
  
  // const filteredLocals = filtros === 'Todos' ? locals.slice(0, 12) : locals.filter(local => local.type === filtros).slice(0, 12);
  const filteredLocals = filtros === 'Todos' 
  ? locals.filter(local => local.local_name.toLowerCase().includes(search.toLowerCase())).slice(0, 12)
  : locals.filter(local => local.type === filtros && local.local_name.toLowerCase().includes(search.toLowerCase())).slice(0, 12);

  return (
    <>
      {filteredLocals.map((local, index) => (
        <>
        <div className="col-md-4 col-lg-3 col-sm-6" key={local.id}>
            <div className="item">
              <div className="feat_property home7 style2">
                <div className="thumb">
                  <Image
                    width={364}
                    height={220}
                    className="img-whp w-100 h-100 cover"
                    src={local.image}
                    alt={local.image}
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
