import React from 'react'


//import Mui


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import itemData from '../../config/imagescrool.data';

const images = [
    {
        component:"img",
        image:"https://www.posttoday.com/media/content/2017/09/13/25211FFB9101410294DA83A0F99AE423.jpg"
          
    }
]
const CardProduct1 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2_rduWCC_LmWl_E2eV5dLR4gtI_-5BWeoFk7mJijz7-3q5ylPfp1lqyiTp_V6FMKsCQ&usqp=CAU"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduc1 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct2 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct3 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct4 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.sony.co.th/image/4335ff88f27d98d3b997b40d742c35f1?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct5 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct6 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.posttoday.com/media/content/2017/09/13/25211FFB9101410294DA83A0F99AE423.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct7 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

const CardProduct8 = () => {
    return (
        <Card sx={{ maxWidth: 345 , height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.arlo.com/en-ca/images/Arlov4/products/hero-banner-a4.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export  {CardProduct1,CardProduct2,CardProduct3,CardProduct4,CardProduct5,CardProduct6,CardProduct7,CardProduct8}
