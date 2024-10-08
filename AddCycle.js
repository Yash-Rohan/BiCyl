import React, { useState } from 'react';
import './AddCycle.css'; // Importing the CSS file

function AddCycle() {
  // State to store form data
  const [cycleModel, setCycleModel] = useState('');
  const [cycleNumber, setCycleNumber] = useState('');
  const [cyclePicture, setCyclePicture] = useState(null);
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!cycleModel || !cycleNumber || !cyclePicture || !location || !rent) {
      alert('Please fill in all fields');
      return;
    }

    // Create a form data object to simulate file uploads
    const formData = new FormData();
    formData.append('cycleModel', cycleModel);
    formData.append('cycleNumber', cycleNumber);
    formData.append('cyclePicture', cyclePicture);
    formData.append('location', location);
    formData.append('rent', rent);

    // Simulate form submission (send formData to the backend here)
    console.log({
      cycleModel,
      cycleNumber,
      cyclePicture,
      location,
      rent,
    });

    alert('Cycle Added Successfully!');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Add New Cycle</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Cycle Model */}
        <label htmlFor="cycleModel">Cycle Model:</label>
        <input
          type="text"
          id="cycleModel"
          value={cycleModel}
          onChange={(e) => setCycleModel(e.target.value)}
          placeholder="Enter Cycle Model"
          required
        />

        {/* Cycle Number */}
        <label htmlFor="cycleNumber">Cycle Number:</label>
        <input
          type="text"
          id="cycleNumber"
          value={cycleNumber}
          onChange={(e) => setCycleNumber(e.target.value)}
          placeholder="Enter Cycle Number"
          required
        />

        {/* Cycle Picture */}
        <label htmlFor="cyclePicture">Cycle Picture:</label>
        <input
          type="file"
          id="cyclePicture"
          accept="image/*"
          onChange={(e) => setCyclePicture(e.target.files[0])}
          required
        />

        {/* Location */}
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          required
        />

        {/* Rent */}
        <label htmlFor="rent">Rent per Day (INR):</label>
        <input
          type="number"
          id="rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter Rent"
          required
        />

        {/* Submit Button */}
        <button type="submit">Add Cycle</button>
      </form>

      {/* Back Link */}
      <div className="back-link">
        <a href="adminUI.html">Back to Admin Page</a>
      </div>
    </div>
  );
}

export default AddCycle;
