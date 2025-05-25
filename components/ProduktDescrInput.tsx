
import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const ProductDescriptionInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="productDescription">
                Product Description
            </label>
            <textarea
                id="productDescription"
                className="w-full border border-gray-300 rounded p-2"
                rows={4}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            ></textarea>
        </div>
    );
};

export default ProductDescriptionInput;
