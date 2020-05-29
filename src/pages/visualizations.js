/** @jsx jsx */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Box, Container, Styled, jsx, Text, Divider, Grid } from "theme-ui"
import Tile from "../components/Visualizations/Tile"
import { Helmet } from "react-helmet"

const Visualizations = ({ visdata }) => {
  const { edges: posts } = visdata.allMarkdownRemark

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
          maxWidth: ["100%", "65%"]
        }}
      >
        Check out the visualizations we've been working on.
      </Text>

      <Container
        sx={{
          maxWidth: "xl",
        }}
      >
        {posts && (
          <Grid columns={[1, 2]} gap={[25, 50]}>
            {posts.map(({ node: post }) => {
              return <Tile
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              img={post.frontmatter.image} />
            })}
          </Grid>
        )}
      </Container>
      </Box>
    </>
  )
}

Visualizations.propTypes = {
  visdata: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query VizQuery {
        allMarkdownRemark (
          filter: { frontmatter: { templateKey: { eq: "viz" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                slug
                title
                image
                label
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(visdata, viscount) => <Visualizations visdata={visdata} viscount={viscount} />}
  />
)
