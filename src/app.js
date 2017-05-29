import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import Sample from 'components/Sample';

import { AppStore } from './store'

import './styles.css';

render(
  <Provider store={AppStore}>
    <div>
      <Sample />
    </div>
  </Provider>,
  document.getElementById('app'),
);
