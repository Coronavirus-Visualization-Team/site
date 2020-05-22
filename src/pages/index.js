/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import theme from "../gatsby-plugin-theme-ui"
import { Styled, jsx, Text, Divider, Box, Container, Grid, Image } from "theme-ui"
import Tile from "../components/Projects/Tile"

const IndexPage = (props) => {
  const partnersData = props.data.partners.edges;
  const projectsData = props.data.projects.edges;

  console.log("partners")
  console.log(partnersData)

  return (
    <Box
      sx={{
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <Helmet title="CVT | Home" />
      <Text
        sx={{
          fontSize: [1, 3],
          maxWidth: ["100%", "90%"],
          my: "4vh",
          p: 4,
          borderTop: '1px solid white',
          borderBottom: '1px solid white'
        }}
      >
        We're the <b>Coronavirus Visualization Team</b>,  a crowdsourced student network of data scientists and analysts, developers, and communicators working to better visualize and share the impacts, present and future, of COVID-19.
      </Text>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 6,
          pt: 4,
          color: "black",
          fontSize: [3, 4]
        }}
      >
        Projects
      </Text>

      <Container
        sx={{
          maxWidth: "xl",
          pt: 5
        }}
      >
        <Grid width={["45%"]} gap={["10%"]}>
          {/** TODO: Use CMS to get 4 projects and put them here */}
          {projectsData.slice(0,4).map((item) => {
            const data = item.node.childMarkdownRemark.frontmatter;
            return (
              <Tile title={data.title} img={data.image} slug={data.slug}/>)
          })}
        </Grid>
      </Container>

      <Link
        sx={{
          width: "100%",
          textAlign: "center",
          mt: '6.5em',
          color: "black",
          fontSize: [1, 2],
          textDecoration: "none"
        }}
        to="/projects"
      >
        See More &#187;
      </Link>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 4,
          color: "black",
          fontSize: [3, 4]
        }}
      >
        Our Partners
      </Text>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 4
        }}
      >
        {partnersData.map((item) => {
          const data = item.node.childMarkdownRemark.frontmatter;

          console.log(data)

          return (
            <Box
              sx={{
                width: ["45%", "30%"],
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a href={data.website} target="_blank">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 3,
                    objectFit: "contain"
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Box>

      <Divider
        sx={{
          my: 5
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            color: "black",
            fontSize: [3, 4]
          }}
        >
          Join Us
        </Text>

        <Text
          sx={{
            color: "slate",
            fontSize: [1, 2],
            my: 4,
            maxWidth: ["100%", "65%"]
          }}
        >
          We’re looking for talented and driven individuals and organizations to join our team remotely.
        </Text>

        <Link
          sx={{
            color: "black",
            fontSize: [1, 2],
            textDecoration: "none"
          }}
          to="/join"
        >
          Learn More &#187;
        </Link>
      </Box>
    </Box>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    partners: allFile(filter: {sourceInstanceName: {eq: "partners"}}) {
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
  },
  projects: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}} limit: 4) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
            slug
            image
        }
      }
    }
  }
},
}`
