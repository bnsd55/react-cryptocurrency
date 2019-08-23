import React from 'react';
import '../components_css/coin-card.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux';

let CoinCard = (props) => {

    let allCoins = useSelector(state => state.allCoins);
    let dispatch = useDispatch();

    let currentCoin = allCoins.find(e => e.id === props.id);

    let followToggle = (event) => {
        if (currentCoin.follow) {
            localStorage.removeItem(currentCoin.id);
            currentCoin.follow = false;
            dispatch({ type: "CHANGE_FOLLOWING", payload: currentCoin });
        } else {
            localStorage.setItem(currentCoin.id, Number(currentCoin.price_usd).toFixed(3));
            currentCoin.follow = true;
            dispatch({ type: "CHANGE_FOLLOWING", payload: currentCoin });
        }
    }

    return (
        <div className="col-lg-2 coin m-2">
            <div className="container coin-title">

                <div className="row">
                    <div className="col-lg-2">
                        <FontAwesomeIcon icon={faCoins} size="lg" />
                    </div>

                    <div className="col-lg-10 coin-name">
                        <Link to={`/coin/${currentCoin.id}`}>{currentCoin.name}</Link>
                    </div>
                </div>
            </div>

            <div className="data">
                {
                    currentCoin.follow ?
                        <div className="follow-change">
                            Change: {Number(Number(currentCoin.price_usd).toFixed(3) - Number(localStorage.getItem(currentCoin.id)).toFixed(3)).toFixed(3)}$
                                    </div>
                        :
                        <div>Current: {Number(currentCoin.price_usd).toFixed(3)}$</div>
                }

                <div>24H change: {currentCoin.percent_change_24h}%</div>
                <div>7D change: {currentCoin.percent_change_7d}%</div>

                <div className="follow text-center mt-2">
                    <button onClick={(event) => { followToggle(event) }} className={currentCoin.follow ? 'btn btn-danger' : 'btn btn-success'}>
                        {currentCoin.follow ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CoinCard;