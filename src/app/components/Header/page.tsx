import React from 'react';
import Image from 'next/image';
import imageone from "../../assets/Images/undraw_businessman_thu5.png";

interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mt-4 sm:mt-8">
      <div className="flex flex-col items-center sm:w-1/2">
        <h1 className="font-medium text-2xl">Website Design Agency</h1>
        <p className="mt-2">We are a full service provider which means we have got you <br />covered on Design, Web Development, and Content<br />We are a full service provider which means we have got you <br />covered on Design, Web Development, and Content</p>
      </div>
      <div className="mt-4 sm:mt-0 sm:w-1/2">
        <Image src={imageone} alt="image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Page;
