import React from 'react';

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <nav className="flex justify-between items-center space-x-4 bg-blue-500 p-4">
      <div>
        <h1 className='font-bold px-4 text-white text-2xl'>Logo</h1>
      </div>
      <div>
        <a href="/dashboard" className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
          Home
        </a>
        <a href="/team" className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
          Team
        </a>
        <a href="/projects" className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
          Projects
        </a>
        <a href="/reports" className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
          Reports
        </a>
      </div>
      <div>
      <button className="border border-white text-white rounded-none p-2">Save Changes</button>
      </div>
    </nav>
  );
}

export default Page;
