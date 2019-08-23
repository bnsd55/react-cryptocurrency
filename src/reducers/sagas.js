import { call, put, takeEvery } from 'redux-saga/effects'
import { coinsData } from '../data/coinsData'

async function fetchDataFromAPI(_amount) {
    /*
    * Becase of https://api.coinmarketcap.com/v1/ticker API will deprecate soon,
    * we will fetch data from a local .json file
    */

    // return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${_amount}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         localStorage.setItem("data_amount", _amount)

    //         for (var current of data) {
    //             current.follow = localStorage.getItem(current.id) ? true : false;
    //         }

    //         return data;
    //     });

    let coinsAmount = coinsData.slice(0, _amount);

    for (var current of coinsAmount) {
        current.follow = localStorage.getItem(current.id) ? true : false;
    }

    return coinsAmount;
}

function* fetchData(action) {
    try {
        const fetchedData = yield call(fetchDataFromAPI, action.payload.amount);
        yield put({ type: "SET_ALL_COINS", payload: { allCoins: fetchedData } });
    } catch (e) {
        yield put({ type: "FETCH_ERROR", payload: { exception: e } });
    }
}

function* rootSaga() {
    yield takeEvery("FETCH_DATA", fetchData);
}

export default rootSaga;