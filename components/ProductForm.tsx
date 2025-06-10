// src/components/ProductForm.tsx
import React, { useState } from 'react';

import ProductNameInput from './ProductNameInput';
import ProductDescriptionInput from './ProductDescriptionInput';
import PriceInput from './PriceInput';
import StockInput from './StockInput';
import SkuInput from './SkuInput';
import CategorySelect from './CategorySelect';
import ImageUpload from './ImageUpload';
import FormButtons from './FormButtons';

interface FormData {
    productName: string;
    productDescription: string;
    price: string;
    stock: string;
    sku: string;
    category: string;
    productImage: File | null;
}

interface Props {
    onSubmit: (data: FormData) => void;
    onCancel: () => void;
}

const ProductForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<FormData>({
        productName: '',
        productDescription: '',
        price: '',
        stock: '',
        sku: '',
        category: '',
        productImage: null,
    });

    const handleChange = (key: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (
            !formData.productName ||
            !formData.price ||
            !formData.stock ||
            !formData.sku ||
            !formData.category ||
            !formData.productImage
        ) {
            alert('Please fill in all required fields.');
            return;
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <ProductNameInput
                value={formData.productName}
                onChange={(value) => handleChange('productName', value)}
            />
            <ProductDescriptionInput
                value={formData.productDescription}
                onChange={(value) => handleChange('productDescription', value)}
            />
            <PriceInput
                value={formData.price}
                onChange={(value)