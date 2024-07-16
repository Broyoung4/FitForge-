import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import  Newsletter from '../components/Newsletter';

const Footer = () => (
  <section className="w-full relative z-1 flex justify-start items-center flex-col" id="contact">
    <Newsletter />

    <div className="w-full flex justify-between items-start mt-[5rem] px-6">
      <div className="flex-1 flex flex-col items-center justify-start m-2 text-center">
        <h1 className="font-poppins font-semibold text-md leading-xl mb-4 capitalize">Contact Us</h1>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">No 6, AdeBayo Axis, PMB 100</p>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">+1 234-567-1230</p>
        <p className="sm:text-xl text-md font-montserrat text-sea-green mb-4">+234 812-251-9445</p>
      </div>

      <div className="flex-1 m-2 text-center">
        <p className="sm:text-xl text-md font-montserrat text-sea-green mb-4">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="mt-[0.5rem] flex justify-center items-center svghover">
          <FiFacebook size={24} style={{margin: '0.5rem', cursor: 'pointer'}}/>
          <FiTwitter  size={24} style={{margin: '0.5rem', cursor: 'pointer'}}/>
          <FiInstagram  size={24} style={{margin: '0.5rem', cursor: 'pointer'}} />
        </div>
      </div>

      <div className="flex-1 m-2 text-center">
        <h1 className="font-poppins font-semibold text-md leading-xl mb-4 capitalize">Working Hours</h1>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">Monday-Friday:</p>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">08:00 am - 12:00 am</p>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">Saturday-Sunday:</p>
        <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="mt-6">
      <p className="sm:text-xl text-base font-montserrat text-sea-green mb-4">2024 Fit-Forge. All Rights reserved.</p>
    </div>

  </section>
);

export default Footer;
