import React from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';


const Tag = () => {

    const [tag, setTag] = useState('car');

    const { gif, loading, fetchData } = useGifs(tag);

    return (
        <div className=' w-1/2 flex flex-col items-center bg-blue-500 rounded-lg border border-block gap-y-5 mt-[15px]'>

            <h2 className="underline mt-[15px]   uppercase font-bold">RANDOM {tag} GIF</h2>
            {
                loading ? (<Spinner />) : (<img className='mx-auto'
                    src={gif} width="450" alt="Random Gif" />)
            }
            <input
                onChange={(event) => setTag(event.target.value)}
                value={tag}
                className='bg-green-200 w-10/12 text-lg py-2 mb-[3px] text-center  mx-16 rounded-md  ' />

            <button onClick={() => fetchData(tag)}
                className="bg-yellow-200 w-10/12 text-lg py-2  rounded-lg  mb-[20px] ">GENERATE</button>

        </div>
    )
}

export default Tag;