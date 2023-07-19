'use client';
import React, { useState,useEffect } from "react";
import WashingCards from "../../components/WashingCards/page";
import CustomerRatingFilter from "../../components/CusomerRating/page";
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
}

interface Props {}

function Home(props: Props) {
  const [washingData, setWashingData] = useState<WashingData[]>(data as WashingData[]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  const applyFilter = () => {
    // Initialize the updated list with the original data
    let updatedList: WashingData[] = data as WashingData[];

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
}, [ selectedRatings]);


  
  return (
    <>
    <CustomerRatingFilter 
           selectedRatings={selectedRatings}
           setSelectedRatings={setSelectedRatings}/>
      <WashingCards wash={washingData} />
    </>
  );
}

export default Home;