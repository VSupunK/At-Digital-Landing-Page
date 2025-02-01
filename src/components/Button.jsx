import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-orange-600 transition">
        {/* GET FREE CONSULTATION */}
        {label}
      </button>
    </div>
  );
};

export default Button;
