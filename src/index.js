import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from '@components/main';
import { Provider } from 'react-redux'
import { store } from "@redux/store"
ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
document.getElementById('app'));