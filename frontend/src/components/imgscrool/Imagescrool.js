import React from 'react'
//import scrool 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from '../../config/imagescrool.data'
import { border } from '@mui/system';

const Imagescrool = () => {
    return (
        <ImageList sx={{ width: 500, height: 400 }} cols={4} rowHeight={100}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            
          />
        </ImageListItem>
       
       

      ))}
    </ImageList>
    )
}

export default Imagescrool
