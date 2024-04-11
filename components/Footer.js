// components/Header.js
import React from 'react';

const Footer = () => {
  return (
   <div className='footer'>
     <h5>For more information contact with our service consultants</h5>
    <div className='alf'>
    <div className='contacts'>
    <p className='flex'><img src="/location.png" alt="CRDB" className="mb-2"/>Magomeni Kanisani</p>
    <p className='flex'><img src="/call.png" alt="CRDB" className="mb-2"/>+255 764562577</p>
    <p className='flex'><img src="/email.png" alt="CRDB" className="mb-2"/>jimulenjohans@gmail.com</p>
    <p className='flex'><img src="/time.png" alt="CRDB" className="mb-2"/></p>
    </div>
    <div className="items-center" >
        <h5>Payment Methods</h5>
        <div className='pay'>
        <img src="/CRDB.png" alt="CRDB" className="mr-4"/>
        <img src="/mpesa.png" alt="CRDB" className="mr-4"/>
        <img src="/tigopesa.png" alt="CRDB" />
</div>
    </div>
    <div className='items-center'>
        <h5>Social Media</h5> 
        <div className='socmed'>
           <img src="/insta.png" alt="CRDB" className="mr-2"/>
        <img src="/whatsapp.png" alt="CRDB" className="mr-2"/>
        <img src="/twitter.png" alt="CRDB" className="mr-2"/> 
           <img src="/facebook.png" alt="CRDB" className="mr-2"/>
        <img src="/email.png" alt="CRDB"  className="mr-2"/>
    </div>
    </div>
    </div>
   </div>
  );
};

export default Footer;
