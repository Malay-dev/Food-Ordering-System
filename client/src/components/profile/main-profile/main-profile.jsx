import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import DatasetIcon from '@mui/icons-material/Dataset';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TranslateIcon from '@mui/icons-material/Translate';
import HelpIcon from '@mui/icons-material/Help';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SecurityIcon from '@mui/icons-material/Security';

function MainProfile()
{
  return(
          <Box sx={{ bgcolor: '#cfe8fc',backgroundColor:"#393939"}}>
            {/*shape*/}
            <Box sx={{marginTop:"-2rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 1440 320"><path fill="#04AFB6" fill-opacity="1" d="M0,128L720,256L1440,32L1440,0L720,0L0,0Z"></path></svg>
            </Box>
            {/*profile pic*/}
            <Avatar alt="Kaifur" src="/static/images/avatar/1.jpg" sx={{textAlign:"center",margin:"auto",height:{xs:"6rem",sm:"8rem",md:"10rem",lg:"12rem",xl:"15rem"},width:{xs:"6rem",sm:"8rem",md:"10rem",lg:"12rem",xl:"15rem"},position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"}}}/>
            {/*name of user*/}
            <Typography variant="h5" sx={{fontWeight:"bold",color:"#ffffff",marginTop:"0.5rem",position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"},width:"35",textAlign:"center"}}>
              Kaifur Rahman
            </Typography>
            {/*email*/}
            <Typography variant="caption" display="block" sx={{fontSize:"0.8rem",color:"#ffffff",marginTop:"0.5rem",position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"},width:"35",textAlign:"center"}}>
              kaifur.rahman2021@vitstudent.ac.in | 9378476321
            </Typography>
            {/*menus*/}
            <Grid display="flex" justifyContent="center">
            <Paper sx={{ width: 300, maxWidth: '100%' ,marginTop:"1rem",backgroundColor:"#000000",color:"#ffffff",position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"}}}>
              <MenuList>
              {/*first*/}
                <MenuItem>
                  <ListItemIcon>
                    <DatasetIcon sx={{color:"#ffffff"}}/>
                  </ListItemIcon>
                  <ListItemText sx={{textAlign:"left"}}>Your Orders</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Grid>
            {/*second*/}
            <Grid display="flex" justifyContent="center">
            <Paper sx={{ width: 300, maxWidth: '100%' ,marginTop:"1rem",backgroundColor:"#000000",color:"#ffffff",position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"}}}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <EditIcon sx={{color:"#ffffff"}}/>
                  </ListItemIcon>
                  <ListItemText sx={{textAlign:"left"}}>Edit Profile Information</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <NotificationsIcon sx={{color:"#ffffff"}}/>
                    </ListItemIcon>
                    <ListItemText sx={{textAlign:"left"}}>Notifications</ListItemText>
                    <Typography variant="body2" color="#04AFB6">
                      On
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <TranslateIcon sx={{color:"#ffffff"}}/>
                      </ListItemIcon>
                      <ListItemText sx={{textAlign:"left"}}>Language</ListItemText>
                      <Typography variant="body2" color="#04AFB6">
                        English
                      </Typography>
                      </MenuItem>
                </MenuList>
              </Paper>
            </Grid>
            {/*third*/}
            <Grid display="flex" justifyContent="center">
            <Paper sx={{ width: 300, maxWidth: '100%' ,marginTop:"1rem",backgroundColor:"#000000",color:"#ffffff",position:"relative",bottom:{xs:"4rem",sm:"6rem",md:"9rem",lg:"10rem",xl:"12rem"}}}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <HelpIcon sx={{color:"#ffffff"}}/>
                  </ListItemIcon>
                  <ListItemText sx={{textAlign:"left"}}>Help & Support</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ConnectWithoutContactIcon sx={{color:"#ffffff"}}/>
                    </ListItemIcon>
                    <ListItemText sx={{textAlign:"left"}}>Contact Us</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <SecurityIcon sx={{color:"#ffffff"}}/>
                      </ListItemIcon>
                      <ListItemText sx={{textAlign:"left"}}>Privacy Policy</ListItemText>
                      </MenuItem>
                </MenuList>
              </Paper>
            </Grid>
          </Box>
  )
};
export default MainProfile;
