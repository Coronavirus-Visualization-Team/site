/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, Styled, jsx, Box, Grid } from "theme-ui"

const Tile = () => {
    return(
        <Box 
        sx = {{
            width: '100%',
            height: '300px',
            boxShadow: 'base',
            bg: 'white',
            p: 5,
            borderRadius: 'project',
            color: 'black'

        }}>
            Project

        </Box>
    )
}

export default Tile

