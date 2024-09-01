import React from 'react';
// import { useState } from 'react';
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';

// let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = (tag) => {

    const { gif, loading, fetchData } = useGifs(tag);

    return (
        <div className=' w-1/2 bg-green-900 flex flex-col items-center rounded-lg border border-block gap-y-5 mt-[10px]'>

            <h2 className="underline font-bold">A RANDOM GIFS</h2>
            {
                loading ? (<Spinner />) : (<img className='mx-auto'
                    src={gif} width="400" alt="Random Gif" />)
            }
            <button onClick={() => fetchData(tag)}
                className="w-10/12 bg-yellow-200 text-lg  py-2  rounded-lg mb-[20px]  ">
                GENERATE
            </button>

        </div>
    )
}

export default Random;