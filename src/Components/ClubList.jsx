/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import ric_img from '../assets/ric_img.jpg'
import programming_img from '../assets/programming.jpg'
import react from '../assets/react.jpg'
import photo from '../assets/photo.jpg'
import fec_club from '../assets/fec_club.jpg'
import debate from '../assets/debate.jpg'
const ClubList = () => {

  const clubsList = [
    { id: 1, name: 'Research & Innovation Center', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: ric_img },
    { id: 2, name: 'Programming Club', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: programming_img },
    { id: 3,name: 'Software Club', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: react },
    { id: 4, name: 'Photgraphic Club', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: photo },
    { id: 5, name: 'Debate Club', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: debate },
    { id: 6, name: 'FEC Club of Professionals', content:'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambra Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsam omnis sapiente, quisquam voluptate at alias perferendis minima dicta! Perferendis neque maxime sed incidunt natus dolorum dolorem sunt, eum earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis exercitationem ducimus. Mollitia assumenda aliquid quibusdam dolor nisi? Ut exercitationem nostrum perferendis quos dolorem dolores tempore reiciendis iure voluptas accusantium?.', image: fec_club },

  ];
  return (
    <section className="text-gray-600 body-font">
      
    {
      clubsList.map((club,i) => (
        !(i % 2 == 1)?
        <div key={i} className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mt-10 mb-4 font-medium text-gray-900">{club.name}
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">{club.content}</p>
      <div className="flex justify-center">
        <Link to={`/club/${club.id}`} ><button className="inline-flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Details</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="ric_img" src={club.image} />
    </div>
  </div>
  :
  <div key={i} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={club.image}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{club.name}
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">{club.content}</p>
      <div className="flex justify-center">
      <Link to={`/club/${club.id}`} ><button className="inline-flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Details</button></Link>
      </div>
    </div>
  </div> 
      ))
    }
   

</section>
  )
}

export default ClubList