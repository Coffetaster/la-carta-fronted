import axios from 'axios';
import React, { useState } from 'react';


const Popup = ({id,description,name}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [correct, setCorrect] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene la recarga de la página
   
    // Recoge los datos del formulario
    const winer_name = event.target.elements.winer_name.value;
    const winer_ci = event.target.elements.winer_ci.value;
    const winer_movil = event.target.elements.winer_movil.value;
   
    // Prepara el cuerpo de la petición
    const data = {
       winer_name,
       winer_ci,
       winer_movil,
       promo: id // Utiliza el id pasado por las props
    };
    try {
      // Envía la petición POST
      const response = await axios.post('http://localhost:8000/promo/winer/', data);
      
      setCorrect(true)
   } catch (error) {
      
      setErrorMessage(error.response.data.error )
   }
  };

  

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
          
        ></button>
      </div>
      {/* End .modal-header */}

      <div className="modal-body container pb20">
        
        {/* End .row */}

        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                
                <h3 className="text-thm">{name}</h3>
                <span>{description}</span>
              </div>
            </div>
            {/* End col */}

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form onSubmit={handleSubmit} action="#">
                  <div className="heading">
                    <h4>Introduzca sus datos</h4>
                  </div>
                  {/* End heading */}

                  
                  {/* End .row */}
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      name="winer_name"
                      placeholder="Nombre y apellido"
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}
                  {/* End .row */}
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="number"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      name="winer_movil"
                      placeholder="Celular"
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-telephone"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}
                  {/* End .row */}
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="number"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Carnet de identidad"
                      name="winer_ci"
                      required
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-passport" viewBox="0 0 16 16">
                          <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                          <path d="M3.232 1.776A1.5 1.5 0 0 0 2 3.252v10.95c0 .445.191.838.49 1.11.367.422.908.688 1.51.688h8a2 2 0 0 0 2-2V4a2 2 0 0 0-1-1.732v-.47A1.5 1.5 0 0 0 11.232.321l-8 1.454ZM4 3h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  
                  {/* End input-group */}

                  
                  {/* End remember me checkbox */}
                  {correct ? <button type="submit" className="btn btn-log w-100 btn-thm disabled">
                    Correcto
                  </button>
                  : <button type="submit" className="btn btn-log w-100 btn-thm ">
                  Regístrese
                </button>}
                  
                  
                  {errorMessage ? <div className="text-thm">{errorMessage}</div>:undefined}
                  {/* End submit button */}

                  
                </form>
              </div>
              {/* End .col .login_form */}
            </div>
          </div>
          {/* End .tab-pane */}

          
          {/* End .tab-pane */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
