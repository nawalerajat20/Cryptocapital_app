// src/CryptoChart.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CryptoGraphpred = (symbol, currencyname) => {
  const pred = [
    72855.15, 72703.6, 72557.84, 72278.71, 71978.57, 70828.01, 69924.94, 68973.98,
    68404.58, 67721.89, 67055.5, 66573.49, 66165.41, 66198.38, 66152.17
  ];

  const [data, setData] = useState([]);
  // const currency =`${symbol}-USD`;
  useEffect(() => {
    const formattedData = pred.map((value, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return { date: date.toISOString().split('T')[0], high: value };
    });
    setData(formattedData);

    // Commenting out the fetchData for now
    /*
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cryptobitsmodel.onrender.com/crypto/precictions?currency=${currency}`);
        const result = await response.json();
        if (result.message === 'success') {
          const formattedData = result.data.map((value, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            return { date: date.toISOString().split('T')[0], high: value[0] };
          });
          setData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    */
// eslint-disable-next-line
  }, []);

  return (
    <div className='Graph'>
        <h2 style={{marginTop:'40px'}}>Predicted Values</h2>
    <ResponsiveContainer width="80%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="high" stroke="green" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default CryptoGraphpred;
