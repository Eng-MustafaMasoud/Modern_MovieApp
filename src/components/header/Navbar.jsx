import * as React from "react";
import "./navbar.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {  useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();

  return (
    <Box sx={{width:'100%'} } className="navbar">
      <BottomNavigation
      
     
        showLabels
        value={value}
        onChange={(event, newValue) => { 
           if(value===0){
             navigate('/')
          
        }
        else if(value===1){
          navigate('/movies')
        }
        
        else if(value===2){
          navigate('/series')
        }
        else if(value===3){
          navigate('/search')
        }
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction  label="TV Shows" icon={<TvOutlinedIcon />} />
        <BottomNavigationAction  label="Search" icon={<SearchOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
