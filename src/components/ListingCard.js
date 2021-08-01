import React from 'react';

const ListingCard = props => {
    const cardStyle = {
        cursor: 'pointer',
        width: '10rem',
        height: 'auto',
        margin: '5px',
    };

    const nameStyle = {
        color: 'black',
        textShadow: '1px 1px 1px grey',
        position: '',
        textAlign: 'center',
        borderBottom: '2px solid grey',
        margin: '0px auto'
    }
    
    const imageStyle = {
        width: '100%',
        margin: '0px auto',
        padding: '0px auto',
        boxShadow: '2px 2px 4px black'
    };

    return ( 
        <div style={cardStyle} onClick={props.handleClick}>
            <p style={nameStyle}> {props.listing.name} </p>
            <img style={imageStyle} src={props.listing.image}/>
        </div>
    );
}

export default ListingCard;