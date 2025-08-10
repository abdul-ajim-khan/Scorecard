import {Link,useParams,useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Leaderboard() {
const {idxx} = useParams();
// console.log(useParams());
const [tabledata, settabledata] = useState("")
const api = `https://mysite-r0hr.onrender.com/api/tournaments/${idxx}/leaderboard`;

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
      onClick={() => navigate(-1)}
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
                    <tr key={idx}  style={{height:"72px"}}>
                      {val.map((vall,id)=>{
                        return(
                          <th key={id} style={idx<3?{backgroundColor:"rgb(220 252 231)"}:{}}>{Number.isFinite(vall) && !Number.isInteger(vall)&&val.length-1==id?`${Math.round(vall)}%`:vall}</th>
                        )
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
