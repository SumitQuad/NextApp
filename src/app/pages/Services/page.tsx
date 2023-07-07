import React from 'react';
import Data from '../../assets/data.json';

interface Props {
  id: number;
  name: string;
  price: number;
  brand: string;
  originalprice: number;
  rating: string;
  speed: string;
  functiontype: string;
  warranty: string;
  delivery: string;
  Familysize: string;
  item: string;
  reviews: string;
}

function Services(props: Props) {

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <ul className="space-y-4">
        {Data.map((item) => (
          <li key={item.id} className="border p-4 rounded-md">
            <p className="font-semibold">Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Brand: {item.brand}</p>
            {/* Add other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
