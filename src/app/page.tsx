import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
export default function ImgMediaCard() {
  return (
    <Box sx={{
      flexGrow:1,
      display:"flex",
      justifyContent:"center"
    }}>
    <Card sx={{ maxWidth:{xs:"100%",sm:"100%",md:"100%"},
                m:2,display:"flex",
                flexDirection:{xs:"column",md:"row"} }}>
      <CardMedia
        component="img"
        alt="Buns"
        image="/bun.jpg"
        sx={{
          height:{xs:"300px",sm:"500px",md:"300px",lg:"500px"}
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pastries at PR
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         At PR Coffee, we believe that great coffee deserves equally great company—like our range of freshly baked pastries and treats.
          Every item in our pastry selection is made with care, using high-quality ingredients and time-tested recipes.
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        From fluffy muffins bursting with fresh ingredients to buttery croissants with delicate layers, each bite tells a story of craftsmanship and flavor. Whether you're in the mood for something sweet like our
         rich mini brownies or something hearty like our cardamom buns, there's a perfect pairing waiting for your coffee.
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        We bake in small batches throughout the day to ensure freshness, aroma, and that warm-from-the-oven feeling in every bite. Whether you're 
        grabbing breakfast, a mid-day snack, or an afternoon pick-me-up, our baked goods are here to make your coffee moment special.
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}
