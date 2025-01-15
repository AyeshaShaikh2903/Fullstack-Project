import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center align-items-center' style={{ minHeight: '100vh' }}>

        <div className="col-12">
            <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}>
            </img>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>online platform to invest in stocks,derivatives,matual funds,and more</p>
            <button
            className="btn btn-primary fs-5 mt-4"
            style={{ padding: '10px 20px', width: '200px' }}
          >
            Sign Up Now
          </button>
        </div>

       </div>
       </div>
     );
}
export default Hero;


