import React, { useEffect, useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbHomeStats } from "react-icons/tb";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

import T10 from "./T10";
import Solo_test from "./Solo_test";
import Test from "./Test";
import SuperOver from "./SuperOver";





import Ajim from "../Images/Ajim.jpeg";
import Ankan from "../Images/Ankan.jpeg";
import Asif from "../Images/Asif.png";
import Default from "../Images/Default.jpg";
import Gobindo from "../Images/Gobindo.jpeg";
import Kartik from "../Images/Kartik.jpeg";

import Krishna from "../Images/Krishna.jpg";
import Rajib from "../Images/Rajib.jpeg";
import Saikat from "../Images/Saikat.jpeg";
import Sayan from "../Images/Sayan.jpg";
import Soudip from "../Images/Soudip.jpeg";
import Soumik from "../Images/Soumik.jpg";
import Surya from "../Images/Surya.jpg";
import t10 from "../Images/t10_cricket.jpg";
import super_over from "../Images/t10_cricket.jpg";
import test from "../Images/test_cricket.png";
import solo_test from "../Images/test_cricket.png";
import Tushar from "../Images/Tushar.jpeg";
import Leaderboard from "./Leaderboard";






const playerImages = {
  Ajim,
  Ankan,
  Asif,
  Gobindo,
  Kartik,
  Krishna,
  Rajib,
  Saikat,
  Sayan,
  Soudip,
  Soumik,
  Surya,
  Tushar,
  test,
  solo_test,
  super_over,
  t10,
  Default
};


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function HomePage() {
  const matchapi = "https://mysite-r0hr.onrender.com/api/tournaments";
  const [MatchData, setMatchData] = useState([]);
  const [tabledata, settabledata] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const [isleaderboard, setisleaderboard] = useState(false)
  const [ismatchlist, setismatchlist] = useState(true)



  const {id} = useParams();
  async function MatchApi() {
    try {
      const res = await fetch(matchapi);
      const match_data = await res.json();
      const reversedData = match_data.data
        ? [...match_data.data].reverse()
        : [];
      setMatchData(reversedData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    MatchApi();
  }, []);
  
  async function Apicall(id) {
    try {
      const res = await fetch(
        `https://mysite-r0hr.onrender.com/api/tournaments/${id}`
      );
      const data = await res.json();
      settabledata(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen(id) {
    setSelectedId(id);
    setOpen(true);
    setisleaderboard(false)
  }

  function handleClose() {
    setOpen(false);
    setSelectedId(null);
    settabledata({});
  }

  useEffect(() => {
    if (selectedId) {
      Apicall(selectedId);
    }
  }, [selectedId]);

const [players, setplayers] = useState([])
  async function players_api(id) {
    try {
      const res = await fetch(
        `https://mysite-r0hr.onrender.com/api/players`
      );
      const data = await res.json();
      console.log(data.players.map((val)=>val.name));
      setplayers(data.players.map((val)=>val.name))
    } catch (error) {
      console.log(error);
    }
  }


useEffect(()=>{
  players_api()
},[])











  const style_navbutton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "75px",
    height: "55px",
    backgroundColor: "#f8fafdff",
    border: "1px solid #e5e7eb",
    flexDirection: "column",
    padding: "5px",
  };

  return (
    <div style={{ padding: "1px 25px 25px 25px" }}>
      {MatchData.length==0&&
      <div style={{height:"100vh",display: 'flex',
        justifyContent: 'center',alignItems:"center"}}>
        {/* loading..... */}
        {/* <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    > */}
    <div style={{position:"absolute", top:"50%", left:"50%"}}>
      <CircularProgress size={100}/>
    </div>
      <Skeleton
        sx={{ bgcolor: 'grey.500' }}
        variant="rectangular"
        width={"100%"}
        height={"100vh"}
      />
    {/* </Box> */}
      </div>
      }
      {MatchData.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            height: "100px",
          }}
        >
          <Link to={`/players`} style={{ textDecoration: "none" }}>
            <div style={{ ...style_navbutton }}>
              <span
                style={{ color: "purple", fontSize: "30px", height: "30px" }}
              >
                <FaUsers />
              </span>
              Players
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div style={style_navbutton}>
              <span
                style={{ color: "purple", fontSize: "30px", height: "30px" }}
              >
                <TbHomeStats />
              </span>
              Stats
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div style={style_navbutton}>
              <span
                style={{ color: "purple", fontSize: "30px", height: "30px" }}
              >
                <IoStatsChartOutline />
              </span>
              Ranking
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div style={style_navbutton}>
              <span
                style={{ color: "purple", fontSize: "30px", height: "30px" }}
              >
                ⚡
              </span>
              H to H
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div style={style_navbutton}>
              <span
                style={{ color: "purple", fontSize: "30px", height: "30px" }}
              >
                <FaFireFlameCurved />
              </span>
              Rivalry
            </div>
          </Link>
          <Link to={`/CreateTeam`} style={{ textDecoration: "none" }}>
            <div
              style={{ ...style_navbutton, height: "40px", width: "auto" }}
            >
              Create Team
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div
              style={{ ...style_navbutton, height: "40px", width: "auto" }}
            >
              Memory
            </div>
          </Link>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700, height: 600,overflow:"auto"}}>
          <div style={{textAlign:"right",width:"100%"}}><button onClick={()=>{
            handleClose()
            setisleaderboard(true)
          }} className="btns" style={{color:"red",fontSize:"30px",height:"30px",borderRadius:"50%",border:"none",}}><IoMdCloseCircleOutline /></button></div>
          <div style={{marginTop:"-40px"}}>
            {isleaderboard&&<Leaderboard selectedId={selectedId} setisleaderboard={setisleaderboard} />}
            {!isleaderboard&&<button style={{width:"auto", height:"32px",backgroundColor:"#15803d",padding:"4px 16px",color:"white",fontSize:"20px"}}
             onClick={()=>{
              setisleaderboard(true)
            }}
            >Leaderboard</button>}
          </div>
            
            {!tabledata.matches && <div style={{height:"400px",display:"flex",justifyContent:"center",alignItems:"center"
            }}>
              <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
              </div>}
            {!tabledata.matches && <div style={{height:"400px",display:"flex",justifyContent:"center",alignItems:"center"
            }}>
              <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
              </div>}
            <div>

          {/* {!isleaderboard&&<div> */}
          {!isleaderboard&&<div style={{display:"flex",justifyContent:'center',width:"100%"}}>
            {tabledata?.tour_type === "t10" ? (
            <T10 matches={tabledata.matches} tabledata={tabledata}  players={players} />
          ) : tabledata?.tour_type === "solo_test" ? (
            <Solo_test matches={tabledata.matches} />
          ) : tabledata?.tour_type === "test" ? (
            <Test />
          ) : tabledata?.tour_type === "super_over" ? (
            <SuperOver matches={[...(tabledata.matches || [])].reverse()} />
          ) : (
            <div></div>
          )}
          </div>}
              
            </div>
        </Box>
      </Modal>

      <div>
        {MatchData.map((val, idx) => {
          return (
            <div key={idx} onClick={() => handleOpen(val.id)}>
              <div
                className="tournamentshover" 
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "140px",
                  marginTop: "10px",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <h2 style={{ color: "black" }}>{val.name}</h2>
                  <div
                   className="tournamentshover" 
                    style={{
                      background:
                        "linear-gradient(90deg,rgba(133, 200, 242, 1) 0%, rgba(219, 234, 254, 1) 100%, rgba(83, 165, 237, 1) 36%",
                      padding: "5px",
                      width: "120px",
                    }}
                  >
                    {val.tour_type.charAt(0).toUpperCase() +
                      val.tour_type.slice(1)}
                  </div>
                </div>
                <div style={{borderRadius:"50%"}}>

                  {val.winner &&<img style={{ height: "100px", width: "100px", borderRadius: "50%", filter: "contrast(120%)"}}
                    src={val ? (playerImages[val.winner.name] || Default) : playerImages[val.tour_type]}
                    alt={val.winner ? val.winner.name : "Winner"
                    }/>}

                  {!val.winner &&<img style={{height: "130px",transform: "scaleX(-1)", filter: "contrast(120%)"
                  }}
                    src={val.winner ? (playerImages[val.winner.name] || Default) : playerImages[val.tour_type]}
                    alt={val.winner ? val.winner.name : "Winner"
                  }/>}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
