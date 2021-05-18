import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Navigations from './src/navigations'
import store from './src/store';

export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigations />
      </PaperProvider>
    </Provider>
  );
}
