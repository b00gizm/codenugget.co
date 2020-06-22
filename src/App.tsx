import * as React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

export interface AppProps { name: string };

const App = (props: AppProps) => (
  <div>
    <div className="container mx-auto px-4">
      <p className="font-sans text-5xl font-light text-gray-800">
        Hello, {props.name}.
      </p>
    </div>
  </div>
);

export default hot(module)(App);