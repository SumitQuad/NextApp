'use client';
import React, { useState, useEffect } from "react";
import WashingCards from "../../components/WashingCards/page";
import CustomerRatingFilter from "../../components/Filters/CusomerRating/page";
import RangeSlider from "@/app/components/Filters/RangeSlider/RangeSlider";
import ClearButton from "@/app/components/ClearButton/ClearButton";
import Navbar from "../../components/Navbar/page";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Discount from "../../components/Filters/Discount/page";
import Offers from "../../components/Filters/Offers/page";
import Fuel from "../../components/Filters/Fuel/page";
import Footer from "../../components/Footer/page";
import data from "../../utils/data.json";

interface WashingData {
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
}

interface Props { }

function Home(props: Props) {
  // State variables
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(500000);
  const [washingData, setWashingData] = useState<WashingData[]>(data as WashingData[]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  const applyFilter = () => {
    // Initialize the updated list with the original data
    let updatedList: WashingData[] = data as WashingData[];

    if (minValue && maxValue) {
      updatedList = updatedList.filter(
        (item) => item.price >= minValue && item.price <= maxValue
      );
    }

    if (selectedRatings.length > 0) {
      const selectedRatingValue = Math.min(
        ...selectedRatings.map((rating) => parseInt(rating))
      );

      updatedList = updatedList.filter(
        (item) => parseInt(item.rating.charAt(0)) >= selectedRatingValue
      );
    }

    setWashingData(updatedList);
  };


  // Apply filter when inputs change
  useEffect(() => {
    applyFilter();
  }, [selectedRatings, minValue, maxValue]);

  return (
    <>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 p-2 mt-8">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md  border-2 border-gray-300 p-4 sm:col-span-1 lg:col-span-2 ">
          <h1 className="bold text-2xl mb-10">Filters</h1>

          {/* Range slider component */}
          <RangeSlider
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />

          {/* Customer Rating Filter */}
          <CustomerRatingFilter
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
          />

          {/* Discount Filter */}
          <Discount />

          {/* Fuel Filter */}
          <Fuel />

          {/* Offer Filter */}
          <Offers />


          {/* Clear Filters button */}
          <ClearButton
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            setSelectedRatings={setSelectedRatings}
          />
        </div>

        {/* Washing Cards */}
        <div className="sm:col-span-1 lg:col-span-4">
          <WashingCards wash={washingData} />
        </div>

      </div>
      {/* Footer */}
      <Footer />

    </>
  );
}

export default Home;