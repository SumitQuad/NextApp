import Image from 'next/image'

interface Props {}

function HeroSection(props: Props) {
  // const {} = props; // If you don't need any props, you can remove this line

  return (
    <>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 p-2 mt-8">
        <div className="sm:col-span-1 lg:col-span-3">
          <h1 className="text-4xl">Find Book rent a car-quick and <br/> super easy</h1>
          <p className="mt-4">Streamline your car rental experience with <br /> our effortless booking process</p>
          <button className="border-2 border-blue-500 px-5 py-2 rounded-full mt-4">Explore Cars</button>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
        <Image src="/images/cars.jpg" width={1000} height={1000} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
