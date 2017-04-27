import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Register from '../Register';

const App = ({ store }) => (
  <Provider store={store}>
    <Register />
  </Provider>
)

App.propTyps = {
  store: PropTypes.object.isRequired,
}

export default App;
