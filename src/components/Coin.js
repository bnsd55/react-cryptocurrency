import React from 'react';
import { useSelector } from 'react-redux';

let Coin = (props) => {
    let allCoins = useSelector(state => state.allCoins);
    let currentCoin = allCoins.find(e => e.id === props.match.params.id);

    return (
        <div className="container-fluid">
            <div className="container">
                {
                    allCoins.length === 0 ?
                        <div className="row p-3 justify-content-center">
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="row p-3">
                                <h3 className="title">{currentCoin.name}</h3>
                            </div>
                            <div className="row p-3">
                                <ul className="list-group">
                                    <li className="list-group-item">Symbol: {currentCoin.symbol}</li>
                                    <li className="list-group-item">Rank: {currentCoin.rank}</li>
                                    <li className="list-group-item">Price: {currentCoin.price_usd}$</li>
                                    <li className="list-group-item">1 Hour Change: {currentCoin.percent_change_1h}</li>
                                    <li className="list-group-item">25 Hours Change: {currentCoin.percent_change_24h}</li>
                                    <li className="list-group-item">7 Days Change: {currentCoin.percent_change_7d}</li>
                                </ul>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Coin;