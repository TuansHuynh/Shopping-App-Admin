import './Sass/category.scss'

export default function Inventory() {

    const productgroup = [
        { name: 'Smartphone' },
        { name: 'Laptop' },
        { name: 'Accesory' },
        { name: 'Accesory' },
        { name: 'Accesory' },
    ]

    const productType = [
        { name: 'Samsung' },
        { name: 'Iphone' },
        { name: 'Xiaomi' },
        { name: 'Oppo' },
    ]

    const productInfo = [];
    for (let i = 1; i <= 30; i++) {
        productInfo.push({ id: i, name: 'Iphone ' + i });
    }


    return (
        <div className="category">
            <div className="box box1 product_group">
                {productgroup.map(item =>
                    <div>
                        <div className='name_group'>{item.name}</div>
                    </div>
                )}
            </div>
            <div className="box box2 product_type">
                box2
                {productType.map(item => (
                    <div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="box box3 product_info">
                box 3
                {productInfo.map(item => (
                    <div>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="box box4">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {productInfo.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}