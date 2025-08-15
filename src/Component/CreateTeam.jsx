import {Link,useNavigate} from "react-router-dom"
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";


export default function CreateTeam() {
  const [players, setplayers] = useState([])
  const navigate = useNavigate();
  const [playerslist, setplayerslist] = useState([])
  const [selplayerslist, setselplayerslist] = useState([])



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
    // console.log(players);
  },[])
useEffect(()=>{
  // console.log(playerslist);
},[playerslist])


function getRandomPlayers(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  setselplayerslist(shuffled)
  // return shuffled;
}

// console.log();


  useEffect(()=>{
    // console.log(playerslist);

  },[])



  return (
    <div style={{padding:"20px 60px 20px 60px"}}>
      {/* <Link to={"/"} > */}
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
          onClick={()=>
            navigate(-1)
          }
        >
        <ArrowBackIcon /> <p>Tournaments list</p>
        </Button>
      {/* </Link> */}
      <div>
        <div style={{textAlign:"center"}}>
          <h3>Create Team</h3>
          <p>Select player who will play</p>
        </div>
      </div>
      <div>
        <div style={{display:"grid",gridTemplateColumns:"  repeat(3, minmax(0, 1fr))",marginTop:"50px"}}>
          {players.map((val,id)=>
            <div key={id} style={{display:'flex',alignItems:"center"}}>
              <input style={{height:"15px",width:"15px"}} type="checkbox" name="" id={val} 
              onChange={(e)=>{
                if (e.target.checked) {
                  setplayerslist([...playerslist,val])
                }else{
                  setplayerslist(playerslist.filter((p)=>p!==val))
                }
              }}
              />
                <label htmlFor={val}>
                  <h4 style={{height:"45px",paddingTop:"10px",gridColumn: "span 1",paddingLeft:"10px"}}>{val}</h4>
                </label>
            </div>
          )}
        </div>
      </div>
      <div style={{display:'flex',alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
        <Button 
          variant="contained"
          sx={{
            height:"30px",
            width:"173px",
            p:2,
            borderRadius:"9px",
            fontSize:"13px",
            fontFamily:"inherit",
            paddingLeft:"3px",
            bgcolor:"#b728ffff"

          }}
          onClick={()=>
            getRandomPlayers(playerslist)
          }
        >
          <p>Create Teams</p>
        </Button>
      </div>
        <div style={{display:"grid",gridTemplateColumns:"  repeat(2, minmax(0, 1fr))",marginTop:"50px"}}>
          {selplayerslist.map((val,id)=>
            <div key={id} style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              {val}
            </div>
          )}
        </div>

    </div>
  );
}
