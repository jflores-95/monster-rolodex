import React from 'react';
import "./card-list.styles.css";
import CardComponent from '../card/card.component';

const CardListComponent = (props) => {
    return (
        <div className='card-list'>
           {props.monsters.map((monster) => (
            <CardComponent monster={monster}/>
          ))}
        </div>
    );
}

export default CardListComponent;
