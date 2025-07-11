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
    ];

    const productInfo = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: 'iPhone ' + (i + 1),
        typeId: 2,
    }));

    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
    const [selectedTypeId, setSelectedTypeId] = useState<number | null>(null);

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
