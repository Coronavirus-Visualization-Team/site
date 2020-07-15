/** @jsx jsx */
import React from "react"
import { Image, Box, jsx, Text, Grid, Container, useColorMode } from "theme-ui"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/visualizations');

const VizPage = props => {
  const vizData = props.data.viz.edges
  const breakingNewsData = props.data.breakingnews.edges
  const socioeconomicsData = props.data.socioeconomics.edges

  const [colorMode, setColorMode] = useColorMode();
  
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Helmet title="CVT | Visualizations" />
        <Text
            sx={{
              fontSize: [3, 4],
              maxWidth: ["100%", "65%"],
              m: "2vh 0vw"
            }}
          >
            Visualizations
        </Text>

        <Text
            sx={{
              fontSize: [1, 2],
              maxWidth: ["100%", "65%"],
              mb: "3em",
            }}
          >
           Our team has created empirical data visualizations that educate the public on the pandemic’s ongoing impact
           and display information from multiple, often overlooked angles such as climate implications, socioeconomic factors, and societal aspects.
        </Text>
      </Box>
      <Container
              sx={{
                position: "relative",
                // m: "8vh 0 0 0",
                width: "100%",
                minWidth: "100%",
              }}

      >
      <Text
        sx={{
          width: "100%",
          textAlign: "left",
          m: "1.5em 0 4vh 0",
          color: "primary",
          fontSize: [2, 3],

        }}
      >
        Breaking News
      </Text>
      </Container>
      <Grid
        gap={3}
        width={[300, null, 350]}
        sx={{
          justifyItems: ['center', 'unset'],
          position: "relative"
        }}
      >
        {breakingNewsData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href={data.link} target={data.linkTarget} rel="noopener noreferrer">
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: [300, 350],
                    mb: "1vh",
                    borderRadius: '10px',
                    boxShadow: "base",
                    "#overlay": {
                      opacity: 1
                    },
                  }}
                >
                  <Image src={data.image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: "72%",
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
                        top: '10%',
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
            fontSize: [2, 3],
            maxWidth: ["100%", "65%"],
            m: "4vh 0vw",
            color: "primary"
          }}
        >
          Socioeconomic Factors
      </Text>
      </Box>
      <Grid
        gap={3}
        width={[300, null, 350]}
        sx={{
          justifyItems: ['center', 'unset'],
          // borderBottom: '2px solid white'
        }}
      >
      {socioeconomicsData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <a href={data.link} target={data.linkTarget} rel="noopener noreferrer">
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: [300, 350],
                    mb: "1vh",
                    borderRadius: '10px',
                    boxShadow: "base",
                    "#overlay": {
                      opacity: 1
                    },
                  }}
                >
                  <Image src={data.image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: "72%",
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
                        top: '10%',
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
            fontSize: [2, 3],
            maxWidth: ["100%", "65%"],
            m: "4vh 0vw",
            color: "primary"
          }}
        >
          General
      </Text>
      </Box>
      <Grid
        gap={3}
        width={[300, null, 350]}
        sx={{
          justifyItems: ['center', 'unset'],
          // borderBottom: '2px solid white'
        }}
      >
      {vizData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <a href={data.link} target={data.linkTarget}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: [300, 350],
                    mb: "1vh",
                    borderRadius: '10px',
                    boxShadow: "base",
                    "#overlay": {
                      opacity: 1
                    },
                  }}
                >
                  <Image src={data.image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: "72%",
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
                        top: '10%',
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
            fontSize: [2, 3],
            maxWidth: "100%",
            m: "4vh 0vw",
            color: "primary"
          }}
        >
          Harvard CGA Projects
        </Text>

        <iframe title="CoViz Project Team" scrolling="no" frameborder="0" src="https://harvard-cga.maps.arcgis.com/home/webmap/embedGallery.html?displayapps=true&displayinline=true&group=6ee6c2a54beb432cae327c578923b11d" style={{width:'100%', height:'687px'}}></iframe>
      </Box>

      <a href="https://www.notion.so/8dd166b3e06349fd89696f73d0ca0470?v=7e0a467880384bce8b7d28641ca2faef" target="_blank" rel="noopener noreferrer" style={{color: 'primary', textDecoration: 'none'}}>
        <Text
          sx={{
              fontSize: [3, 4],
              maxWidth: "100%",
              color: "primary",
              textAlign: "left"
            }}
          >
          CVT Data Viz Dashboard on Notion &#187;
        </Text>
      </a>
    </>
  )
}
export default VizPage
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
              linkTarget
            }
          }
        }
      }
    },
    breakingnews: allFile(filter: { sourceInstanceName: { eq: "breakingnews" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              author
              image
              link
              linkTarget
            }
          }
        }
      }
    },
    socioeconomics: allFile(filter: { sourceInstanceName: { eq: "socioeconomics" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              author
              image
              link
              linkTarget
            }
          }
        }
      }
    },
  }
`
