import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import heroImage from '../assets/myImage.jpg'
export default function Hero() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-16 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 className="text-gray-800 text-4xl md:text-6xl font-bold mb-4">
          Services de Réparation Automobile de Qualité
          </h1>
          <p className="text-gray-700 text-lg mb-8">
          Nous offrons des services de réparation et d'entretien de haute qualité pour tous les types de véhicules.
          </p>
          <ScrollLink
              to="contact-section"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded">
              Contactez-nous
              </button>
            </ScrollLink>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={heroImage} 
            alt="Mechanic Repair Shop"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
