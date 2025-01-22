import React from 'react';
    function Universe() {
        return ( 
            <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png'></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/streakLogo.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/sensibullLogo.svg'></img>
                <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/goldenpiLogo.png'></img>
                <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/dittoLogo.png' style={{width:"30%"}}></img>
                <p className='text-small text-muted'>Insure platform</p>
                </div>
            </div>
        </div>
         );
    }
    
    export default Universe;