import React from 'react';
import './Sass/app.scss';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import Header from './Components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faWhatsapp as whatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faSearch as search,
  faHeart as heartFill,
  faSquare as square,
  faCheckSquare as check,
  faEye as eye,
  faEyeSlash as eyeSlash,
  faPen as pen,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartStroke } from '@fortawesome/free-regular-svg-icons';
import { ShopPage } from './Pages/ShopPage';

library.add(
  fab,
  search,
  heartFill,
  heartStroke,
  check,
  square,
  eye,
  eyeSlash,
  whatsapp,
  pen
);

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/product' component={ProductPage} />

          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
