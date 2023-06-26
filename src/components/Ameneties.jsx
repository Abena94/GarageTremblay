import React from 'react';
import * as Unicons from '@iconscout/react-unicons';

const Amenities = () => {
  const amenities = [
    { name: 'Wi-Fi Gratuit', logo: <Unicons.UilWifi /> },
    { name: 'Salon de Café', logo: <Unicons.UilCoffee /> },
    { name: 'Stationnement disponible', logo: <Unicons.UilParkingSquare /> },
    // Add more amenities here
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Nos Commodités</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
              {amenity.logo}
              <p className="text-gray-700 text-center">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;