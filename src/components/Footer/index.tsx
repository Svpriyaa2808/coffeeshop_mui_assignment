'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography,Container,Button} from '@mui/material';

const pages = ['Pastry', 'Breakfast'];

export default function FixedBottomNavigation() {
  
  const ref = React.useRef<HTMLDivElement>(null);
  
  return (
    <Box ref={ref} sx={{height:"auto"}}>
        <CssBaseline />
      <Paper  elevation={3}>
        <BottomNavigation 
            sx={{backgroundColor:"#832232",
                p:4,
                height:"auto",
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
         
        >
            <BottomNavigationAction sx={{
                
                display:"flex",
                gap:4
            }} />
            <BottomNavigationAction         label="&copy; 2025"
 component="p" sx={{
                color: "white",
                m:2
            }}  /> &copy; 2025
            <Box sx={{  display: 'flex' , 
            flexDirection:"column" 
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`${page.toLowerCase()}`}
                sx={{  
                    color: 'white', 
                    display: 'block' ,
                    fontSize:"1.2rem",
                    fontWeight:500,
                }}>
                {page}
              </Button>
            ))} 
          </Box>
        
          
         
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

