import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Kigali',
        posts: 590,
        users: 800,
        views: 1400,
        comments: 490,
    },
    {
        name: 'Huye',
        posts: 868,
        users: 967,
        views: 1506,
        comments: 590,
    },
    {
        name: 'Musanze',
        posts: 1397,
        users: 1098,
        views: 989,
        comments: 350,
    },
    {
        name: 'Muhanga',
        posts: 1480,
        users: 1200,
        views: 1228,
        comments: 480,
    },

];

export default class LineChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="views" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="users" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="posts" stroke="#ff7300" />
                    <Scatter dataKey="comments" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
