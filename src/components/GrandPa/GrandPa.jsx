import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grand.css'

const GrandPa = () => {

    const ring = 'Diamond'

    return (
        <div className='grandpa'>
            <h2>GrandPa</h2>
            <div className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
    );
};

export default GrandPa;