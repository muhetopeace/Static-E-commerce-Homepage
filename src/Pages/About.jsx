function About() {
  return (
    <div className="pt-16 container mx-auto py-10 bg-gray-50">
      <h1 className="text-4xl font-bold font-sans text-gray-800 mb-6">About Us</h1>
      <p className="text-lg font-medium text-gray-700 mb-6">MyStore is a leading e-commerce platform offering a wide range of products. We specialize in electronics, fashion, and accessories. Our mission is to provide quality products at affordable prices.</p>
      <h2 className="text-2xl font-semibold font-sans text-gray-700 mb-4">Why Choose Us</h2>
      <ul className="list-disc pl-6 text-gray-600 font-medium">
        <li>Affordable pricing</li>
        <li>Fast shipping</li>
        <li>Excellent customer service</li>
        <li>Wide selection</li>
      </ul>
    </div>
  );
}

export default About;