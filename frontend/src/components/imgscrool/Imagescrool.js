import React from 'react'
//import scrool 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from '../../config/imagescrool.data'
import Tooltip from '@mui/material/Tooltip';
const itemlist = itemData
const Imagescrool = () => {
    return (
        <ImageList sx={{ width: 500, height: 400 }} cols={4} rowHeight={100}>
      {itemData.map((itemlist) => (
        <ImageListItem key={itemlist.img }>
          <img
            src={`${itemlist.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${itemlist.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    )
}

export default Imagescrool
