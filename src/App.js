import React, { useEffect } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase'
import { actionTypes } from './reducer';
import Payment from './components/Payment';

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';



const promise = loadStripe("pk_test_51HPvSlAa3FDknegJI5uLu8b5PseBbbvRo0u1KB41VgjrhnFKLBwe6WuMgNtSWnnvNYudbhM5G6hlQQmP4jLhGDAb009SppDhOl")

function App() {

  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        })
      }
    })

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />

            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
