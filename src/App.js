import React from "react";
import "./index.css";
import Test from "./assets/Test.svg"
// import {ReactComponent as Counties} from "./assets/CountiesTest.svg";
import SvgComponent from "./components/Counties";

const d3 = require("d3");


class App extends React.Component {
  constructor(props) {
    super(props);
    this.counties = require("./data/counties.json");
    this.totalArea = 9589190;
    this.state = {
      selectedCounties: [],
      selectedCountiesArea: 0,
      selectedCountiesPercentage: 0,
    };

    this.onMouseClick = this.onMouseClick.bind(this);
  }

  onMouseClick(e) {
    let county = e.target.id;

    console.log(county);
    console.log(this.counties[county]);
    let landArea = this.counties[county];

    if (landArea) {

      if (this.state.selectedCounties.includes(county)) {
        // unfill it
        let paths = d3.select("#county-group").selectAll("#" + county);
        paths.style("fill", "#d0d0d0");

        this.state.selectedCounties = this.state.selectedCounties.filter((value, ind, arr)=>{
          return value !== county;
        });
        this.state.selectedCountiesArea -= this.counties[county]
        this.setState({
          selectedCountiesPercentage: this.calculateSelectedCountiesPercentage(),
        });
      } else {
        // fill it
        this.state.selectedCounties.push(county);
        this.state.selectedCountiesArea += this.counties[county]   
        this.setState({
          selectedCountiesPercentage: this.calculateSelectedCountiesPercentage(),
        });  
        
        console.log(this.state.selectedCounties);
        console.log(this.state.selectedCountiesArea);
        console.log(this.state.selectedCountiesPercentage);
        let paths = d3.select("#county-group").selectAll("#" + county);

        paths.style("fill", "blue");
      
      }
    }
  }

  calculateSelectedCountiesPercentage() {
    return Math.round((this.state.selectedCountiesArea / this.totalArea) * 10000) / 100;
  }

  componentDidMount() {
    console.log(this.counties["Washington__DC"]);
  }

  render() {
    const selectedCountiesPercentage = this.state.selectedCountiesPercentage;
    return (
      <div className="App">
        < SvgComponent onMouseClick = {this.onMouseClick}/>
        <h3>
          You have visited {selectedCountiesPercentage}% of the United States!
        </h3>
      </div>
    );
  }
}

export default App;
