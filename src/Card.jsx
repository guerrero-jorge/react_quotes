

import React from 'react';

const Card = ({quote,author,handleCita,color}) => {
    return (

        <div className='card'>
           <div className='parrafoIcono' >
            <i className="fas fa-quote-left" style={{color}}></i>
            <p className='cita' style={{color}}>{quote}</p>
           </div>
           
            <p className='autor' style={{color}}>{author}</p>
            <button onClick={handleCita} style={{background:color}}><i className="fas fa-angle-right" ></i></button>

        </div>
    );
};

export default Card;


