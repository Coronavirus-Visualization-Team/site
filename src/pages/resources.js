/** @jsx jsx */
import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { Styled, jsx, Text, Divider, Box, Embed } from "theme-ui"

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
        maxWidth: ["100%", "65%"]
      }}
    >
      Want to get involved in combating COVID-19?
    </Text>

    <Text
      sx={{
        fontSize: [1, 2],
        maxWidth: ["100%", "65%"]
      }}
    >
      Our team crowdsourced these resources and opportunities to learn new skills, join initiatives, and attend online events—all for free.
    </Text>
    
    <Box
      sx={{
        width: "100%",
        mt: 6
      }}
    >
      <Embed
        src="https://airtable.com/embed/shrviRYlIVs70A3gl?backgroundColor=teal"
        sx={{
          background: "transparent",
          border: "1px solid #ccc",
          height: [450, 350]
        }}
      />
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5
      }}
    >
      <Text
        sx={{
          fontSize: [3, 4],
          width: "100%",
          textAlign: "center",
          color: "darker"
        }}
      >
        Have suggestions?
      </Text>

      <Text
        sx={{
          fontSize: [2, 3],
          width: "100%",
          textAlign: "center",
          color: "slate"
        }}
      >
        Add to the list!
      </Text>
    </Box>

    <Box
      sx={{
        width: ["100%", "85%"],
        mt: 5,
        justifyContent: "center",
        alignItems: "center",
        mx: "auto"
      }}
    >
      <Embed
        // TODO: Replace this URL with the correct URL
        src="https://airtable.com/embed/shrviRYlIVs70A3gl?backgroundColor=teal"
        sx={{
          background: "transparent",
          border: "1px solid #ccc",
          height: [450, 350]
        }}
      />
    </Box>
  </Box>
)