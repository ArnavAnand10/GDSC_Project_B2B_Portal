import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExporterCard from './ExporterCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from './BarChart';
import RecentOrderCard from './RecentOrderCard';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';


const ExporterDashboard = () => {

    const cardContent = [{
        title: "Total Sales",
        value: "$25k",
        icon: <MonetizationOnIcon color="success" fontSize="large" />
    },
    {
        title: "Total Orders",
        value: "200",
        icon: <ShoppingBagIcon color='primary' fontSize='large' />
    },
    {
        title: "Total Customers",
        value: "250",
        icon: <HandshakeIcon color="warning" fontSize="large" />
    },
    {
        title: "Total Profit",
        value: "$4k",
        icon: <TrendingUpIcon color="success" fontSize="large" />

    },

    ]

    const recentOrderCardData = [{
        orderId: "ae34rrdf",
        customerName: "John Doe",
        orderDate: "25/24/12",
        orderAmount: "$2k"
    },
    {
        orderId: "ae34rrdf",
        customerName: "Rodrigo Len",
        orderDate: "25/24/12",
        orderAmount: "$20k"
    },
    {
        orderId: "ae34rrdf",
        customerName: "Grealish Jack",
        orderDate: "25/24/12",
        orderAmount: "$500k"
    },
    {
        orderId: "ae34rrdf",
        customerName: "Tim Bachulka",
        orderDate: "25/24/12",
        orderAmount: "$3k"
    },
    {
        orderId: "ae34rrdf",
        customerName: "Prichard Ren",
        orderDate: "25/24/12",
        orderAmount: "$51k"
    }]

    const [timeSpan, setTimeSpan] = useState('This Month');

    const handleTimeSpanChange = (event) => {
        setTimeSpan(event.target.value);
    };

    return (

        <div className="dashboard-area basis-full py-10 px-5 bg-gray-50">
            <h1 className="text-lg font-bold uppercase"> Dashboard</h1>
            <Select
                variant='standard'
                sx={{
                    margin: "20px 15px 10px 15px"
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={timeSpan}
                label="Time Period"
                defaultValue='This Month'
                onChange={handleTimeSpanChange}
            >
                <MenuItem value={"Today"}>Today</MenuItem>
                <MenuItem value={"This Week"}>This Week</MenuItem>
                <MenuItem value={"This Month"}>This Month</MenuItem>
                <MenuItem value={"This Year"}>This Year</MenuItem>
                {/* Add industry-specific options */}
                <MenuItem value={"Last 7 Days"}>Last 7 Days</MenuItem>
                <MenuItem value={"Last 30 Days"}>Last 30 Days</MenuItem>
                <MenuItem value={"Last Quarter"}>Last Quarter</MenuItem>
                <MenuItem value={"Last Year"}>Last Year</MenuItem>
            </Select>
            {/* cards */}
            <div className="grid grid-cols-4 text-center  gap-10  my-5 mx-5 ">

                {cardContent.map(data => {
                    return <ExporterCard key={Math.random} props={data} />
                })}




            </div>
            {/* Analytics Section */}

            <div className='flex flex-row '>
                <div className=' w-3/4 shadow-md card-shadow bg-white m-5'>
                <h1 className='ml-4 text-center mt-3 -mb-10 text-2xl font-medium'>Sales</h1>
                    <BarChart />

                </div>
                <div className='w-1/4 px-5 flex flex-col overflow-y-scroll	card-shadow bg-white m-5'>
                    <h1 className='my-3 font-bold'>Recent Orders</h1>


                    {recentOrderCardData.map(cardData => {
                        return <RecentOrderCard key={Math.random} props={cardData} />
                    })}

                </div>
            </div>

        </div>
    )
}

export default ExporterDashboard;