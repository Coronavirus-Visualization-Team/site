/** @jsx jsx */
import React from "react"
import { Container, Box, NavLink, Avatar, Divider, jsx } from "theme-ui"
import { Link } from "gatsby"

export const Header = () => (
  <Box
    as="header"
    sx={{
      display: "flex",
      alignItems: "center",

      py: 5,
      "a+a": { ml: [3, 4] },
    }}
  >
    <Avatar src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/59452970_2349033995366694_4591158638847983616_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=-U2OiXh6Co4AX8kGpn0&oh=60485014190d57bd4b582de4f342db3a&oe=5ECCBE3C" />
    <Box sx={{ mx: "auto" }} />
    <Link to="/projects">
      <NavLink>Projects</NavLink>
    </Link>
    <Link to="/team">
      <NavLink>Our Team</NavLink>
    </Link>
    <Link to="/join">
      <NavLink>Join Us</NavLink>
    </Link>
    <Link to="/resources">
      <NavLink>Resources</NavLink>
    </Link>
  </Box>
)

export default ({ children }) => (
  <Container sx={{ maxWidth: "xl", margin: "auto", px: 3 }}>
    <Header />
    {children}
  </Container>
)
