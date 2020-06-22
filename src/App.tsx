import * as React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

export interface AppProps { name: string };

const App = (props: AppProps) => (
  <div className='App'>
    <h1>Hello, {props.name}!</h1>
  </div>
);

export default hot(module)(App);