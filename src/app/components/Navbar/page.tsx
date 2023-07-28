import React from 'react';

interface Props {}

const Page: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-2xl">CarHub</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
        <a
          href="/dashboard"
          className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Rental Deals
        </a>
        <a
          href="/team"
          className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Favourite Cars
        </a>
      </div>
      <div>
      <button className="border-2 border-blue-500 px-5 py-2 rounded-full">Sign Up</button>
      </div>
    </nav>
  );
};

export default Page;
