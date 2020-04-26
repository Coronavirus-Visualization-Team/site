/** @jsx jsx */
import React, { useEffect } from "react"
import theme from "../gatsby-plugin-theme-ui"
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Container, Styled, jsx, Text, Divider, Grid } from "theme-ui"
import ProjectPicker from "../components/Projects/ProjectPicker"
import Tile from "../components/Projects/Tile"

const Projects = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  
  return (
    <>
      <Container
        sx={{
          width: "100%",
          maxWidth: "xl",
          mb: ["5em", "15em"],
        }}
      >
        <Container
          sx={{
            fontSize: [2, 3],
            position: "relative",
            bg: "#168CA6",
            maxWidth: "xl",
            p: 4,
            borderRadius: "project",
            height: ["fit-content", "500px"],
            boxShadow: "base",
          }}
        >
          <Text
            sx={{
              mb: "2rem",
              fontWeight: "700",
            }}
          >
            Here are some of the featured work we're doing.
        </Text>
          <ProjectPicker />
        </Container>
      </Container>
      <Container
        sx={{
          maxWidth: "xl",
        }}
      >
        {posts && 
        <Grid columns = {[2]} gap={[50, 50]}>
          {posts.map(({node: post}) => {
            return( <Tile title = {post.frontmatter.title}/>)
          })}
        </Grid>}
      </Container>
    </>
  )
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        allMarkdownRemark{
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                featured
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Projects data={data} count={count} />}
  />
)