import React from "react";

interface PageProps {
  wash: Array<{
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
  }>;
}

const Page: React.FC<PageProps> = ({ wash }) => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-green-500 p-2">
        {wash.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg p-10 border-2 border-white-500"
          >
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl text-white mb-2">{item.name}</div>
              <p className="text-white-700 text-white">Price: {item.price}</p>
              <p className="text-white-700 text-white">Brand: {item.brand}</p>
              <p className="text-white-700 text-white">Rating: {item.rating}</p>
              {/* Add more data fields as needed */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
