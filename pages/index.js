import { useState } from 'react';
import Navbar from '../src/components/navbar';
import theme from '../src/theme';
import { Container, Box, Typography, Button, CircularProgress } from '@mui/material';


export default function Index() {
  const [loading, setLoading] = useState(false);

  const getParseJD = async (file) => {
    try {
      const requestOptions = {
        method: "GET",
        body: file
      }
      const url = 'http://localhost:3000/api/pdf/reader';
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            console.log(data)
          }
          else {
            console.log(data);
          }
        })
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleUpload = (e) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files[0];
    e.target.value = null;
    getParseJD(file);
  }


  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ pt: 4, textAlign: 'center', color: theme.palette.text.main }}>
        <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
          Parse JD file
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 300, mb: 5 }}>
          Based on any job descriptions provided in pdf below
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ width: 300, height: 75, mb: 1, fontSize: 30, textTransform: 'none' }}
        >
          {
            loading ? <CircularProgress sx={{ color: "#fff" }} /> : "Select JD PDF"
          }
          <input
            type="file"
            onChange={(e) => handleUpload(e)}
            accept="application/pdf"
            hidden
          />
        </Button>
      </Container>
    </Box>
  );
}
