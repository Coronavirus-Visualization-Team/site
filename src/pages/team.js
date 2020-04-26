/** @jsx jsx */
import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { Styled, jsx, Text, Box, Image, Grid } from "theme-ui"

export default () => (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Text
        sx={{
          fontSize: [3, 4],
          alignItems: 'center'
        }}
      >
        Executive Directors 
        </Text>
        
        <Grid 
        gap={2}
        columns={[ 2, null, 4 ]}
        >
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
      </Grid>
      <Text sx={ { variant: "styles.headerText" } }>Members</Text>
      <Text
        sx={ { variant: "styles.bodyText" } }
        >
      <Grid width={[ 128, null, 192 ]}>
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        <Box>
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
            FirstName LastName
        </Box>        
        </Grid>
        </Text>
      </Box>
      )
