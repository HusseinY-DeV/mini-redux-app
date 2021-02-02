import React from 'react';
import Wrapper from './Wrapper';


const Sibling = ({status,changeStatus}) => {
    return ( 
        <div>
            <p>Status : {status ? "True" : 'False'}</p>
            <p
            onClick={changeStatus}
            >Change Status</p>
        </div>

     );
}
 
export default Wrapper(Sibling);