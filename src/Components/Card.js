import React from 'react';
import './Card.css';


const Card = () => {
    return(
        <div className="Card">
            <img className="placeholder" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="placeholder"/>
            <p className="name">Radovan Wilczek</p>
        </div>
    )
}

export default Card;