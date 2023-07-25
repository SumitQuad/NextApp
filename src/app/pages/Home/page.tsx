'use client';
import React, { useState, useEffect } from "react";
import WashingCards from "../../components/WashingCards/page";
import CustomerRatingFilter from "../../components/CusomerRating/page";
import RangeSlider from "@/app/components/RangeSlider/RangeSlider";
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
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 p-2">
  {/* Customer Rating Filter */}
  <div className="sm:col-span-1 lg:col-span-1">

  <div>
      {/* Range slider component */}
      <RangeSlider
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
  </div>
  
    <CustomerRatingFilter
      selectedRatings={selectedRatings}
      setSelectedRatings={setSelectedRatings}
    />
  </div>

  {/* Washing Cards */}
  <div className="sm:col-span-1 lg:col-span-5">
    <WashingCards wash={washingData} />
  </div>
</div>


    </>
  );
}

export default Home;