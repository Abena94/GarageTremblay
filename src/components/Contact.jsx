import React,{useState} from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      };
    
      const validateEmail = (email) => {
        // Email validation logic (e.g., regex pattern)
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
      };
    
      const validatePhoneNumber = (phoneNumber) => {
        // Canadian phone number validation logic (e.g., regex pattern)
        const phoneNumberPattern = /^(\+?1\s?-?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
        return phoneNumberPattern.test(phoneNumber);
      };
  return (
    <div className="bg-gray-100 py-16" id="contact-section">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
      <div className="flex justify-center items-center">
        <form className="w-full sm:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="name">Nom</label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="email">Email</label>
            <input
              className={`w-full px-4 py-2 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 focus:outline-none ${
                formData.email && !validateEmail(formData.email) ? 'border-red-500' : ''
              }`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formData.email && !validateEmail(formData.email) && (
              <p className="text-red-500 text-sm mt-1">Veuillez entrer une adresse email valide.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="phoneNumber">Numéro de téléphone</label>
            <input
              className={`w-full px-4 py-2 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 focus:outline-none ${
                formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) ? 'border-red-500' : ''
              }`}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) && (
              <p className="text-red-500 text-sm mt-1">Veuillez entrer un numéro de téléphone canadien valide.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 focus:outline-none"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded"
              type="submit"
            >
              Envoyer le Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
