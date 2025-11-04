import React from 'react';

interface WhyChooseItem {
  title: string;
  desc: string;
}

const AboutPage: React.FC = () => {
  const whyChooseUs: WhyChooseItem[] = [
    { title: 'Quality Products', desc: 'Only the best brands and latest technology' },
    { title: 'Fast Shipping', desc: 'Free delivery on orders over $50' },
    { title: '24/7 Support', desc: 'Our team is always here to help' },
    { title: 'Best Prices', desc: 'Competitive pricing and regular deals' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About TechStore</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <p className="text-lg text-slate-700 mb-4">
          TechStore is your premier destination for cutting-edge technology and premium accessories. 
          Founded in 2024, we are committed to bringing you the latest innovations at competitive prices.
        </p>
        <p className="text-lg text-slate-700">
          Our mission is to make technology accessible to everyone while providing exceptional 
          customer service and support.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;