import React from 'react'
import { graphql } from "gatsby"
import { Container, Text, Divider, Image } from "theme-ui"
import { Helmet } from "react-helmet"

export default ({ data }) => {
    const { edges: posts} = data.allMarkdownRemark
    const { html, frontmatter} = posts[0].node
    return (
        <>
        <Helmet title={frontmatter.title} />
        <Container
            sx = {{
                maxWidth: 'xl',
                width: '100%',
                position: 'relative',
                p: 0
            }}>
            <Text sx = {{
                fontSize: [4, 5]
            }}>
                {frontmatter.title}
            </Text>

            <Divider sx = {{
                color: 'white'
            }}/>
            <Image sx = {{
                mt: 20,
                width: '100%',
                borderRadius: 'project',
                boxShadow: 'base',
            }}
            src = {`../${frontmatter.image}`}/>
            <Text sx = {{
                color: 'black',
                textAlign: 'center',
                mt: '2vh'
            }}>
                {frontmatter.label}
            </Text>
            <Text sx = {{
                color: 'black',
                mt: 50
            }}>
                {html.replace(/<p>/g,'').replace('</p>','')}
            </Text>
            <Text sx = {{
                color: 'slate',
                mt: 50
            }}>
                <a href={frontmatter.link} target="_blank" style={{color : 'black'}} >{frontmatter.linkTitle}</a>
            </Text>
        </Container>
        </>
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
                    label
                    link
                    linkTitle
                }
            }
        }
    }
  }
`
