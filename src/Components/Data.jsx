import React, { useState, useEffect } from 'react';

export default function Data () {
    const [data, setData] = useState();

    //this api key does not work, need to troubleshoot
    useEffect(() => {
    const ticker = 'fb';
    const fetchData = () => {
        const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
        console.log(API_KEY);
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${API_KEY}`

        fetch(`url`)
        
        //figure out this url
    fetch(``)
    .then(res => res.json(data))
    .then(res =>{
        console.log(res)
        setData(res)
    })
}


    fetchData(data)
}, [])




    return (
        <div className='dataDisplay'>
        <div>
        <h1>Please See a Sample Portfolio Below</h1>
        </div>
        <div className='companyDisplay'>
            {/* <h5>Company Name: {data.companyName}</h5>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6> */}
        </div>


        </div>
        
    )
};
