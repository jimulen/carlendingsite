import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <h5>For more information contact with our service consultants</h5>
      <div className='flex flex-col md:flex-row'>
        {/* Left section */}
        <div className='mb-4 md:mb-0 md:mr-8'>
          <p className='flex items-center'><img src="/location.png" alt="Location" className="mr-2"/>Magomeni Kanisani</p>
          <p className='flex items-center'><img src="/call.png" alt="Call" className="mr-2"/>+255 764562577</p>
          <p className='flex items-center'><img src="/email.png" alt="Email" className="mr-2"/>jimmyjoe@gmail.com</p>
        </div>
        {/* Middle section */}
        <div className='mb-4 md:mb-0'>
          <h5 className='mb-2'>Payment Methods</h5>
          <div className='flex'>
            <img src="/CRDB.png" alt="CRDB" className="mr-4"/>
            <img src="/mpesa.png" alt="M-Pesa" className="mr-4"/>
            <img src="/tigopesa.png" alt="Tigo Pesa" />
          </div>
        </div>
        {/* Right section */}
        <div>
          <h5 className='mb-2'>Social Media</h5> 
          <div className='flex'>
            <img src="/insta.png" alt="Instagram" className="mr-2"/>
            <img src="/whatsapp.png" alt="WhatsApp" className="mr-2"/>
            <img src="/twitter.png" alt="Twitter" className="mr-2"/> 
            <img src="/facebook.png" alt="Facebook" className="mr-2"/>
            <img src="/email.png" alt="Email" className="mr-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
