import React, { Component } from "react";
import { render } from "react-dom";

const toeatItems = [
  {
    id: 1,
    title: "Choco Taco",
    description: "Best Taco!",
    completed: false,
  },
  {
    id: 2,
    title: "Panes Cookie",
    description: "Monster Cookie!!",
    completed: false,
  },
  {
    id: 3,
    title: "Quesadilla",
    description: "From Chipotle",
    completed: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      toeatList: toeatItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderTabList()}
        <ul className="list-group list-group-flush border-top-0"></ul>
      </div>
    );
  }
}

export default App;
