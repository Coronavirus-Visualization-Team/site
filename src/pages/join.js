/** @jsx jsx */
import React from "react"
import { Box, Button, Container, Grid, Image, jsx, Text } from "theme-ui"
import HeaderImage from "../components/Join/HeaderImage"

export default () => (
  <>
    <HeaderImage />
    <Text
      sx={{
        variant: "styles.headerText",
      }}
    >
      Our mission.
    </Text>
    <Text sx={{ variant: "styles.bodyText" }}>
      We collaborate on data visualization and analytics projects, economic
      research, and policy writing to better inform and government entities on
      the impact of COVID-19, clear misconceptions, and show the good that is
      happening.
    </Text>

    <Text sx={{ variant: "styles.headerText" }}>
      Let’s accomplish things together.
    </Text>
    <Text sx={{ variant: "styles.subHeader" }}>
      Join our global organization comprised of students from institutions and
      more:
    </Text>
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        py: 25,
      }}
    >
      <Grid width={["15%"]} gap={["2%"]}>
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
        <Image src="https://placehold.it/1708x1152" />
      </Grid>
    </Box>

    <Text sx={{ variant: "styles.subHeader", py: 15 }}>
      We’re also partnered with these organizations:{" "}
    </Text>
    <Grid width={["25%"]} gap={["2%"]}>
      <Image src="https://placehold.it/1708x1152" />
      <Image src="https://placehold.it/1708x1152" />
      <Image src="https://placehold.it/1708x1152" />
      <Image src="https://placehold.it/1708x1152" />
      <Image src="https://placehold.it/1708x1152" />
      <Image src="https://placehold.it/1708x1152" />
    </Grid>
    <Text sx={{ variant: "styles.headerText" }}>Individuals</Text>
    <Text sx={{ variant: "styles.bodyText" }}>
      We're looking for driven and talented individuals to join our team
      remotely. Learn more about our teams here and our current, ongoing
      projects here.
    </Text>
    <Button
      as="a"
      href="https://google.com"
      sx={{
        fontSize: [14, 18],
        px: 3,
        bg: "white",
        background: "gradient",
        borderRadius: "button",
        boxShadow: "base",
        flex: "1",
      }}
    >
      Join Us
    </Button>

    <Text sx={{ variant: "styles.headerText" }}>Organizations</Text>
    <Text sx={{ variant: "styles.bodyText" }}>
      We’re looking to form partnerships and project collaborations with
      organizations that either have data we can use or seek data. We welcome
      organizations who are willing to provide mentorship and resources to help
      us fulfill our mission.{" "}
    </Text>
    <Button
      as="a"
      href="https://google.com"
      sx={{
        fontSize: [14, 18],
        px: 3,
        bg: "white",
        background: "gradient",
        borderRadius: "button",
        boxShadow: "base",
        flex: "1",
      }}
    >
      Join Us
    </Button>
  </>
)
