import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="Largest Stock Broker in India"
                        className="img-fluid"
                    />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h2>Largest Stock Broker in India</h2>
                    <p className='mb-3 mt-3'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes
                        in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Government Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;
