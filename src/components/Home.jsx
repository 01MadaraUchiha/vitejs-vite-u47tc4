import React from 'react';
import ProductivityImage from '../assets/productivity.jpg'; // Replace with actual path to your image

function Home() {
  return (
    <div className="bg-white text-black">
      <section className="container mx-auto p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img src={ProductivityImage} alt="Productivity" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">MyWebsite</h1>
          <p className="text-xl mb-4">"Your tagline here"</p>
          <p className="text-lg">
            Welcome to MyWebsite, where we help you increase your productivity.
            Our tools and resources are designed to help you manage your time,
            organize your tasks, and achieve your goals efficiently.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
