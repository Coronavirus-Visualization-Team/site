/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, Text, Divider, Box, Container, Grid, Image, useColorMode } from "theme-ui"
import Tile from "../components/Projects/Tile"

import ReactGA from 'react-ga';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/');

const IndexPage = (props) => {
  const partnersData = props.data.partners.edges;
  const projectsData = props.data.projects.edges;

  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box
      sx={{
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <Helmet title="CVT | Home" />
      <Text
        sx={{
          fontSize: [1, 3],
          maxWidth: ["100%", "90%"],
          my: "4vh",
          p: 4,
          borderTop: '1px solid white',
          borderBottom: '1px solid white'
        }}
      >
        We're the <b>Coronavirus Visualization Team</b>,  a crowdsourced student network of data scientists and analysts, developers, and communicators working to better visualize and share the impacts, present and future, of COVID-19.
      </Text>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 6,
          color: "primary",
          fontSize: [3, 4]
        }}
      >
        USA Covid-19 Epidemiological Profile
      </Text>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 1,
          color: "secondary",
          fontSize: ['14px', '16px']
        }}
      >
        Logarithmic
      </Text>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",

          margin: 0
        }}
      >
        <DataGraphs
          sx={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Container>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 1,
          color: "tertiary",
          fontSize: ['12px', '14px']
        }}
      >
        Data provided by <a href="https://covidtracking.com" target="_blank" rel="noopener noreferrer" sx={{ color: "secondary" }}>covidtracking.com</a>, under CC BY-NC-4.0
      </Text>
      
      <Container
        sx={{
          position: "relative",
          background: colorMode === "dark" ? "#17171d" : "white",
          m: "8vh 0 0 0",
          width: "100vw",
          minWidth: "100vw"
        }}
      >
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          m: "8vh 0 0 0",
          color: "primary",
          fontSize: [3, 4],
          background: colorMode === "dark" ? "#17171d" : "white"
        }}
      >
        Projects
      </Text>
      </Container>

      <Container
        sx={{
          position: "relative",
          background: colorMode === "dark" ? "#17171d" : "white",
          m: 0,
          width: "100vw",
          minWidth: "100vw",
        }}
      >
        <Container
          sx={{
            maxWidth: "xl",
          }}
        >
          <Grid width={["100%", "45%"]} gap={5} marginTop="8vh" marginRight="2vw" marginLeft="2vw">
            {projectsData.slice(0,4).map((item) => {
              const data = item.node.childMarkdownRemark.frontmatter;
              return (
                <Tile title={data.title} img={data.image} slug={data.slug}/>)
            })}
          </Grid>
        </Container>
      </Container>
      <Link
        sx={{
          width: "100%",
          textAlign: "center",
          mt: '5vh',
          mb: "3vh",
          color: "primary",
          fontSize: [1, 2],
          textDecoration: "none"
        }}
        to="/projects"
      >
        See More &#187;
      </Link>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 4,
          color: "primary",
          fontSize: [3, 4]
        }}
      >
        Our Partners
      </Text>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 4,
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: colorMode === "dark" ? "0 0 16px rgba(255, 255, 255, 0.3)" : "none",
          padding: 3,
          mb: "3em"
        }}
      >
        {partnersData.map((item) => {
          const data = item.node.childMarkdownRemark.frontmatter;

          return (
            <Box
              sx={{
                width: "20%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 3,
                    objectFit: "contain"
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Box>

      <Divider
        sx={{
          my: 2
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            color: "primary",
            fontSize: [3, 4]
          }}
        >
          Join Us
        </Text>

        <Text
          sx={{
            color: "secondary",
            fontSize: [1, 2],
            my: 4,
            maxWidth: ["100%", "65%"]
          }}
        >
          We’re looking for talented and driven individuals and organizations to join our team remotely.
        </Text>

        <Link
          sx={{
            color: "primary",
            fontSize: [1, 2],
            textDecoration: "none"
          }}
          to="/join"
        >
          Learn More &#187;
        </Link>
      </Box>
    </Box>
  )
}

export default IndexPage;

export function DataGraphs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://covidtracking.com/api/v1/us/daily.json')
      .then(response => response.json())
      .then(data => {
        const parsedData = data.reverse().map(item => {
          return {
            name: item.date,
            Cases: Math.log10(item.positive),
            Deaths: item.death ? Math.log10(item.death) : null,
            TotalTests: Math.log10(item.positive + item.negative)
          }
        });
        setData(parsedData);
      })
  }, []);

  function renderColorfulLegendText(value, entry) {
  	const { color } = entry;
    
    return <span style={{ color }}>{value === 'TotalTests' ? 'Total Tests' : value}</span>;
  }

  function renderYFormatted(value) {
    return `${value}^10`
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const CustomTooltip = props => {
    // payload[0] doesn't exist when tooltip isn't visible
    if (props.payload[0] != null) {
      try {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let date = props.payload[0].payload.name.toString();
  
        var year = date.substring(0, 4);
        var month = months[date.substring(4, 6) - 1];
        var day = date.substring(6, 8);
  
        // mutating props directly is against react's conventions
        // so we create a new payload with the name and value fields set to what we want
        const newPayload = [
          {
            name: 'Date',
            // all your data which created the tooltip is located in the .payload property
            value: `${day}-${month}-${year}`,
            // you can also add "unit" here if you need it,',
            stroke: "#8884d8",
            strokeWidth: 1,
            fill: "#fff"
          },
          {
            name: 'Cases',
            value: `${numberWithCommas(Math.ceil(Math.pow(10, props.payload[0].payload.Cases)))}`,
            color: "#8884d8"
          },
          {
            name: 'Deaths',
            value: `${numberWithCommas(Math.ceil(Math.pow(10, props.payload[0].payload.Deaths)))}`,
            color: "#82ca9d"
          },
          {
            name: 'Total Tests:',
            value: `${numberWithCommas(Math.ceil(Math.pow(10, props.payload[0].payload.TotalTests)))}`,
            color: "#ff7675"
          },
          //...filteredPayload
        ];

        // we render the default, but with our overridden payload
        return <DefaultTooltipContent {...props} payload={newPayload} />;
      } catch (error) {
        console.log(error)
        
        return null;
      }
    }
  
    // we just render the default
    return <DefaultTooltipContent {...props} />;
  };

  return (
    <ResponsiveContainer width="100%" minHeight="400px">
      <LineChart
        //width={700}
        //height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {//<XAxis dataKey="name" angle={45} textAnchor="end" />
        }
        <YAxis tickFormatter={renderYFormatted} />

        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={renderColorfulLegendText} />

        <Line type="monotone" dataKey="Cases" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
        <Line type="monotone" dataKey="TotalTests" stroke="#ff7675" />
      </LineChart>
    </ResponsiveContainer>
  );
}


export const query = graphql`
  query {
    partners: allFile(filter: {sourceInstanceName: {eq: "partners"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image
              website
          }
        }
      }
    }
  },
  projects: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}} limit: 4) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
            slug
            image
        }
      }
    }
  }
},
}`
