import style from "../../../public/assets/styles/bot.module.css"
import axios from 'axios';
import React, { useState } from 'react';

const ChatContent = ({booking,onClick}) => {
  const [selectedBookingId, setSelectedBookingId] = useState('');
  const [error, setError] = useState(false);
  const [create, setCreate] = useState(false);
  
  const handleSubmit = async (event,selectedBookingId) => {
    
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const bookingData = {
       name: data.name,
       cant: parseInt(data.cant, 10),
       ci: data.ci,
       movil: data.movil,
       booking_active: false, 
       booking_date: data.date,
       booking_time: data.time,
       booking:  selectedBookingId, 
    };
   
    try {
       
       const response = await axios.post('http://localhost:8000/booking/create/', bookingData, {
         headers: {
           'Content-Type': 'application/json',
         },
       });
       setCreate(true)
       setTimeout(() => {
        onClick()
      }, 1000);

       
    } catch (error) {
      setError(true)
       
    }
   };


  return (
    <>
      <div className={style.chatContainer} >
        <div className={style.chatClose}>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick}  width='40' height='40'  id="mdi-robot" fill="#ff5a5f" viewBox="0 0 24 24"><path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" /></svg>
          <button className="btn btn-thm  btn-close" style={{width:30,height:30}} onClick={onClick}></button>
        </div>
        <div className={style.chat}>
          <h4 className="text-thm">Reservas disponibles</h4>
          <div className="accordion w-100" id="accordionExample">
          {booking.map((item, index) => (
            <>
          <div className="card mb-2" key={index}>
            <div id={`heading${index}`}>
              <button
                className="btn btn-link accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.name}
              </button>
            </div>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                <p>Precio: {item.cost} cup</p>
                <p>Máximo de personas: {item.cant}</p>

                
              </div>
            </div>
          </div>
          

        
          </>
          ))}
          <h4 className="text-thm">Introduzca los datos</h4>
          <form onSubmit={(event) => handleSubmit(event,selectedBookingId)} >
                  <div className="input-group mb-2 mr-sm-2">
                    <label  className="text-thm col-12" htmlFor="bookingname">Nombre del solicitante</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bookingname"
                        name="name"
                        placeholder="Nombre y apellido"
                        required
                      />
                      </div>
                      <div className="input-group mb-2 mr-sm-2">
                      <label className="text-thm col-12" htmlFor="bookingcant">Cantidad de personas</label>
                      <input
                        type="number"
                        className="form-control"
                        id="bookingcant"
                        name="cant"
                        placeholder="Cantidad de personas"
                        required
                      />
                      </div>
                      <div className="input-group mb-2 mr-sm-2">
                      <label className="text-thm col-12" htmlFor="bookingci">Carnet de identidad</label>
                      <input
                        type="number"
                        className="form-control"
                        id="bookingci"
                        name="ci"
                        placeholder="Carnet de identidad"
                        required
                      />

                      </div>
                      <div className="input-group mb-2 mr-sm-2">
                      <label className="text-thm col-12" htmlFor="bookingmovil">Movil</label>
                      <input
                        type="number"
                        className="form-control"
                        id="bookingmovil"
                        name="movil"
                        placeholder="Movil"
                        required

                      />
                      <div className="input-group mb-2 mr-sm-2">
                      <label className="text-thm col-12" htmlFor="bookingdate">Fecha</label>
                      <input
                        type="date"
                        className="form-control"
                        id="bookingdate"
                        name="date"
                        placeholder="Fecha"
                        required
                      />
                      </div>
                      <div className="input-group mb-2 mr-sm-2">
                      <label className="text-thm col-12" htmlFor="bookingtime">Hora</label>
                      <input
                        type="time"
                        className="form-control"
                        id="bookingtime"
                        name="time"
                        placeholder="hora"
                        required
                      />
                      </div>
                      <div className="input-group mb-2 mr-sm-2">
                        
                          <select
                            className="form-control"
                            value={selectedBookingId}
                            onChange={(e) => setSelectedBookingId(e.target.value)}
                            required
                            placeholder="Reserva"
                          >
                            <option value="">Selecciona la reserva</option>
                            {booking.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                      </div>
                      {error ? <h5 className="text-thm">Compruebe los datos</h5>:undefined}
                    <div className="row">
                      {create ? <button type="submit" className="btn btn-log col-12 w-100 m-2 btn-thm disabled">
                      Correcto
                    </button> :<button type="submit" className="btn btn-log col-12 w-100 m-2 btn-thm ">
                      Reservar
                    </button>}
                      

                    </div>
                    
                    
                    
                    </div>
                    
                  
                  
                </form>
        </div>
          </div>
          
      </div>
      
    </>
  );
};

export default ChatContent;
