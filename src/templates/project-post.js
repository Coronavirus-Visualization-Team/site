import React from 'react'
import { graphql } from "gatsby"
import { Container, Styled, jsx, Text, Divider, Grid, Box, Image } from "theme-ui"

export default ({ data }) => {
    const { edges: posts} = data.allMarkdownRemark
    const { html, frontmatter} = posts[0].node
    // console.log(post)
    console.log(posts[0].node.html)
    console.log(data)
    return (
        <Container
            sx = {{
                maxWidth: 'xl',
                width: '100%',
                position: 'relative',
                p: 0
            }}>
            <Text sx = {{
                fontSize: [5, 6]
            }}>
                {frontmatter.title}
            </Text>

            <Divider sx = {{
                color: 'white'
            }}/>
            <Image sx = {{
                mt: 20
            }}
            src = {frontmatter.image}/>
            <Text sx = {{
                color: 'black',
                mt: 50
            }}>
                {html.replace(/<p>/g,'').replace('</p>','')}
            </Text>
        </Container>
    )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: {frontmatter: { slug: { eq: $slug } } }) {
        edges{
            node{
                html
                frontmatter {
                    title
                    image
                }
            }
        }
    } 
  }
`