import React from "react";

interface Props {
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    setSelectedRatings: (ratings: string[]) => void;
}

const ClearButton: React.FC<Props> = ({
    setMinValue,
    setMaxValue,
    setSelectedRatings,
}) => {
    const handleClearFilters = () => {
        setMinValue(0);
        setMaxValue(500000);
        setSelectedRatings([]);
    };

    return (
        <button className="border-2 border-blue-500 px-5 py-2 rounded-full mt-5" onClick={handleClearFilters}>
            Clear Filters
        </button>
    );
};

export default ClearButton;


