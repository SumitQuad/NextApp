import React from "react";
import { Range } from "react-range";

interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const handleMinValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxValue(parseInt(event.target.value));
  };

  const handleChange = (values: number[]) => {
    const [min, max] = values;
    setMinValue(min);
    setMaxValue(max);
  };

  const minOptions = [
    { value: "0", label: "0" },
    { value: "50000", label: "50000" },
    { value: "100000", label: "100000" },
    { value: "150000", label: "150000" },
    { value: "200000", label: "200000" },
    { value: "250000", label: "250000" },
    { value: "500000", label: "500000" },
  ];

  const maxOptions = [
    { value: "50000", label: "50000" },
    { value: "100000", label: "100000" },
    { value: "150000", label: "150000" },
    { value: "200000", label: "200000" },
    { value: "250000", label: "250000" },
    { value: "500000", label: maxValue ? "500000" : "" },
  ];

  return (
    <div>
      <div className="range-clear" style={{ marginBottom: "20px" }}>
        {minValue !== 0 && maxValue !== 0 && (
          <div className="border-2 border-blue-500 px-2 py-2 inline-flex bg-blue-500 text-white">
            <button >
              {minValue} - {maxValue}
            </button>
            <button
              className="close-button text-white ml-2"
              onClick={() => {
                setMinValue(0);
                setMaxValue(500000);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>

      <Range
        values={[minValue, maxValue]}
        step={50000}
        min={0}
        max={500000}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              background: "#0000FF",
              marginTop: "10px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "50%",
              background: "green",
            }}
          />
        )}
      />
      <div
        className="mt-4"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {minValue === 0 ? (
          <select
            value={minValue}
            onChange={handleMinValueChange}
            style={{ width: "100px" }}
          >
            {minOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <select
            value={minValue}
            onChange={handleMinValueChange}
            style={{ width: "100px" }}
          >
            {minOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        <p>To</p>

        <select
          value={maxValue}
          onChange={handleMaxValueChange}
          style={{ width: "100px" }}
        >
          {maxOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RangeSlider;
