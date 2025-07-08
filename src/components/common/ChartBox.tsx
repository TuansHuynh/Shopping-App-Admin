import { useState } from 'react';
import '../style/chartBox.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const statsData = [
    {
        title: "Total Revenue",
        value: "$383.0k",
        change: "+2.0%",
        trend: "up"
    },
    {
        title: "Profit Margin",
        value: "36.5%",
        change: "+1.0%",
        trend: "up"
    },
    {
        title: "Conversion Rate",
        value: "1.8%",
        change: "+1.5%",
        trend: "up"
    },
    {
        title: "Abandoned Carts",
        value: "128",
        change: "-5.6%",
        trend: "down"
    }
];


export default function ChartBox() {
    const [activeRange, setActiveRange] = useState("90 Days");
    const ranges = ["7 Days", "30 Days", "90 Days", "12 Months"];

    const dataMap: Record<string, { name: string; revenue: number; profit: number }[]> = {
        "7 Days": [
            { name: 'Mon', revenue: 3200, profit: 1500 },
            { name: 'Tue', revenue: 4000, profit: 1800 },
            { name: 'Wed', revenue: 3500, profit: 1700 },
            { name: 'Thu', revenue: 4200, profit: 1900 },
            { name: 'Fri', revenue: 4600, profit: 2100 },
            { name: 'Sat', revenue: 5000, profit: 2400 },
            { name: 'Sun', revenue: 4800, profit: 2300 },
        ],
        "30 Days": Array.from({ length: 30 }, (_, i) => ({
            name: `Day ${i + 1}`,
            revenue: Math.floor(Math.random() * 3000) + 3000,
            profit: Math.floor(Math.random() * 2000) + 1000
        })),
        "90 Days": Array.from({ length: 90 }, (_, i) => ({
            name: `Day ${i + 1}`,
            revenue: Math.floor(Math.random() * 4000) + 3000,
            profit: Math.floor(Math.random() * 2000) + 1200
        })),
        "12 Months": [
            { name: 'Jan', revenue: 30000, profit: 14000 },
            { name: 'Feb', revenue: 34000, profit: 16000 },
            { name: 'Mar', revenue: 38000, profit: 19000 },
            { name: 'Apr', revenue: 42000, profit: 21000 },
            { name: 'May', revenue: 46000, profit: 24000 },
            { name: 'Jun', revenue: 48000, profit: 26000 },
            { name: 'Jul', revenue: 50000, profit: 28000 },
            { name: 'Aug', revenue: 52000, profit: 30000 },
            { name: 'Sep', revenue: 54000, profit: 32000 },
            { name: 'Oct', revenue: 56000, profit: 34000 },
            { name: 'Nov', revenue: 58000, profit: 36000 },
            { name: 'Dec', revenue: 60000, profit: 38000 },
        ],
    };

    const data = dataMap[activeRange] || [];

    return (
        <div className="chartBoxContainer">
            <div className="header">
                <div className="ranges">
                    {ranges.map(range => (
                        <button
                            key={range}
                            className={range === activeRange ? "active" : ""}
                            onClick={() => setActiveRange(range)}
                        >
                            {range}
                        </button>
                    ))}
                </div>
                <div className="actions">
                    <select>
                        <option>All Categories</option>
                    </select>
                    <button>Export Data</button>
                    <button>Customize</button>
                </div>
            </div>

            <div className="stats">
                {statsData.map((stat, index) => (
                    <div className="card" key={index}>
                        <p>{stat.title}</p>
                        <h2>{stat.value}</h2>
                        <span className={stat.trend}>
                            {stat.trend === "up" ? "↑" : "↓"} {stat.change}
                        </span>
                    </div>
                ))}
            </div>


            <div className="chart">
                <h3>Sales Analytics</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#4a90e2" dot={false} />
                        <Line type="monotone" dataKey="profit" stroke="#2ecc71" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
