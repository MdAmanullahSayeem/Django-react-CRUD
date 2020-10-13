import React from "react"
import ReactDOM from "react-dom"
//component file
import Container from "./new/Container"
import TodoContainer from "./components/TodoContainer"
import "./style.css"

ReactDOM.render(<TodoContainer />, document.getElementById("root"))
ReactDOM.render(<Container />, document.getElementById("root"))
