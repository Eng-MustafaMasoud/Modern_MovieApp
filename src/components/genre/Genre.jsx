import React, { useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";



const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Genre = ({
  selected,
  setSelected,
  type,
genre,
setGenre,
  setPage,
  page,
}) => {


 
  useEffect(() => {
    fetchGenre();
   
     
    // eslint-disable-next-line 
  },[selected,page]);

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=5c1a7f84b13a314e22aed4a212650c0d&language=en-US`
    );
    setGenre(data.genres);
  };
  const handleAdd=(gen)=>{
    setSelected([...selected,gen]);
    setGenre(genre.filter(val=>(val.id!==gen.id)))
    setPage(1)
  }
  const handleRemove=(gen)=>{
    
    setSelected(selected.filter(val=>(val.id!==gen.id)))
    setGenre([...genre,gen]);
    setPage(1)

  }

  

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
     { selected?.map((data) => {
        return (
          <ListItem key={data.id}>
            <Chip label={data.name}  clickable color="primary"onDelete={()=>handleRemove(data)}/>
          </ListItem>
        );
      })
}
{
  genre?.map((data) => {
    return (
      <ListItem key={data.id}>
        <Chip label={data.name}  clickable  onClick={()=>handleAdd(data)}/>
      </ListItem>
    );
  })
}
      
    </Paper>
  );
};

export default Genre;
