import React from "react";
import "./index.css";
import Test from "./assets/Test.svg"
// import {ReactComponent as Counties} from "./assets/CountiesTest.svg";
import Counties from "./components/Counties";

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
        < Counties />
        <h3>
          You have visited {selectedCountiesPercentage}% of the United States!
        </h3>
      </div>
    );
  }
}

export default App;
