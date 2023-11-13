import IconLocation from './Icons/IconLocation';
import IconMail from './Icons/IconMail';
import IconTelephoneFill from './Icons/IconTelephoneFill';
import mylogo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className="bg-[#426E86] md:px-32font-poppins text-white p-16">
      <div className="grid md:grid-cols-4 grid-cols-1 xs:grid-cols-2 gap-8">
        <div className='flex my-auto'>
          <img src={mylogo} alt="nayme" className="w-38" />
          <h1 className='my-auto font-poppins font-medium text-sm'>Company <br/>name</h1>
        </div>
        <div className='space-y-4'>
          <h1 className='font-bold text-lg'>Our Company History</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        </div>
        <div className='space-y-4'>
          <h1 className='font-bold text-lg'>Company</h1>
          <div>Home</div>
          <div>About</div>
          <div>Pricing</div>
        </div>
        <div className='space-y-4'>
          <h1 className='font-bold text-lg'>Contact us</h1>
          <div className='flex'><IconTelephoneFill className='mr-2 my-auto' />+123 4456 7890</div>
          <div className='flex'><IconMail className='mr-2 my-auto' />example@gmail.com</div>
          <div className='flex'><IconLocation className='mr-2 my-auto' />1250-96, Lisbon, Av. Da Liberdade 190</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
