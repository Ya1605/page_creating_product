// src/components/SkuInput.tsx
import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const SkuInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="sku">
                SKU
            </label>
            <input
                id="sku"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    );
};

export default SkuInput;
