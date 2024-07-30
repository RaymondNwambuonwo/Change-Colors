// /* eslint-disable react-hooks/exhaustive-deps */
// Import necessary hooks from React
import { useEffect, useState } from "react";

// Define the main component
export default function RandomColor() {
  // State to keep track of the color type (hex or rgb)
  const [colorType, setColorType] = useState("hex");
  // State to store the current color
  const [colors, setColors] = useState("#000000");

  // Utility function to generate a random number between 0 and length-1
  const colorUtil = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  // Function to create a random hex color
  const createRandomHexColor = () => {
    // Array of possible hex digits
    const hexCode = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexHash = "#";

    // Generate a 6-digit hex code
    for (let i = 0; i < 6; i++) {
      hexHash += hexCode[colorUtil(hexCode.length)];
    }
    // Update the color state
    setColors(hexHash);
  };

  // Function to create a random RGB color
  const createRandomRGBColor = () => {
    // Generate random values for red, green, and blue (0-255)
    const r = colorUtil(256);
    const g = colorUtil(256);
    const b = colorUtil(256);

    // Update the color state with the RGB string
    setColors(`rgb(${r},${g}, ${b})`);
  };

  // Effect hook to update color when colorType changes
  useEffect(() => {
    if (colorType === "rgb") createRandomRGBColor();
    else createRandomHexColor();
  }, [colorType]);

  // Render the component
  return (
    <div style={{ width: "100vw", height: "100vh", background: colors }}>
      {/* Buttons to change color type and generate colors */}
      <button
        onClick={() => {
          setColorType("hex");
          createRandomHexColor();
        }}>
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setColorType("rgb");
          createRandomRGBColor();
        }}>
        Create RGB Color
      </button>
      <button
        onClick={
          colorType === "hex" ? createRandomHexColor : createRandomRGBColor
        }>
        Random Color
      </button>

      {/* Display the current color type and value */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}>
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{colors}</h1>
      </div>
    </div>
  );
}
