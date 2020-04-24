/** @jsx jsx */
import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { Container, Styled, jsx, Text, Divider, Grid } from "theme-ui"
import NavBackground from '../components/NavBackground'
import ProjectPicker from '../components/Projects/ProjectPicker'
import Tile from '../components/Projects/Tile'

export default () => (
    <>
        <NavBackground />
        <Container sx={{
            width: '100%', 
            maxWidth: 'xl'
        }}>
            <Container
                sx={{
                    fontSize: [2, 3],
                    position: 'relative',
                    bg: '#168CA6',
                    maxWidth: 'xl',
                    p: 4,
                    borderRadius: 'project',
                    height: ['fit-content', '500px'],
                    boxShadow: 'base'
                }}
            >
                <Text
                    sx={{
                        mb: '2rem',
                        fontWeight: '700'
                    }}>
                    Here are some of the featured work we're doing.
                </Text>
                <ProjectPicker />
            </Container>
        </Container>
        <Container
            sx={{
                maxWidth: 'xl',
            }}>
            <Grid width={['45%']}
                gap={['10%']}>
                <Tile />
                <Tile />
            </Grid>

        </Container>
    </>
)
