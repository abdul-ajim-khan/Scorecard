
import {Link} from "react-router-dom"
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { useEffect, useState } from "react";


export default function Players() {
    
const [players, setplayers] = useState([])
  async function players_api(id) {
    try {
      const res = await fetch(
        `https://mysite-r0hr.onrender.com/api/players`
      );
      const data = await res.json();
    //   console.log(data.players.map((val)=>val.name));
      setplayers(data.players.map((val)=>val.name))
    } catch (error) {
      console.log(error);
    }
  }


useEffect(()=>{
  players_api()
  console.log(players);
},[])


  return (
    <div style={{padding:"20px 60px 20px 60px"}}>
      <Link to={"/"} >
        <Button 
      variant="contained"
        sx={{
            height:"30px",
            width:"173px",
            p:2,
            borderRadius:"9px",
            fontSize:"13px",
            fontFamily:"inherit",
            paddingLeft:"3px"

        }}
      >
        <ArrowBackIcon /> <p>Tournaments list</p>
      </Button>
      </Link>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow style={{display:"flex",flexDirection:"column"}}>
            {/* {players[0]} */}
            {players.map((val,id)=>
                <TableCell key={id} style={{height:"45px",paddingTop:"12px"}}>{val}</TableCell>
            )}
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
    </div>
  );
}
