import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../src/components_css/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Following from './components/Following';
import About from './components/About';
import Coin from './components/Coin';
import Page404 from './components/Page404';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { coinsReducer } from './reducers/coinsReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reducers/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(coinsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default () => {

  useEffect(() => {
    // const fetchData = async () => {
    //   let currentAmount = localStorage.getItem("data_amount");
    //   let apiData = await getDataFromAPI(currentAmount ? currentAmount : 10);
    //   store.dispatch({ type: "INIT_APP", payload: { allCoins: apiData } });
    // };

    // fetchData();
    store.dispatch({ type: "FETCH_DATA", payload: { amount: 10 } });
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/following" component={Following} />
          <Route exact path="/about" component={About} />
          <Route exact path="/coin/:id" component={Coin} />
          <Route path="*" component={Page404} />
        </Switch>

        <Footer />
      </Router>
    </Provider >
  )
};
