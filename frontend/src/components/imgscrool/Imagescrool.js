import React from 'react'
//import scrool 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from '../../config/imagescrool.data'

const Imagescrool = () => {
    return (
        <ImageList sx={{ width: 500, height: 448 }} cols={3} rowHeight={164}>
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
