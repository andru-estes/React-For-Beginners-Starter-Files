import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // Set new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: fishes });
  };

  addToOrder = (key) => {
    // Take copy of state
    const order = { ...this.state.order };
    // Add to order or update total of each fish
    order[key] = order[key] + 1 || 1;
    // Call setState to update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Daily" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
