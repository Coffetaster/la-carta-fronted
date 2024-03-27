import Social from "../common/footer/Social";


const LocalPresentation = ({name,visit,address, fb, inst, wapp,tel,twitter}) => {
  return (
    <>
      <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="single_property_title ">
                <h2>{name}</h2>
                <h2>
                   <span className="flaticon-heart"></span> {visit} <small></small>
                </h2>
                <p className="flaticon-maps-and-flags">{address}</p>
                {fb ? <li className="list-inline-item">
                  <a href={fb} target="_blank" rel="noopener noreferrer">
                    <i  className='fa fa-facebook' style={{
                      fontSize:20
                      
                    }}></i>
                </a>
                </li>: undefined}
                {inst ? <li className="list-inline-item">
                  <a href={inst} target="_blank" rel="noopener noreferrer">
                    <i  className='fa fa-instagram' style={{
                      fontSize:20
                      
                    }}></i>
                </a>
                </li>: undefined}
                {wapp ? <li className="list-inline-item">
                  <a href={wapp} target="_blank" rel="noopener noreferrer">
                    <i  className='fa fa-whatsapp' style={{
                      fontSize:20
                      
                    }}></i>
                </a>
                </li>: undefined}
                {tel ? <li className="list-inline-item">
                  <a href={tel} target="_blank" rel="noopener noreferrer">
                    <i  className='fa fa-telegram' style={{
                      fontSize:20
                      
                    }}></i>
                </a>
                </li>: undefined}
                {twitter ? <li className="list-inline-item">
                  <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <i  className='fa fa-twitter' style={{
                      fontSize:20
                      
                    }}></i>
                </a>
                </li>: undefined}
                
                
              </div>
            </div>
           
          </div>
    </>
  );
};

export default LocalPresentation;
