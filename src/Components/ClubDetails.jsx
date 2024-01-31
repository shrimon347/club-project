/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import records from '../data/data.json';
import Error from './Error';


const ClubDetails = () => {
    const {id} = useParams();
    const [data, setdata] = useState(null);

    useEffect(()=> {
        let clubs = records.find((club) => club.id === parseInt(id));

        if (clubs) {
            setdata(clubs);
        }
    },[])
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    
    {
        data ? <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link to='/club' ><button className="inline-flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button></Link>
            {
                data.president.map((detail, index) => (
                    
                    <div key={index} className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={detail.image} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{detail.name}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{detail.tag}</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                ))
            }
         
        </div>
        </div> : <Error />
    }
     

  </div>
</section>
  )
}

export default ClubDetails