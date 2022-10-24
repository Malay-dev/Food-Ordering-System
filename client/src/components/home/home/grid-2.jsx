import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container columnSpacing={1} rowSpacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none"}}>{props.one}</Item>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none",marginBottom:"1rem"}}>{props.two}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
