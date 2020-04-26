/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, jsx, Image, Button } from "theme-ui"

const FeaturedProject = ({ img }) => {
    return (
        <Container
            sx={{
                p: 0,
                maxWidth: 'xl',
                position: 'relative',
            }}>
            <Image src={img}
                sx={{
                    width: '100%',
                    borderRadius: 'project',
                    height: 'auto',
                    boxShadow: 'base',
                    objectFit: 'cover'
                }} >

            </Image>
            <Button sx={{
                fontSize: [10, 18],
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: 4,
                px: 3,
                bg: 'white',
                background: 'gradient',
                borderRadius: 'button',
                boxShadow: 'base',
                transition: '0.2s', 
                '&:hover': {boxShadow: 'hover', cursor: 'pointer'}
            }}
                mr={2}>Learn More</Button>
        </Container>
    )
}

export default FeaturedProject