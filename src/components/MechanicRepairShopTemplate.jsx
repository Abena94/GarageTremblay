import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Amenities from './Ameneties';
import Contact from './Contact';


 

const MechanicRepairShopTemplate = () => { 
  return (
    <div className="bg-gray-100">
    {/* Navbar */}
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Mechanic Repair Shop</div>
          {/* Add your navigation links here */}
        </div>
      </div>
    </nav>

    {/* Hero Section */}
   <Hero />

    {/* Services Section */}
    
      <Services />
    

     {/* Ameneties Section */}
     
      <Amenities />
   

    {/* Contact Section */}
    
     <Contact />
   

    {/* Footer */}
    <footer className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 text-center text-white">
        &copy; {new Date().getFullYear()} Mechanic Repair Shop. All rights reserved.
      </div>
    </footer>
  </div>
    

  );
};

export default MechanicRepairShopTemplate;