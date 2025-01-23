import React from 'react';
function Hero() {
    return ( 
        <div className='container '>
        <div className='row p-4 mt-5 border-bottom text-center' >
            <h1>Pricing</h1>
            <h3  className='text-muted fs-5'>
                Free equity investment and flat 20rs trady and F&O trades
            </h3>
             </div>
             <div className='row p-5 mt-5'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>
                        All equity delivery investments (NSE,BSE), are absolutely free -rs 0 Brokerage.
                    </p>
                </div>
                <div className='col-4 p-4'>
                <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-3'>Intrady and  F&O trades</h1>
                    <p className='text-muted'>
                        Flat rs 0 percent whichever  is lower <br/>All equity delivery investments (NSE,BSE), are absolutely free -rs 0 Brokerage.
                    </p>
                </div>
                <div className='col-4 p-4'>
                <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>
                        All direct mutual funds delivery investments (NSE,BSE), are absolutely free -rs 0 Brokerage.
                    </p>
                </div>
             </div>
            
            
            
    </div>
     );
}

export default Hero;