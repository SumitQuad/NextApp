import React from 'react';

interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-center gap-4">
      <button className="bg-cyan-500 shadow-lg ring-2 ring-cyan-500 ring-opacity-50 text-white font-bold py-2 px-4 rounded">
        Subscribe
      </button>
      <button className="bg-blue-500 shadow-lg ring-2 ring-blue-500 ring-opacity-50 text-white font-bold py-2 px-4 rounded">
        Subscribe
      </button>
      <button className="bg-indigo-500 shadow-lg ring-2 ring-indigo-500 ring-opacity-50 text-white font-bold py-2 px-4 rounded">
        Subscribe
      </button>
    </div>
  );
};

export default Page;
