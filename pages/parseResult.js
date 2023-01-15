import Navbar from '../src/components/navbar';
import theme from '../src/theme';
import { Container, Box, Typography, Button } from '@mui/material';


export default function ParseResult() {

    return (
        <Box sx={{ backgroundColor: theme.palette.background.main, minHeight: "100vh" }}>
            <Navbar />
            <Container sx={{ pt: 4, textAlign: 'center', color: theme.palette.text.main }}>

            </Container>
        </Box>
    );
}
