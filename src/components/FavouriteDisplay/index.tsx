import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuType } from '@/types/type';
import { Paper } from '@mui/material';

interface FavouriteProp {
    favourite : MenuType
}

export default function RecipeReviewCard({favourite}: FavouriteProp) {
  
  return (
    <Typography component="div" sx={{
        m:4,
        display:"flex",
        justifyContent:"space-around"
    }}>
    <Card sx={{ 
        maxWidth:345,
        justifyContent:"center" }} 
        elevation={12}>
      <CardHeader 
        sx={{
            color: "#832232",
            fontStyle:"italic"
        }}
        title={favourite.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={favourite.image}
        alt={favourite.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color:"black" ,
            fontSize:"20px", 
        }}>
         {favourite.description}
        </Typography>
      </CardContent>       
    </Card>
    </Typography>
  );
}
