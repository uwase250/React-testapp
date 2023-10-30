import React from 'react';

import Navbar from '../component/navbar';
import LineChart from '../component/charts/LineChart';



const Analytics = () => {
    return (
        <div>
            <Navbar />
            <div style={{ width: '600px', height: '300px', marginTop: '5rem' }}>
                <LineChart />
            </div>
        </div>
    )
}

export default Analytics