import {Link,useParams,useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
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
// import Leaderboard from "./Leaderboard";
export default function Leaderboard({selectedId,setisleaderboard}) {
// const {idxx} = useParams();
const [tabledata, settabledata] = useState("")
const api = `https://mysite-r0hr.onrender.com/api/tournaments/${selectedId}/leaderboard`;

async function Apicall() {
  try {
    // console.log(tabledata);
    let res =await fetch(api)
    let data =await res.json()
    
    settabledata(data)
  } catch (error) {
    console.log(error);
  }

}
useEffect(()=>{
  Apicall()
},[])


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
  Default,
};

// const [players, setplayers] = useState([])
//   async function players_api(id) {
//     try {
//       const res = await fetch(
//         `https://mysite-r0hr.onrender.com/api/players`
//       );
//       const data = await res.json();
//       console.log(data.players.map((val)=>val.photo_name));
//       setplayers(data.players.map((val)=>val.photo_name))
//     } catch (error) {
//       console.log(error);
//     }
//   }


// useEffect(()=>{
//   players_api()
// },[])





useEffect(()=>{
  // console.log(tabledata);
  // console.log(tabledata?.data?.columns[0]);

},[tabledata])
  const navigate = useNavigate();

  return (
    <div style={{padding:"10px",}}>
    <button
      style={{
        width: "134px",
        height: "32px",
        backgroundColor: "#1d4ed8",
        color: "white",
      }}
      onClick={() => {
        setisleaderboard(false)
      }}
    >
      <FaArrowLeftLong /> Matches list
    </button>
      <div>
        <div>
        <table border={1} style={{ borderCollapse: "collapse",width:"100%" ,marginTop:"30px"}}>
          {tabledata && ( 
            <thead style={{width:"100%"}}>
              <tr style={{height:"40px"}}>
                {tabledata?.data?.columns.map((val, idx) => (
                  <th key={idx}>{val}</th>
                ))}
              </tr>
            </thead>
          )}

            <tbody>
              {
                tabledata?.data?.rows.map((val,idx)=>{
                  return(
                    <tr key={idx}  style={{height:"52px"}}>
                      {/* {console.log(val[0])} */}
                      {val.map((vall,id)=>{
                        if (id==0) {
                          console.log(vall.split(".")[0]);
                          const playerKey = vall.split(".")[0];
                          return(
                            // <th key={id} style={idx<3?{backgroundColor:"rgb(220 252 231)"}:{}}>{Number.isFinite(vall) && !Number.isInteger(vall)&&val.length-1==id?`${Math.round(vall)}%`:vall}</th>
                            <th key={id}
                              style={idx < 3 ? { backgroundColor: "rgb(220 252 231)" } : {}}>
                              <img
                                src={playerImages[playerKey]}
                                alt={"img"}
                                style={{
                                  width: "87px",
                                  height: "87px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                  // objectPosition:"0px -15px",
                                  marginTop:"3px",
                                  backgroundColor:`${idx<3?{backgroundColor:"rgb(220 252 231)"}:{}}`
                                }}
                              />
                            </th>                            
                          )
                        }else{
                          return(
                            <th key={id} style={idx<3?{backgroundColor:"rgb(220 252 231)"}:{}}>{Number.isFinite(vall) && !Number.isInteger(vall)&&val.length-1==id?`${Math.round(vall)}%`:vall}</th>
                          )
                        }
                      })}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
