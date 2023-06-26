import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/enginerepair.jpg';
import img2 from '../assets/brakerepair.jpg';
import img3 from '../assets/oilchange.jpg';

const Services = () => {
    const services = [
        {
          title: 'Réparation Moteur',
          description: 'Diagnostic et résolution des problèmes liés au moteur pour une performance optimale.',
          image: img1, // Replace with your own image URL or path
        },
        {
          title: 'Réparation Freins',
          description: 'Assurer que les freins de votre véhicule soient en parfait état pour une conduite en toute sécurité.',
          image: img2, // Replace with your own image URL or path
        },
        {
          title: 'Changement d\'Huile',
          description: 'Effectuer des changements d\'huile réguliers pour maintenir le moteur en bon état de fonctionnement.',
          image: img3, // Replace with your own image URL or path
        },
        // Add more services here
      ];
    
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots={false}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {services.map((service, index) => (
          <div key={index} className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
  );
};

export default Services;
