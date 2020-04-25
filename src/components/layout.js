/** @jsx jsx */
import React from "react"
import { Container, Box, NavLink, Avatar, Divider, jsx, Image } from "theme-ui"
import { Link } from "gatsby"
import Logo from "./cvt-logo.svg"
export const Header = () => (
  <Box
    as="header"
    sx={{
      display: "flex",
      alignItems: "center",
      py: 4,
      "a+a": { ml: [3, 4] },
      zIndex: 10,
      position: "relative",
    }}
  >
    <Image
      sx={{
        width: "10em",
        height: "auto",
      }}
      src={Logo}
    />
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

export const NavBackground = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        background: "gradient",
        width: "100%",
        minWidth: "100%",
        height: "300px",
      }}
    ></Container>
  )
}

export default ({ children }) => (
  <Container sx={{ maxWidth: "xl", margin: "auto", px: 3 }}>
    <Header />
    <NavBackground />
    {children}
  </Container>
)
