// src/components/ImageUpload.tsx
import React from 'react';

interface Props {
    file: File | null;
    onFileChange: (file: File | null) => void;
}

const ImageUpload: React.FC<Props> = ({ file, onFileChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileChange(e.target.files[0]);
        } else {
            onFileChange(null);
        }
    };

    return (
        <div>
            <label className="block mb-1 font-medium" htmlFor="productImage">
                Product Image
            </label>
            <input
                id="productImage"
                type="file"
                accept="image/*"
                onChange={handleChange}
                required={!file}
            />
            {file && (
                <div className="mt-2">
                    <p className="text-sm">Selected file: {file.name}</p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
