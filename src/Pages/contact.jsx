import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Feedback submitted! Check console for details.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-16 container mx-auto py-10 bg-gray-50">
      <h1 className="text-4xl font-bold font-sans text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg font-medium text-gray-700 mb-4">Email: muhetobpeace@gmail.com</p>
      <p className="text-lg font-medium text-gray-700 mb-4">Phone: (+250) 7902-71423</p>
      <p className="text-lg font-medium text-gray-700 mb-6">Address: 123 Store St, City, State 12345</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:border-blue-400"
        />
        <button type="submit" className="w-full bg-gray-400 text-white px-4 py-3 rounded-md font-sans font-semibold hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;