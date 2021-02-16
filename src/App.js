import React from "react";
import "./index.css";
import SvgComponent from "./components/Counties";

const d3 = require("d3");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counties = require("./data/counties.json");
    this.totalArea = 9589190;
    this.state = {
      selectedCounty: this.counties[0],
      selectedCounties: [],
      selectedCountiesArea: 0,
      selectedCountiesPercentage: 0,
    };

    this.onMouseClick = this.onMouseClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(e) {
    let county = this.counties[e.target.id];
    if (county) {
      this.setState({
        selectedCounty: county,
      });
    }
  }

  onMouseClick(e) {
    let county = e.target.id;

    console.log(county);
    console.log(this.counties[county]);
    try {
      let landArea = this.counties[county].landarea;

      if (landArea) {
        if (this.state.selectedCounties.includes(county)) {
          // unfill it
          let paths = d3.select("#county-group").selectAll("#" + county);
          paths.style("fill", "#d0d0d0");

          this.state.selectedCounties = this.state.selectedCounties.filter(
            (value, ind, arr) => {
              return value !== county;
            }
          );
          this.state.selectedCountiesArea -= this.counties[county].landarea;
          this.setState({
            selectedCountiesPercentage: this.calculateSelectedCountiesPercentage(),
          });
        } else {
          // fill it
          this.state.selectedCounties.push(county);
          this.state.selectedCountiesArea += this.counties[county].landarea;
          this.setState({
            selectedCountiesPercentage: this.calculateSelectedCountiesPercentage(),
          });

          let paths = d3.select("#county-group").selectAll("#" + county);

          paths.style("fill", "blue");
        }
      }
    } catch (TypeError) {
      console.log("type error");
    }
  }

  calculateSelectedCountiesPercentage() {
    return (
      Math.round((this.state.selectedCountiesArea / this.totalArea) * 10000) /
      100
    );
  }

  componentDidMount() {
    console.log(this.counties["Washington__DC"]);
  }

  render() {
    const selectedCountiesPercentage = this.state.selectedCountiesPercentage;
    const selectedCounty = this.state.selectedCounty
      ? this.state.selectedCounty.name + ", " + this.state.selectedCounty.state
      : null;
    return (
      <div className="App">
        <SvgComponent
          onMouseClick={this.onMouseClick}
          onMouseOver={this.onMouseOver}
        />
        <h2>{selectedCounty}</h2>
        <h3>
          You have visited {selectedCountiesPercentage}% of the United States!
        </h3>
      </div>
    );
  }
}

export default App;
