import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import noticesReducer from './store/reducers/notices';


const rootReducer = combineReducers({
  notices : noticesReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store} >
        <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
