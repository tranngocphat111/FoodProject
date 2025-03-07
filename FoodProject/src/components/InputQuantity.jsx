import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const InputQuantity = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(prev => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-primary_brown/20 p-2 rounded-lg w-fit">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-primary_brown text-primary_yellow hover:bg-primary_brown/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={value <= 1}
      >
        <Minus className="w-4 h-4" />
      </button>
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Math.max(1, parseInt(e.target.value) || 1))}
        className="w-12 text-center bg-transparent text-primary_yellow font-semibold focus:outline-none"
      />
      
      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-primary_brown text-primary_yellow hover:bg-primary_brown/80 transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default InputQuantity;