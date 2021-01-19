import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Facebook () {
    const [data, setData] = useState();

  
   

    const getData = async () => {
        const ticker = 'fb';
        const key = process.env.REACT_APP_API_KEY;
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${key}`


        const dataResponse = await fetch(url)
        const dataJson = await dataResponse.json()
        setData(dataJson)
    }

    useEffect(() => {

        getData()
        }, [])


    return (
        <Link to='../Company-Details/FacebookDetails.jsx'>
        <div className='dataDisplay'>
       {
           data != undefined
           ? 
           <div className='testCompanyDisplay'>
            <h5>Company Name: {data.companyName}</h5>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6>
        </div>
        :
        null
       }

        </div>
        </Link>
        
    )
};
