/** @jsx jsx */
import React from 'react'
import { Container, Box, jsx } from "theme-ui"


const NavBackground = () => {
    return(
        <Container
        sx = {{
            position: 'absolute',
            top: '0',
            left: '0',
            background:'gradient',
            width: '100%',
            minWidth: '100%',
            height: '300px',
        }}>
        </Container>
    )
}

export default NavBackground