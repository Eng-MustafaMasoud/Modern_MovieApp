import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';




const PaginationCom = ({setPage,totalPages}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const handlChange=(page)=>{

    window.scroll(0,0);
    setPage(page);
}



  return (
    <div>
    <Stack spacing={2}>

    <ThemeProvider theme={darkTheme}>
      <Pagination count={totalPages} showFirstButton showLastButton  onChange={(e)=>handlChange(e.target.textContent)}/>
      </ThemeProvider>
    </Stack>
    </div>
  )
}

export default PaginationCom