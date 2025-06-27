import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MenuType } from '@/types/type';

interface FavouriteProp {
    favourite : MenuType
}

export default function RecipeReviewCard({favourite}: FavouriteProp) {
  
  return (
    <Typography component="div" sx={{
        m:4,
        display:"flex",
        justifyContent:"space-around",
        flexGrow:1
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
