import React from 'react'
import './Card.css';

const Card = ({title,names,description,images}) => {
    return (
        <div >
            <div class="card h-200" style={{ width: '20rem'}}>
                <img class="card-img-top" src={images} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#">{names} <i class="fal fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Card;
