import * as React from 'react';

interface ClockProps {};

interface ClockState {
  date: Date
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerID: NodeJS.Timeout;

  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="p-2 bg-gray-600 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="font-semibold ml-2 mr-2 text-left flex-auto">The time is {this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}