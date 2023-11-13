

import bg2 from '../assets/slider1.png'
import bg3 from '../assets/pic4.png'
import pic3 from '../assets/pic3.png'
import Whoare from '../components/whoare';
import Whyare from '../components/whyare';
const Landing = () => {

  return (
   <div className='bg-white'>
      <section className='flex'
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'fixed',
          height: '60vh', // Adjust the height as needed
        }}
      >
        <div className='text-white m-auto sm:text-5xl text-2xl text-center sm:px-24 lg:px-72 px-2 '>
          Professionally company premium rather than magnetic company 
        </div>
      </section>
      <div className='md:h-[80vh]  bg-white md:flex md:py-48 p-8 lg:px-36 md:px-24'>
          <img src={pic3} alt='pic3' className='md:w-1/2 h-1/2 md:h-full w-full object-cover'></img>
          <div className='text-slate-700 md:w-1/2 w-full p-8 space-y-8' style={{ boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)' }}>
            <h1 className='text-2xl font-semibold text-center'>Discover Our Business Expertise</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
      </div>
      <section className='flex'
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'fixed',
          height: '60vh', // Adjust the height as needed
        }}
      >
        <div className='text-white m-auto sm:text-6xl text-3xl text-center font-bold sm:px-24 lg:px-80 px-2 '>
          We Are Awards Winning ITSolution Company
        </div>
      </section>
      <Whoare />
      <Whyare />
   </div>
  );
};

export default Landing;
