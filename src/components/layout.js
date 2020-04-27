/** @jsx jsx */
import React from "react"
import { Container, Box, NavLink, Avatar, Divider, jsx, Image, Text, Input, Button } from "theme-ui"
import { Link } from "gatsby"
import Logo from "./cvt-logo.svg"

import TwitterLogo from "./social-icons/Twitter.png"
import InstagramLogo from "./social-icons/Instagram.png"
import MailLogo from "./social-icons/Mail.png"
import GithubLogo from "./social-icons/GitHub.png"
import MediumLogo from "./social-icons/Medium.png"
import LinkedInLogo from "./social-icons/LinkedIn.png"

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
    <Link to="/">
    <Image
      sx={{
        width: "10em",
        height: "auto",
      }}
      src={Logo}
    />
    </Link>
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
        height: ["400px", "450px"],
      }}
    ></Container>
  )
}

export const Footer = () => (
  <Box
    as="footer"
    sx={{
      display: "flex",
      flexDirection: "column",
      py: 4,
      mt: 4,
      "a+a": { ml: [3, 4] },
      zIndex: 10,
      position: "relative",
    }}
  >
    <Divider
    sx={{
      mb: 4
    }} />

    <Text
      sx={{
        fontSize: [2, 3],
        color: "black",
      }}>
      Stay Updated
    </Text>

    <Box
      as="form"
      action="https://harvard.us19.list-manage.com/subscribe/post"
      method="POST"
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        alignItems: [null, "center"],
        justifyContent: ["center", null],
        py: 4
      }}
    >
      {/** Mailchimp Identifiers */}
      <Input type="hidden" name="u" value="296f4b87de1255e43330d3eed" />
      <Input type="hidden" name="id" value="fd200b5e7b" />

      <Input 
        placeholder="First Name"
        name="MERGE1"
        id="MERGE1"
        sx={{
          color: "slate",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2"
        }}
      />

      <Input 
        placeholder="Last Name"
        name="MERGE2"
        id="MERGE2"
        sx={{
          color: "slate",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2"
        }}
      />

      <Input 
        placeholder="Email"
        name="MERGE0"
        id="MERGE0"
        sx={{
          color: "slate",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2"
        }}
      />

      <Button
        type="submit"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: 'white',
          background: 'gradient',
          borderRadius: 'button',
          boxShadow: 'base',
          flex: "1"
        }}
      >
        Subscribe
      </Button>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column"],
          alignItems: ["center", "flex-start"],
        }}
      >
        <Image 
          sx={{
            // vvv To turn logo black
            filter: "invert(100%)",
            maxWidth: 200
          }}
          src={Logo} />

        <Text
          sx={{
            fontSize: [1, 2],
            color: "darker",
          }}>
            Coronavirus Visualization Team
        </Text>

        <Link to="/privacy"
          sx={{
            fontSize: [0, 1],
            color: "dark",
            textDecoration: "none"
          }}
        >
          Privacy Policy
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: ["row"],
          flexWrap: "wrap",
          justifyContent: ["center", null],
          alignItems: [null, "center"],
          ml: [null, "auto"],
          pt: [4, 0],
          maxWidth: [null, "300px"]
        }}
      >

        <SocialIcon link="https://instagram.com/joincvt" image={InstagramLogo} />
        <SocialIcon link="https://twitter.com/joincvt" image={TwitterLogo} />
        <SocialIcon link="mailto:coronavirusvisualizationteam@gmail.com" image={MailLogo} />
        <SocialIcon link="https://linkedin.com/company/coronavirus-visualization-team" image={LinkedInLogo} />
        <SocialIcon link="https://medium.com/coronavirus-visualization-team" image={MediumLogo} />
        <SocialIcon link="https://github.com/Coronavirus-Visualization-Team" image={GithubLogo} />

      </Box>
    </Box>
  </Box>
)

// Social icons for us in footer
const SocialIcon = (props) => {
  return (
    <Button 
      as="a"
      href={props.link}
      target="_blank"
      sx={{
        background: 'gradient',
        borderRadius: 'button',
        boxShadow: 'base',
        width: 60,
        height: 60,
        p: "1.05em",
        ml: [2, 4],
        mr: [2, null],
        my: 2,
        display: 'flex', 
        alignItems: 'center'
    }}>
      <Image src={props.image} />
    </Button>
  )
}

export default ({ children }) => (
  <Container sx={{ maxWidth: "xl", margin: "auto", px: 3 }}>
    <Header />
    <NavBackground />
    {children}
    <Footer />
  </Container>
)
