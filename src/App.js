import React, { Component } from "react";
import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import "./style.css";

class App extends Component {
  render(){
    return (
      <div>
        {/* Props in Functional Component */}
        <Greet name="Bruce" heroName="Batman">
          <p>Children Props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman">
          <button>Action</button>
        </Greet>

        {/* Props in Class Component */}
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />

      </div>
    );
  }
  
}

export default App;
