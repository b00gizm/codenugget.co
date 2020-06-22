import * as React from 'react';

export interface GreetingProps { name: string };

export const Greeting = (props: GreetingProps) => (
  <div>
    <div className="container mx-auto px-4">
      <p className="font-sans text-5xl font-light text-gray-800">
        Hello, {props.name}.
      </p>
      <div id="appRoot"></div>
    </div>
  </div>
);