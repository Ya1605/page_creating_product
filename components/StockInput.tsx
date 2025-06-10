// src/components/StockInput.tsx
import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const StockInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="stock">
                Stock
            </label>
            <input
                id="stock"
                type="number"
                className="w-full border border-gray-300 rounded p-2"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    );
};

export default StockInput;
