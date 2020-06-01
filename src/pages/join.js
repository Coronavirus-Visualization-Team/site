/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text } from "theme-ui"
import HeaderImage from "../components/Join/HeaderImage"
import { Helmet } from "react-helmet"
import HarvardLogo from "../../static/img/harvard.png"
import BerkeleyLogo from "../../static/img/berkeley.png"
import StanfordLogo from "../../static/img/stanford.png"
import ColumbiaLogo from "../../static/img/columbia.png"
import MitLogo from "../../static/img/mit.png"
import JohnHopkinsLogo from "../../static/img/johnhopkins.png"
import GtLogo from "../../static/img/gt-seal.png"

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
          mt: "6vh"
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
          py: 45,
        }}
      >
        <Grid width={["10%"]} gap={["2%"]}>
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
            src={GtLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["90%", "90%"],
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
              mt: 1,
              objectFit: "contain",
              width: ["95%", "95%"],
            }}
          />
          <Image
            src={JohnHopkinsLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["65%", "65%"],
            }}
          />
        </Grid>
      </Box>

      <Text sx={{ variant: "styles.subHeader", py: 15, mb: 2 }}>
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
              <a href={data.website} target="_blank">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 2,
                    objectFit: "contain",
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Grid>
      <Text sx={{ variant: "styles.headerText", mt: "4vh"}}>Individuals</Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We're looking for driven and talented individuals to join our team
        remotely. Learn more about our teams and ongoing
        projects <a style={{color : 'black', textDecoration: 'none'}} href="https://docs.google.com/document/d/1SHfrZSzl9UMZUQSgxhle_XpVIRJ369YDQTp97ebLeNk/edit?usp=sharing" target="_blank">here.</a>
      </Text>
      <Button
        as="a"
        href="http://bit.ly/CVTapply"
        target="_blank"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "#168CA6",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Join Us
      </Button>

      <Text sx={{ variant: "styles.headerText", mt: "2vh" }}>Organizations</Text>
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
          background: "#168CA6",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Email Us
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
              website
            }
          }
        }
      }
    }
  }
`
