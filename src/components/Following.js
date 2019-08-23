import React from 'react';
import CoinCard from './CoinCard';
import { useSelector, useDispatch } from 'react-redux';

let Following = (props) => {
    let dispatch = useDispatch();
    let allFollowing = useSelector(state => state.allCoins).filter((c) => c.follow);

    let unfollowAll = () => {
        dispatch({ type: "UNFOLLOW_ALL" })
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row pt-3 pl-3 pr-3 justify-content-between">
                    <h4>Following</h4>

                    <button className="btn btn-danger" disabled={allFollowing.length === 0} onClick={unfollowAll}>Unfollow all</button>
                </div>
                <div className="row justify-content-left align-items-center p-3">
                    {
                        allFollowing.length > 0 ? 
                            allFollowing.map((item) => (<CoinCard key={item.id} id={item.id} />)) 
                        : 
                            <h4>Empty list</h4>
                    }
                </div>
            </div>
        </div>
    )

}

export default Following;   