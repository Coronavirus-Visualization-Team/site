/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, Styled, jsx, Box, Grid } from "theme-ui"
import FeaturedProject from './FeaturedProject'
import CoronaImg from './corona.jpg'

const ProjectPicker = () => {
    const [currentProject, setCurrent] = useState('')
    return (
        <Container
            sx={{
                p: 0,
                width: '100%',
                maxWidth: 'xl',
                display: 'inline-block',
                mb: 50
            }}>
            <Container
                sx={{
                    p: 3
                }}>
                <Grid width={['25%', '25%']}
                    gap={0}
                    sx={{
                        textAlign: 'center',
                    }}>
                    <Box sx={{ variant: 'styles.projectPicker' }}>Project 1</Box>
                    <Box sx={{ variant: 'styles.projectPicker' }}>Project 2</Box>
                    <Box sx={{ variant: 'styles.projectPicker' }}>Project 3</Box>
                    <Box sx={{ variant: 'styles.projectPicker' }}>Project 4</Box>
                </Grid>
            </Container>
            <FeaturedProject img={CoronaImg} />
        </Container>
    )
}

export default ProjectPicker