/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Container, jsx, Text, Grid, Box } from "theme-ui"
import ProjectPicker from "../components/Projects/ProjectPicker"
import Tile from "../components/Projects/Tile"
import { Helmet } from "react-helmet"

const Projects = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Helmet title="CVT | Projects" />
      <Container
        sx={{
          width: "100%",
          maxWidth: "xl",
          mb: ["5em", "20em"],
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
              mb: "1rem",
              fontWeight: "700",
            }}
          >
            Here are some of the featured work we're doing.
          </Text>
          <ProjectPicker posts={posts}/>
        </Container>
      </Container>

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
    </>
  )
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        allMarkdownRemark (
          filter: { frontmatter: { templateKey: { eq: "project" } } },
          sort: { fields: [frontmatter___featured], order: DESC }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                slug
                title
                featured
                image
                label
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
