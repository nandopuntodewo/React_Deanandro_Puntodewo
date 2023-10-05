import React, { useState } from 'react';

const NewsCategorySelector = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <label>Select a category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        {/* Add more categories */}
      </select>
    </div>
  );
};

export default NewsCategorySelector;
