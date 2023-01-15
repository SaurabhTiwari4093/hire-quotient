import * as React from 'react';
import Navbar from '../src/components/navbar';
import theme from '../src/theme';
import { Container, Box, Typography, Button } from '@mui/material';


export default function Index() {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ pt: 4, textAlign: 'center', color: theme.palette.text.main }}>
        <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
          Find relevant candidate / person profiles
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 300, mb: 5 }}>
          Based on any job descriptions provided in pdf below
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ width: 300, height: 75, mb: 1, fontSize: 30,textTransform: 'none' }}
        >
          Select JD PDF
          <input
            type="file"
            accept="application/pdf"
            hidden
          />
        </Button>
      </Container>
    </Box>
  );
}
