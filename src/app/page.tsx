import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { HomepageContent } from '@/data/data';
import { HomePageContentType } from '@/types/type';

export default function ImgMediaCard() {
   
  const styled ={
        content : {
            color: "black",
            fontSize:{xs:"14px",sm:"16px"},
            my:2
        }
    }

  return (
    <Box sx={{
      flexGrow:1,
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }}>
      {HomepageContent.map((item,index)=> (
    <Card key={index} sx={{ maxWidth:{xs:"100%",sm:"100%",md:"100%"},
                m:2,display:"flex",
                flexDirection:{xs:"column",lg:"row"},
                 }}>
      <CardMedia
        component="img"
        alt={item.title}
        image={`/${item.image}`}
        sx={{
          width:{xs:"100%",lg:"50%"},
          // height:{xs:"300px",sm:"500px",md:"500px",lg:"500px"},
          height:"auto",
          order:{md: item.order ?? 0,xs: 0},
        }}
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="h4"
        sx={{
          color:"#832232",
          fontFamily:"Almendra",
          fontWeight:"500",
          fontStyle:"italic",
          fontSize:{xs:"22px",md:"26px"}
        }}>
          {item.title}
        </Typography>
        <Typography component="p" sx={ styled.content }>
         {item.content1}
        </Typography>
         <Typography component="p" sx={ styled.content }>
          {item.content2}
        </Typography>
         <Typography component="p" sx={ styled.content }>
        {item.content3}
        </Typography>
      </CardContent>
    </Card>
     ))}
    </Box>
  );
}
