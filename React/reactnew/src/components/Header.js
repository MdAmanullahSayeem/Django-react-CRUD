import React from "react"

const Header = ()=>{     //Header = ()=>{} == function Header(){}
	const headerStyle={
		padding:"20px",
		lineHeight:"2em",
		color:"red",
	}
	return(
		<header>
		    <h1 style={headerStyle}>Simple Todo App</h1>
		    <p style={{ fontSize: "19px" }}>
		      Please add to-dos item(s) through the input field
		    </p>
  		</header>
		)
} 
export default Header