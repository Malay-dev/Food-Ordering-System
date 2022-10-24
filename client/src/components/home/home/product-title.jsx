import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid>
      {/*grid with 1 item*/}
        <Grid item xs={12} md={12} lg={6}>
          <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none"}}>
            {/*internal division with stack */}
            <Stack direction={'row'} spacing={-2.2}>
              {/* first*/}
              <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none",marginTop:"1.5rem"}}>
                <Typography variant="h3" gutterBottom sx={{fontWeight:"900", color:"#ffffff",fontSize:"6rem"}}>
                  Food
                </Typography>
              </Item>

              {/* second again stack with column direction*/}
              <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none"}}>
              <Stack direction={'column'} spacing={-2.5}>
                <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none",marginTop:"1.5rem"}}>
                  {/* first*/}
                  <Typography variant="h5" gutterBottom sx={{color:"#000000",fontWeight:"900",fontSize:"2rem"}}>
                    Ordering
                    </Typography>
                </Item>
                <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none"}}>
                  {/* Second*/}
                  <Typography variant="h5" gutterBottom sx={{color:"#000000",fontWeight:"900",fontSize:"2rem"}}>
                    App
                    </Typography>
                </Item>
            </Stack>

          </Item>
        </Stack>

       </Item>
      </Grid>
      {/*third tag line*/}
      <Grid item xs={12} md={12} lg={12}>
        <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none", marginTop:-6}}>
        <Typography variant="subtitle1" gutterBottom sx={{fontWeight:"bold",marginTop:"1rem"}}>
          Now order your food in advance so you can have it instantly,
          <br/> order now in VFood.
        </Typography>
        </Item>
      </Grid>
      {/*fourth button*/}
      <Grid item xs={9} md={9} lg={9}>
        <Item sx={{backgroundColor:"#04AFB6",boxShadow:"none", marginTop:1, textAlign:"center"}}>
        <Button variant="contained" sx={{backgroundColor:"#000000",borderRadius:6,height:"3rem"}}>
          Order Now</Button>
        </Item>
      </Grid>
    </Grid>
  </Box>
  );
}
