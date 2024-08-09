// import React from 'react'
// import { shallow } from 'enzyme/build'
// import App from './App'
// // import ChartLineSimple from './views/charts/ChartLineSimple'
// // import Dashboard from './views/dashboard/Dashboard.js'


// it('mounts App without crashing', () => {
//   const wrapper = shallow(<App />)
//   wrapper.unmount()
// })

import React from 'react';
import { shallow } from 'enzyme/build';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({}); // Add initial state if needed

it('mounts App without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  wrapper.unmount();
});


// it('mounts Dashboard without crashing', () => {
//   const wrapper = shallow(<Dashboard />)
//   wrapper.unmount()
// })

// it('mounts Charts without crashing', () => {
//   const wrapper = shallow(<ChartLineSimple />)
//   wrapper.unmount()
// })
