import React from 'react';
import heroimg from '../assets/photo.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full text-center md:text-left'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-grey-500 px-4 max-w-md'>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
              Portfolio <span className='group-hover:rotate-90'><MdOutlineKeyboardArrowRight size={30} className='ml-1' /></span>
            </Link>
          </div>
        </div>
        <div className='flex-shrink-0'>
          <img src={heroimg} alt="myprofileimg" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
}

export default Home;
