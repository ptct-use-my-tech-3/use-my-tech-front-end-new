import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router';

const ItemView = props => {
    const [listing, setListing] = useState();

    let {id} = useParams();

    useEffect(() => {
        // GET request for our current item
        

        setListing(null);
    }, [id]);

    return ( 
        <div>
            

        </div>);
}

export default ItemView;
