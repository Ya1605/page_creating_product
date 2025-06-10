// src/components/FormButtons.tsx
import React from 'react';

interface Props {
    onCancel: () => void;
}

const FormButtons: React.FC<Props> = ({ onCancel }) => {
    return (
        <div className="flex justify-end space-x-2 mt-4">
            <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                onClick={onCancel}
            >
                Cancel
            </button>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
                Add Product
            </button>
        </div>
    );
};

export default FormButtons;
