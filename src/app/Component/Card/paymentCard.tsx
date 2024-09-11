import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode; // For additional actions like buttons or links
}

const paymentCard: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {children && (
        <div className="px-6 py-4">
          {/* Any children like buttons or links passed as children */}
          {children}
        </div>
      )}
    </div>
  );
};

export default paymentCard;
