import React, { useState } from 'react';
import axios from 'axios';

const ReviewBox = ({id,asequible}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      user_name: name,
      description: comment,
      active: asequible ? true : false ,
      local: id,
    };

    try {
      const response = await axios.post('http://localhost:8000/locals/reviews/', reviewData);
      setCorrect(true)
      setName('')
      setComment('')
      setError(false)
      setTimeout(() => {
        setCorrect(false);
      }, 2000);
    } catch (error) {
      setCorrect(false)
      setError(true)
      
    }
 };


  return (
    <form className="comments_form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* End .form-group */}

      <div className="form-group">
        <textarea
          className="form-control"
          rows="6"
          placeholder="Tu comentario"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      {/* End .form-group */}

      {correct ? <button type="submit" className="btn btn-thm disabled">
        Enviado
      </button> : <button type="submit" className="btn btn-thm">
        Enviar
      </button> }
      
      {error ? <div className="text-thm">Error al enviar los datos</div>:undefined}
      {/* End .btn */}
    </form>
  );
};

export default ReviewBox;
