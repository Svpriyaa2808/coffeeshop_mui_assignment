// // import {pastryMenu} from "@/data/data"
// // import Image from "next/image"
// // import Link from "next/link"
// // const Pastry = () => {

// //     return (
// //         <>
// //         {pastryMenu.map((item, index:number) => 
// //             <div key={index}>
// //                 <p>{item.name}</p>
// //                 <Link href={`/pastry/${item.name.toLowerCase()}`}>
// //             <Image src={`/${item.image}`} alt={item.name} width={500} height={500} />
// //             </Link>
// //             </div>
// //         )}
        
// //         </>
// //     )
// // }

// // export default Pastry
'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {pastryMenu} from "@/data/data"
import { Container } from '@mui/material';
import { Almendra } from 'next/font/google';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PastryType } from '@/types/type';
// const almendra = Almendra({
//     subsets: ['latin'],
//     weight: [ '700'], 
//     style: ['italic']
//   });

const handleClick = (item: PastryType) => {
    localStorage.setItem("recipe", JSON.stringify(item));
}

export default function ImgMediaCard() {

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
       justifyContent:"center"
    }} >
        {pastryMenu.map((item,index:number) => 
         <Container key={index} 
        
         sx={{flex: {md: "0 0 30%" , sm : " 0 0 40%", xs: "0 0 90%"},
            border:"1px solid black",
            m:2,
            p: {md: 0 ,lg : 0,sm: 0},
         }} >
      <CardMedia
        component="img"
        alt={item.name}
        height="200"
        image={item.image}
        sx={{backgroundColor : "bisque",
            my:0,
            mx:0,
            p: {md: 0 ,lg : 0},
            
        }}
      />
      <CardContent sx={{
        minHeight:"180px"
      }}>
        <Typography gutterBottom variant="h4" component="a"  
         href={`/pastry/${item.name.toLowerCase()}`} 
        sx={{fontFamily: "Almendra",
            fontStyle:"italic",
            fontWeight:"700",
            color:"#832232",
            textDecoration:"none",
            fontSize:"22px" 
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
            color : "#832232"
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
