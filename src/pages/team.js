/** @jsx jsx */
import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { Styled, jsx, Text, Box, Image, Grid } from "theme-ui"
import { Helmet } from "react-helmet"

const TeamPage = (props) => {
  const teamData = props.data.team.edges;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Team" />
      <Text
        sx={{
          fontSize: [3, 4],
          alignItems: 'center',
          mb: 4
        }}
      >
        Executive Directors
      </Text>

        <Grid
        gap={2}
        width={[128, null, 192]}
        sx={{
          justifyItems: ['center', 'unset']
        }}
        >
          {teamData.map((item) => {
            const data = item.node.childMarkdownRemark.frontmatter;

            if(!data.executive) {
              return null;
            }

            return (
              <Box
                sx={{
                  position: 'relative',
                  width: [128, 192],
                  height: [128, 192],
                  borderRadius: '10px',
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
                    >{data.name}</Text>
                    <Text
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: [0, 1]
                      }}
                    >{data.position}</Text>
                  </Box>
                </Box>
              </Box>
            )
          })}
      </Grid>

      <Text sx={ { variant: "styles.headerText", mb: 4 } }>Members</Text>
      <Text
        sx={ { variant: "styles.bodyText" } }
      >

      {/** width={[ 128, null, 192 ]} */}
      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            const data = item.node.childMarkdownRemark.frontmatter;

            if(data.executive) {
              return null;
            }

            return (
              <Text>
                {data.name}
              </Text>
            )
          })}
      </Grid>
    </Text>
  </Box>
)};
export default TeamPage;



export const query = graphql`
query {
  team: allFile(filter: {sourceInstanceName: {eq: "team"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            name
            executive
            position
            image
        }
      }
    }
  }
},
}`
