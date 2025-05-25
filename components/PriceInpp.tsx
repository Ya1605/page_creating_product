// src/components/PriceInput.tsx
import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const PriceInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="price">
                Price
            </label>
            <input
                id="price"
                type="number"
                step="0.01"
                className="w-full border border-gray-300 rounded p-2"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    );
};

export default PriceInput;
