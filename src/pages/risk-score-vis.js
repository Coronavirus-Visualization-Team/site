/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text, useColorMode, Container , Embed} from "theme-ui"
import Iframe from 'react-iframe'
import { Helmet } from "react-helmet"

const RiskScorePage = props => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Risk Score Model" />
      <Text
        sx={{
          fontSize: [3, 4],
          maxWidth: ["100%", "65%"],
          m: "2vh 0vw"
        }}
      >
      COVID-19 Risk Score Model
      </Text>

      <Text
        sx={{
          fontSize: [1, 2],
          //maxWidth: ["100%", "65%"],
          mb: "2vh"
        }}
      >
        During the ongoing COVID-19 pandemic, different counties
        in the US are impacted and at risk in various ways. The
        Risk Score Model designed by Coronavirus Visualizations Team
        (CVT) analyzes which US counties are at higher risk of
        contracting coronavirus than others and might need support
        from other communities to fight this health crisis.
      </Text>

      <Box
        sx={{
          width: "100%",
          mt: 6
        }}
      >
        <Embed
          src={'/risk_score_viz.html'}
          sx={{
            background: "transparent",
            border: "1px solid #ccc",
            height: [450, 350]
          }}
        />
      </Box>
    </Box>
 
    /*  <Text
        sx={{
          fontSize: [2, 3],
          maxWidth: ["100%", "65%"],
          mb: 3,
          mt: 3,
        }}
      >
      As of now, these counties are at the highest and lowest risk of
      having COVID-19 health crisis based on their respective risk 
      scores shown in the model. 
    </Text>
    */

  )
  
    //return (
    //<Iframe url="risk-score-vis"
    //width="100%"
    //height="786px"
    //display="initial"
    //position="relative"/>
  //)
}

export default RiskScorePage;
