// src/components/CategorySelect.tsx
import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Beauty',
    'Sports',
    'Others',
];

const CategorySelect: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="category">
        Category
        </label>
        <select
    id="category"
    className="w-full border border-gray-300 rounded p-2"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required
    >
    <option value="">Select category</option>
    {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
    ))}
    </select>
    </div>
);
};

export default CategorySelect;
