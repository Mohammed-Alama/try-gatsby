import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div style={menuStyle}>
    <ul style={ulStyle}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='blog'>Blog</Link></li>
      <li><Link to='services'>Services</Link></li>
      <li><Link to='about'>About</Link></li>
    </ul>
  </div>
)


const menuStyle = {
  background_color: "#f4f4f4",
  paddingTop: "10px",
}

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
}
export default Menu