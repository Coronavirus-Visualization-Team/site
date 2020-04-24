/** @jsx jsx */
import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { Styled, jsx, Text } from "theme-ui"

export default () => (
  <>
    <Divider />
    <Text
      sx={{
        fontSize: [2, 3],
      }}
    >
      We're the Coronavirus Visualization Team, a crowdsourced student network
      of data scientists and analysts, developers, and communicators working to
      better visualize and share the impacts, present and future, of COVID-19.
    </Text>
  </>
)
