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
    images: string;
  }>;
}

const Page: React.FC<PageProps> = ({ wash }) => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wash.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-md  border-2 border-gray-300"
          >
            <div className="w-full relative pb-2/3">
              <img
                className="w-full h-full object-cover"
                src={item.images}
                alt={item.name}
              />
            </div>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2 ">{item.name}</div>
              <div className="mb-4">
                <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                  {item.rating}
                </span>
                <span className="text-sm text-gray-700 align-center">{item.reviews} reviews</span>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Brand: {item.brand}</p>
                <p className="text-green-500 font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
