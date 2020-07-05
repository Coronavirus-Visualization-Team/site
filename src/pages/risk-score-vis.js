/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text, useColorMode } from "theme-ui"
import Iframe from 'react-iframe'
import { Helmet } from "react-helmet"

const RiskScoreModelPage = props => {
  const vizData = props.data.viz.edges
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Helmet title="CVT | Risk Score Model" />
        <Text
          sx={{
            fontSize: [3, 4],
            maxWidth: ["100%", "65%"],
            m: "2vh 0vw"
          }}
        >
          Risk Score Model
                    </Text>

        <Text
          sx={{
            fontSize: [1, 2],
            maxWidth: ["100%", "65%"],
            mb: "2vh"
          }}
        >
          Check out this sample of our published work.
                    </Text>
      </Box>

      <Iframe url="risk_score_viz.html"
        width="450px"
        height="450px"
        id="riskScoreId"
        className="riskScore"
        display="initial"
        position="relative" />
      <Grid
        gap={3}
        width={[300, null, 350]}
        sx={{
          justifyItems: ['center', 'unset']
        }}
      >
        {vizData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: [300, 350],
                    mb: "1vh",
                    borderRadius: '10px',
                    boxShadow: "base",
                    ":hover > #overlay": {
                      opacity: 1
                    },
                  }}
                >
                  <Image src={data.image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      borderRadius: '10px',
                      transition: 'ease-in-out 0.12s',
                      backgroundColor: 'black',
                      opacity: 0
                    }}
                    id="overlay"
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '7px',
                        left: '10px',
                      }}
                      id="text"
                    >
                      <Text
                        sx={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: [0, 1]
                        }}
                      >
                        {data.name}
                      </Text>
                      <Text
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: [0, 1]
                        }}
                      >
                        {data.author}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </a>
            </Box>
          )
        })}
      </Grid>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Text
          sx={{
            fontSize: [3, 4],
            maxWidth: "100%",
            m: "2vh 0vw",
            color: "primary"
          }}
        >
          Harvard CGA Project Visualizations
                      </Text>

        <iframe title="CoViz Project Team" scrolling="no" frameborder="0" src="https://harvard-cga.maps.arcgis.com/home/webmap/embedGallery.html?displayapps=true&displayinline=true&group=6ee6c2a54beb432cae327c578923b11d" style={{ width: '100%', height: '687px' }}></iframe>
      </Box>
    </>
  )
}
export default RiskScoreModelPage
export const query = graphql`
                query {
                  viz: allFile(filter: { sourceInstanceName: { eq: "viz" } }) {
                    edges {
                      node {
                        childMarkdownRemark {
                          frontmatter {
                            name
                            author
                            image
                            link
                          }
                        }
                      }
                    }
                  }
                }
              `
