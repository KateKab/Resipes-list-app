import React from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";

ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));