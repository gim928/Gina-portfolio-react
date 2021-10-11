import React from "react";
// import { Card, ListGroup } from "react-bootstrap";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Portfolio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Thank you for visiting my portfolio page. See below for examples
              of my group and individual work.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Group Projects</Button>
              <Button variant="outlined">Individual Projects</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            {/* item key={card} */}

            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1572573385781-2fd4f8c1389e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    GRIP - Get a grip on your next group trip!
                  </Typography>
                  <Typography>
                    GRIP was created to help plan and organize upcoming trips
                    with friends! Users are able to keep track of trip details,
                    tasks that each group member need to complete, and an
                    expense tracker to keep track of spending.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://grip-your-trip.herokuapp.com/"
                    target="_blank"
                  >
                    See the app!
                  </Button>
                  <Button
                    size="small"
                    href="https://github.com/Korbin-Sargent/vacation-planning-app"
                    target="_blank"
                  >
                    Checkout the repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="an assortment of bagels"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Simple Inventory App
                  </Typography>
                  <Typography>
                    A full-stack inventory management app that is simple enough
                    to apply to any business. Bagels are used for this example.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://warehouse-manager-nw.herokuapp.com/"
                    target="_blank"
                  >
                    See the App!
                  </Button>
                  <Button
                    size="small"
                    href="https://github.com/nickwojt/warehouse-manager"
                    target="_blank"
                  >
                    Checkout the Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VycmVuY3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="stock market charts"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Currency Exhange Application
                  </Typography>
                  <Typography>
                    This interactive web application allows the user to view and
                    compare currency exchange rates for the U.S. dollar and to
                    view information for stocks and indices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://iatenine.github.io/currency-exchange-app/"
                    target="_blank"
                  >
                    See the app!
                  </Button>
                  <Button
                    size="small"
                    href="https://github.com/iatenine/currency-exchange-app"
                    target="_blank"
                  >
                    Check out the repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdyYXBofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    PWA Budget Tracking App
                  </Typography>
                  <Typography>
                    This is a budget tracking application that allows the user
                    to add expenses and deposits to their budget with or without
                    a connection to the internet. After entering transactions
                    offline, the total populates when brought back online.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://warm-cliffs-72947.herokuapp.com/"
                    target="_blank"
                  >
                    See the App!
                  </Button>
                  <Button
                    size="small"
                    href="https://github.com/gim928/pwa-budget-tracker"
                    target="_blank"
                  >
                    Checkout the repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="credit card being used"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    E-Commerce Platform - Redux
                  </Typography>
                  <Typography>
                    This app is an e-commerce platform that uses Redux to manage
                    global state. The JavaScript library Redix was utilized to
                    manage complex state in a large-scale React application.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See the app!</Button>
                  <Button
                    size="small"
                    href="https://github.com/gim928/state-redux-store"
                    target="_blank"
                  >
                    Check out the repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="hands coming together"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Team Profile Generator
                  </Typography>
                  <Typography>
                    This is a command line application that helps the user
                    create a profile page for their team. The application
                    generates an HTML file dynamically based on user input that
                    displays each team member's information on each card. Each
                    team member type displays different information specific to
                    each job type (manager, intern, and engineer).
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">See the app!</Button> */}
                  <Button
                    size="small"
                    href="https://github.com/gim928/HW8-Team-Profile-Generator"
                    target="_blank"
                  >
                    Checkout the repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Portfolio;
