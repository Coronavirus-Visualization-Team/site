/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, Styled, jsx, Box, Grid, Text, Image } from "theme-ui"
import CoronaImg from './corona.jpg'
 
const Tile = ({ title, img, slug }) => {
    return(
        <Box 
        onClick = {() => window.location.href = `/projects/${slug}`}
        sx = {{
            width: '100%',
            height: ['fit-content', '300px'],
            boxShadow: 'base',
            bg: 'white',
            p: [3,4],
            borderRadius: 'tile',
            color: 'black',
            mb: [0, 60]

        }}>
            <Text
                sx = {{
                    fontSize: [1, 2],
                    fontWeight: '600',
                    mb: '15px'
                }}>
                    {title}
            </Text>
            <Image src = {img}
                    sx = {{
                        width: ['350px', '100%'],
                        height: ['210px', '250px'],
                        borderRadius: 'tile',
                        boxShadow: 'base',
                        ml: [0, '10px'],
                        transition: '0.2s', 
                        '&:hover': {boxShadow: 'hover', cursor: 'pointer'}
                    }}
                    />
        </Box>
    )
}

export default Tile

