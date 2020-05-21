/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text } from "theme-ui"
import HeaderImage from "../components/Join/HeaderImage"
import { Helmet } from "react-helmet"
import HarvardLogo from "../../static/img/harvard.png"
import BerkeleyLogo from "../../static/img/berkeley.png"
import CmuLogo from "../../static/img/cmu.png"
import StanfordLogo from "../../static/img/stanford.png"
import ColumbiaLogo from "../../static/img/columbia.png"
import MitLogo from "../../static/img/mit.png"

const JoinPage = props => {
  const partnersData = props.data.partners.edges
  console.log("here")
  console.log(partnersData)
  return (
    <>
      <Helmet title="CVT | Join" />
      <HeaderImage />
      <Text
        sx={{
          variant: "styles.headerText",
        }}
      >
        Our mission.
      </Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We collaborate on data visualization and analytics projects, economic
        research, and policy writing to better inform government entities on
        the impact of COVID-19, clear misconceptions, and the good that is happening.
      </Text>

      <Text sx={{ variant: "styles.headerText" }}>
        Let’s accomplish things together.
      </Text>
      <Text sx={{ variant: "styles.subHeader" }}>
        Join our global organization comprised of students from these institutions and
        more:
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          py: [25, 35, 45],
        }}
      >
        <Grid width={["15%"]} gap={["2%"]}>
          <Image
            src={StanfordLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["65%", "60%"],
            }}
          />
          <Image
            src={BerkeleyLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["85%", "85%"],
            }}
          />
          <Image
            src={CmuLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "90%"],
            }}
          />
          <Image
            src={HarvardLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "90%"],
            }}
          />
          <Image
            src={MitLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "90%"],
            }}
          />
          <Image
            src={ColumbiaLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "95%"],
            }}
          />
        </Grid>
      </Box>

      <Text sx={{ variant: "styles.subHeader", py: 15 }}>
        We’re also partnered with these organizations:{" "}
      </Text>
      <Grid width={["25%"]} gap={["2%"]}>
        {partnersData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={data.image}
                alt={data.name}
                sx={{
                  mb: 2,
                  objectFit: "contain",
                }}
              />
            </Box>
          )
        })}
      </Grid>
      <Text sx={{ variant: "styles.headerText", mt: "2vh"}}>Individuals</Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We're looking for driven and talented individuals to join our team
        remotely. Learn more about our teams and ongoing
        projects <a style={{color : 'black', textDecoration: 'none'}} href="https://docs.google.com/document/d/1SHfrZSzl9UMZUQSgxhle_XpVIRJ369YDQTp97ebLeNk/edit?usp=sharing" target="_blank">here.</a>
      </Text>
      <Button
        as="a"
        href="http://bit.ly/CVT-apply"
        target="_blank"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "gradient",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Join Us
      </Button>

      <Text sx={{ variant: "styles.headerText" }}>Organizations</Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We’re looking to form partnerships and project collaborations with
        organizations that either have data we can use or seek data. We welcome
        organizations who are willing to provide mentorship and resources to
        help us fulfill our mission.{" "}
      </Text>
      <Button
        as="a"
        href="mailto:coronavirusvisualizationteam@gmail.com"
        target="_blank"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "gradient",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Join Us
      </Button>
    </>
  )
}
export default JoinPage
export const query = graphql`
  query {
    partners: allFile(filter: { sourceInstanceName: { eq: "partners" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image
            }
          }
        }
      }
    }
  }
`
