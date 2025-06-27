'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MenuType } from '@/types/type';

interface PageProp {
    menu : MenuType[],
    clickedProduct : (item:MenuType) => MenuType|void
}

const handleClick = (item: MenuType) => {
    localStorage.setItem("recipe", JSON.stringify(item));
}

export default function ImgMediaCard({menu,clickedProduct}:PageProp) {

    const styled ={
        content : {
            color: "black",
            fontStyle:"italic",
            fontSize:"20px",
            my:2
        }
    }

  return (
    <Card  sx={{ display: "flex",
        flexWrap:"wrap",
        p:0,
       justifyContent:"center",
    }} >
        {menu.map((item,index:number) => 
         <Container key={index} 
        
         sx={{flex: {md: "0 0 30%" , sm : " 0 0 40%", xs: "0 0 90%"},
            border:"1px solid black",
            m:2,
            p: {md: 0 ,lg : 0,xs: 0,sm: 0},
         }} >
      <CardMedia
        component="img"
        alt={item.name}
        height= "220px"
        image={item.image}
        sx={{backgroundColor : "bisque",
            my:0,
            mx:0,
            p: {md: 0 ,lg : 0},
            
        }}
      />
      <CardContent sx={{
        minHeight:{md:"250px",lg:"180px"}
      }}>
        <Typography gutterBottom variant="h4" component="h4"  
        onClick={() => clickedProduct(item)}
        sx={{fontFamily: "Almendra",
            fontStyle:"italic",
            fontWeight:"700",
            color:"#832232",
            textDecoration:"none",
            fontSize:"22px" ,
            cursor:'pointer'
        }}>
        {item.name}
        </Typography>
        <Typography variant="body2"  sx={styled.content}>
          {item.description}
        </Typography>
        <Typography variant="body2" sx={styled.content}>
          Price:{`$${item.price}`}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={()=>handleClick(item)} size="small" sx={
        {
            fontSize : "16px",
            color : "#832232",
            '&:hover':{
              bgcolor:'bisque'
            }
        }
      }>Add to Favourites</Button>
        <FavoriteIcon  sx={{
            fill:"#832232"
        }}></FavoriteIcon>
      </CardActions>
      </Container>
        )}
    </Card>
  );
}