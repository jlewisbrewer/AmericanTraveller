import React from "react";
import "./index.css";
import SvgComponent from "./components/Counties";
import ReactTooltip from "react-tooltip";

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
    let target = e.target.id;
    let county = this.counties[target];
    try {
      // let paths = d3.select("#county-group").selectAll("#" + target);
      // paths.attr("data-tip", "test");
      // console.log(county);
      // if (county.name) {
      //   paths.attr("data-for", "showCountyName");
      // }
      if (county) {
        this.setState({
          selectedCounty: county,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onMouseClick(e) {
    let county = e.target.id;

    // console.log(county);
    // console.log(this.counties[county]);
    try {
      let landArea = this.counties[county].landarea;
      let paths = d3.select("#county-group").selectAll("#" + county);

      if (landArea) {
        if (this.state.selectedCounties.includes(county)) {
          // unfill it
          // let paths = d3.select("#county-group").selectAll("#" + county);
          // paths.style("fill", "#d0d0d0");

          // for (let p in paths._groups){
          //   p.className = 'unselected';
          // }

          paths.attr("class", "unselected");

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

          paths.attr("class", "selected");
          // for(let p in paths._groups){
          //   p.className = 'selected';
          // }
          // paths.style("fill", "blue");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  calculateSelectedCountiesPercentage() {
    return (
      Math.round((this.state.selectedCountiesArea / this.totalArea) * 10000) /
      100
    );
  }

  componentDidMount() {}

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
        <ReactTooltip id="showCountyName" place="top" effect="solid">
          {selectedCounty}
        </ReactTooltip>
        <h3>
          You have visited {selectedCountiesPercentage}% of the United States!
        </h3>
      </div>
    );
  }
}

export default App;
