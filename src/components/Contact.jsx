import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions or need support, feel free to reach out to us. We are here to help!
      </p>
      <p className="text-lg">
        <strong>Email:</strong> support@mywebsite.com
      </p>
      <p className="text-lg">
        <strong>Phone:</strong> +123 456 7890
      </p>
      <p className="text-lg">
        <strong>Address:</strong>
        <br />
        123 Productivity Lane
        <br />
        Success City, SC 12345
      </p>
    </div>
  );
}

export default Contact;
