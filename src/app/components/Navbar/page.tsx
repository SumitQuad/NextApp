import React from 'react';

interface Props {}

const Page: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-white text-2xl text-green-500">Awacaro</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
        <a
          href="/dashboard"
          className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/team"
          className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About Us
        </a>
        <a
          href="/projects"
          className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Cars
        </a>
        <a
          href="/reports"
          className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Help
        </a>
      </div>
      <div>
        <button className="border-2 border-green-500 rounded-1 p-2">Log In</button>
      </div>
    </nav>
  );
};

export default Page;
