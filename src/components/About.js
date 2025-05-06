import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import {
  Code,
  Info,
  Functions,
  Link as LinkIcon,
  RocketLaunch,
} from "@mui/icons-material";

const About = () => {
  return (
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        <Info /> About This App
      </Typography>
      <Typography paragraph>
        This Loan Calculator App is a modern, single-page web application built
        using <b>React JS</b> and <b>Material UI</b>. It allows users to
        calculate loan EMIs (Equated Monthly Installments), view a detailed
        amortization schedule, and see real-time currency conversions of their
        EMI using live exchange rates.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">📌 Instructions for Candidates</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Push this entire project to a public GitHub repository." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Make sure to commit your code with proper messages after completing each feature." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Use ES6+ syntax and functional components with React Hooks." />
        </ListItem>
        <ListItem>
          <ListItemText primary="One GitHub API for state management (loan, EMI, currency)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Use custom React hooks for reusable logic (e.g., EMI calculation, fetching exchange rates)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Utilize ExchangeRate API for real-time currency conversion." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensure the app is fully responsive on all screen sizes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Implement both light and dark modes using MUI’s theming system." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Add a loading spinner during async processes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Host your deployed project on GitHub Pages or Render." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Once completed, share this deployment link in the 'About' section of your GitHub repo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deploy the project on any platform (e.g., Vercel, Netlify, GitHub Pages)." />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🚀 Features</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Loan EMI calculation using standard financial formula." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dynamic amortization schedule filled with real-time values." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Real-time currency conversion of EMI using live exchange rate API." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Multiple currency selection (refer to 150+ currencies)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dark/light mode toggle for customizable experience." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Collapsible header navigation on mobile screens." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fully responsive UI built with Material UI." />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🛠 Technologies Used</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="React (Hooks, Routing, Context API)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material UI for styling and responsive components" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Axios for API calls" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Exchange Rate API for real-time currency conversion" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">
        <Functions /> EMI Formula Used
      </Typography>
      <Typography paragraph>
        The EMI (Equated Monthly Installment) is calculated using the standard
        formula:
      </Typography>
      <Typography sx={{ fontFamily: "monospace" }}>
        EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)
      </Typography>
      <Typography paragraph>
        Where:
        <br /> P = Principal loan amount
        <br /> r = Monthly interest rate (annual rate / 12 / 100)
        <br /> n = Loan duration in months
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">
        <LinkIcon /> Currency Conversion API
      </Typography>
      <Typography paragraph>
        This app integrates with the free tier of the{" "}
        <Link href="https://www.exchangerate-api.com" target="_blank">
          ExchangeRate-API
        </Link>{" "}
        to fetch live exchange rates.
        <br />
        <br />
        API Endpoint Example:
        <br />
        <Typography sx={{ fontFamily: "monospace", ml: 2 }}>
          https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
        </Typography>
        <br />
        You must register and obtain a free API key to use the app. Then replace{" "}
        <b>YOUR_API_KEY</b> in the app code with your actual key.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🎯 Purpose of This App</Typography>
      <Typography paragraph>
        This project is designed to assess a candidate’s React development
        skills, including:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="React fundamentals (state, props, hooks)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Component structure and code reusability" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Third-party API integration and live data rendering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Writing reusable, testable functions" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Theme customization (light/dark mode toggle)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Error handling and graceful UI rollbacks" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsive design and collapsible mobile navigation (in Mobile view)" />
        </ListItem>
      </List>

      <Typography variant="body2" color="text.secondary" mt={2}>
        💡 For any currency conversion feature to work, make sure the API key is
        valid and the network allows external API fetches.
      </Typography>
    </Box>
  );
};

export default About;
