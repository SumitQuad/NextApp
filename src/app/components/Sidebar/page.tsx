import React from 'react';

interface Props {}

const Page: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-row justify-around items-center flex-wrap mb-20">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-10 w-full sm:w-1/2 lg:w-1/4">
        We are a full service provider which means we have got you covered on Design, Web Development, and Content
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-10 w-full sm:w-1/2 lg:w-1/4">
        We are a full service provider which means we have got you covered on Design, Web Development, and Content
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-10 w-full sm:w-1/2 lg:w-1/4">
        We are a full service provider which means we have got you covered on Design, Web Development, and Content
      </div>
    </div>
  );
};

export default Page;
