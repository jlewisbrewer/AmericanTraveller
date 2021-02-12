import React from "react";
import "./index.css";
import Test from "./assets/Test.svg"
import USA_Counties from "./assets/USA_Counties.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counties = require("./data/counties.json");
    this.totalArea = 0;
    this.state = {
      selectedCounties: [],
      selectedCountiesArea: 0,
      selectedCountiesPercentage: 0,
    };
  }

  componentDidMount() {
    console.log(this.counties["Washington__DC"]);
  }

  render() {
    const selectedCountiesPercentage = this.state.selectedCountiesPercentage;
    return (
      <div className="App">
        <img src={USA_Counties} width='100%' height='100%' alt="map of US"></img>
        <h3>
          You have visited {selectedCountiesPercentage}% of the United States!
        </h3>
      </div>
    );
  }
}

export default App;
