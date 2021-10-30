import React from 'react'


//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import facebook from "@mui/icons-material/Facebook";
//____________________________________
const Facebook= () => {
    return (
        <Stack direction="row" spacing={2}>
      <Button variant="outlined" size="large"> <facebook />Facebook</Button>
     
    </Stack>
    )
}

export default Facebook
