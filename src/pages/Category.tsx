import { useState } from 'react';
import './Sass/category.scss';

export default function Inventory() {
    const productGroup = [
        { id: 1, name: 'Smartphone' },
        { id: 2, name: 'Laptop' },
        { id: 3, name: 'Accessory' },
    ];

    const productType = [
        { id: 1, name: 'Samsung', groupId: 1 },
        { id: 2, name: 'iPhone', groupId: 1 },
        { id: 3, name: 'Asus', groupId: 2 },
        { id: 4, name: 'HP', groupId: 2 },
        { id: 5, name: 'Headphone', groupId: 3 },
        { id: 6, name: 'Earphone', groupId: 3 },
    ];

    const productInfo = [
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: 'Samsung ' + (i + 1),
        typeId: 1,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 11,
        name: 'iPhone ' + (i + 1),
        typeId: 2,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 21,
        name: 'Asus ' + (i + 1),
        typeId: 3,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 31,
        name: 'HP ' + (i + 1),
        typeId: 4,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 41,
        name: 'Headphone ' + (i + 1),
        typeId: 5,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 51,
        name: 'Earphone ' + (i + 1),
        typeId: 6,
    })),
];

    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(1);
    const [selectedTypeId, setSelectedTypeId] = useState<number | null>(1);

    const filteredTypes = productType.filter(type => type.groupId === selectedGroupId);
    const filteredProducts = productInfo.filter(product => product.typeId === selectedTypeId);

    return (
        <div className="grid-layout">
            <div className="box box-group">
                <div className="header">Product Groups</div>
                <div className="scroll-content">
                    {productGroup.map(group => (
                        <div
                            key={group.id}
                            className={`item ${group.id === selectedGroupId ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedGroupId(group.id);
                                setSelectedTypeId(null);
                            }}
                        >
                            {group.name}
                        </div>
                    ))}
                </div>
            </div>

            <div className="box box-type">
                <div className="header">Product Types</div>
                <div className="scroll-content">
                    {selectedGroupId ? (
                        filteredTypes.map(type => (
                            <div
                                key={type.id}
                                className={`item ${type.id === selectedTypeId ? 'active' : ''}`}
                                onClick={() => setSelectedTypeId(type.id)}
                            >
                                {type.name}
                            </div>
                        ))
                    ) : (
                        <p className="empty-msg">Select a product group</p>
                    )}
                </div>
            </div>

            <div className="box box-info">
                <div className="header">Products</div>
                <div className="scroll-content">
                    {selectedTypeId ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="info-item">
                                <span>{product.id}</span>
                                <span>{product.name}</span>
                                <span>{product.name}</span>
                                <span>{product.name}</span>
                                <span>{product.name}</span>
                                <span>{product.name}</span>
                                <span>{product.name}</span>
                            </div>
                        ))
                    ) : (
                        <p className="empty-msg">Select a product type</p>
                    )}
                </div>
            </div>
        </div>

    );
}
