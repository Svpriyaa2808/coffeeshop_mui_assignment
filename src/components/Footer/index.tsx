import { Box, IconButton, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const styled={
    h4 : {
      fontWeight:'bold',
      textTransform:'uppercase',
      fontSize: '22px',
      textAlign : 'center'
    },

    icon : {
      fontSize: '32px',
      m:1
    },

    flexDiv : {
      display:'flex',
      flexDirection:'column',
      m:1,
      mx:3
    }
  }
  return (
    <>
    <Box  sx={{
      bgcolor : "#832232",
      color : 'white',
      p:4,
      pb:1
      }}>
        <Typography component='div' sx={{
          display:'flex',
          alignItems:'center',
          flexDirection: {xs: 'column' , sm: 'row'},
          justifyContent:{xs:'center',sm:'space-between'},
          mb:2,
        }}>
          <Typography component='div' sx={styled.flexDiv}>
            <Typography component='h4' sx={styled.h4}>
              Products
            </Typography>
            <Typography component='div' sx={styled.flexDiv}>
              <Typography component='a' href='/pastry' 
                sx={{
                  textDecoration : 'none',
                  color:'white',
                  fontSize:'20px'
                }}>
                Pastry
              </Typography> 
              <Typography component='a' href="/breakfast" 
                sx={{
                  textDecoration : 'none',
                  color:'white',
                  fontSize:'20px'
                }}>
                Breakfast
              </Typography>
            </Typography>
        </Typography>
           <Typography component='div' sx={styled.flexDiv}>
            <Typography component='h4' sx={styled.h4}>
              follow us
            </Typography>
            <Typography component='div' 
              sx={{
                display:"flex"
              }}>
              <FacebookIcon sx={styled.icon}/>
              <InstagramIcon sx={styled.icon}/>
              <LinkedInIcon sx={styled.icon}/>
              <YouTubeIcon sx={styled.icon}/>
            </Typography>
          </Typography>
        </Typography>
        <Typography component='p' sx={{
          textAlign : 'center',
          mb:0,
          }}>&copy; 2025 PR Coffee.
        </Typography>
    </Box>
    </>
  )
}

export default Footer