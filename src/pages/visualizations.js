/** @jsx jsx */
import React from "react"
import { Image, Box, jsx, Text, Grid } from "theme-ui"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const VizPage = props => {
  const vizData = props.data.viz.edges
  console.log("here")
  console.log(vizData)
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        Visualizations
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
    <Grid
      gap={3}
      width={[300, null, 350]}
      sx={{
        justifyItems: ['center', 'unset']
      }}
    >
      <a href="https://public.tableau.com/profile/lucas.chu#!/vizhome/CoronavirusGeorgiaApril1stSnapshot/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer">
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
          <Image src={gaImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
                COVID-19 in Georgia
            </Text>
              <Text
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: [0, 1]
                }}
              >
                Viz Author: Lucas Chu
              </Text>
            </Box>
          </Box>
        </Box>
      </a>

      <a href="https://public.tableau.com/profile/lucas.chu#!/vizhome/state_ui_claims/Dashboard1" target="_blank" rel="noopener noreferrer">
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
          <Image src={uiImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
                Unemployment Insurance Claims
            </Text>
              <Text
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: [0, 1]
                }}
              >
                Viz Author: Lucas Chu
              </Text>
            </Box>
          </Box>
        </Box>
      </a>
      <a href="https://public.tableau.com/profile/kevin.yang5116#!/vizhome/COVID-19Oil/Dashboard1" target="_blank" rel="noopener noreferrer">
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
          <Image src={oilImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
                COVID-19's Impact on American Oil
            </Text>
              <Text
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: [0, 1]
                }}
              >
                Viz Author: Kevin Yang
              </Text>
            </Box>
          </Box>
        </Box>
      </a>

      <a href="https://public.tableau.com/profile/lucas.chu#!/vizhome/NYCMay8/Sheet1" target="_blank" rel="noopener noreferrer">
        <Box
          sx={{
            fontSize: [3, 4],
            maxWidth: ["100%", "65%"],
            m: "2vh 0vw"
          }}
        >
<<<<<<< HEAD
          <Image src={nycPosImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
                NYC Cumulative Positive Tests Per 1000 People as of May 8th
            </Text>
              <Text
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: [0, 1]
                }}
              >
                Viz Author: Lucas Chu
              </Text>
            </Box>
          </Box>
        </Box>
      </a>
      <a href="https://public.tableau.com/profile/ian.chen#!/vizhome/COVIDEconomicImpacts4102020/AUU" target="_blank" rel="noopener noreferrer">
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
          <Image src={unemploymentImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
                Insured Unemployment - Percentage of Labor Force (March 19 - April 9)
            </Text>
              <Text
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: [0, 1]
                }}
              >
                Viz Author: Ian Chen
              </Text>
            </Box>
          </Box>
        </Box>
      </a>

      <a href="https://public.tableau.com/profile/camden.shultz#!/vizhome/HarvardCoronavirusTeam-Dashboard1LiveUpdate/PositiveDeathsRecovered" target="_blank" rel="noopener noreferrer">
        <Box
=======
          Visualizations
      </Text>

        <Text
>>>>>>> 4058f5b92578db4e1682ac5c629f9ead2def0561
          sx={{
            fontSize: [1, 2],
            maxWidth: ["100%", "65%"],
            mb: "2vh"
          }}
        >
          Check out this sample of our published work.
      </Text>
      </Box>
      <Grid
        gap={3}
        width={[300, null, 350]}
        sx={{
          justifyItems: ['center', 'unset']
        }}
      >
        {vizData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

<<<<<<< HEAD
      <a href="https://public.tableau.com/profile/melissa.jones3270#!/vizhome/Corona-virusCasesinMilwaukeeCityWI-AnExplorationofRacialDemographicsandDiseaseCtd_/Dashboard2" target="_blank" rel="noopener noreferrer">
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
          <Image src={demImg} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
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
=======
          return (
>>>>>>> 4058f5b92578db4e1682ac5c629f9ead2def0561
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href={data.link} target="_blank">
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
<<<<<<< HEAD
          </Box>
        </Box>
      </a>
    </Grid>
  </>
)
=======
          )
        })}
      </Grid>
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
            }
          }
        }
      }
    }
  }
`
>>>>>>> 4058f5b92578db4e1682ac5c629f9ead2def0561
