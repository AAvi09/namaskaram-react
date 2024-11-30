import React, { useState } from "react";

const LocationDetector = () => {
  const [location, setLocation] = useState(" ");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  //function to detect user's current location
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLocation(
            `Lat : ${position.coords.latitude} , Lng : ${position.coords.longitude}`
          );
        },
        (error) => {
          alert(`unable to detect location, please enter manually `);
        }
      );
    } else {
      alert(`geolocation is not supported by your browser`);
    }
  };

  // function to handle location manually
  const handleLocationInput = (e) => {
    setLocation(e.target.value);
  };

  const submitLocation = () => {
    if (location) {
      alert(`your location isset to : ${location}`);
    } else {
      alert(`please enter or detect your location`);
    }
  };

  return (
    <div className="p-6 max-w-md max-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Select Your Location</h2>

      {/* Detect Location Button */}
      <button
        onClick={detectLocation}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-700"
      >
        Detect Current Location
      </button>
      {/* Manual Location Input */}
      <div className="mb-4">
        <label
          htmlFor="manuallocation"
          className="block text-gray-700 font-medium mb-2"
        >
          or Enter Location Manually:
        </label>
        <input
          id="manualLocation"
          type="text"
          value={location}
          onChange={handleLocationInput}
          placeholder="Enter your city, area or address"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        onClick={submitLocation}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Confirm Location
      </button>
      {latitude && longitude && (
        <p className="mt-4 text-sm text-gray-500">
          Detected Location: Latitude : {latitude}, Longitude : {longitude}{" "}
        </p>
      )}
    </div>
  );
};

export default LocationDetector;
