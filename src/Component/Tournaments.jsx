import {Link,useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import T10 from "./T10";
import Solo_test from "./Solo_test";
import Test from "./Test";
import SuperOver from "./SuperOver";

export default function Tournaments() {
const {idxx} = useParams();
// console.log(useParams());
const [tabledata, settabledata] = useState("")
const api = `https://mysite-r0hr.onrender.com/api/tournaments/${idxx}`;

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

  return (
    <div style={{padding:"0 0 16px",margin:"20px"}}>
      <Link className="Link" to={"/"}>
        <button className="Link" style={{width:"134px",height:"32px",backgroundColor:"#1d4ed8",color:"white"}}><FaArrowLeftLong />Tournaments list</button>
      </Link>      
      <div>
        <div className="" style={{display:"flex",color:"blue",gap:"5px",marginTop:"40px"}}>
          <Link to={`/tournaments/${idxx}/leaderboard`} style={{width:"auto", height:"40px",backgroundColor:"#15803d",padding:"8px 16px",color:"white"}}>Leaderboard</Link>
          <Link to={`/players`} style={{width:"auto", height:"40px",backgroundColor:"#15803d",padding:"8px 16px",color:"white"}}>Head  to Head</Link>
          <Link to={`/tournaments/${idxx}/leaderboard`} style={{width:"auto", height:"40px",backgroundColor:"#15803d",padding:"8px 16px",color:"white"}}>Performances</Link>
        </div>
        <div>
          {console.log(tabledata.tour_type)}
          {
            tabledata.tour_type==="t10"?(
              <T10 matches={tabledata.matches} />
            ):tabledata.tour_type==="solo_test"?(
              <Solo_test matches={tabledata.matches}/>
            ):tabledata.tour_type==="test"?(
              <Test />
            ):tabledata.tour_type==="super_over"?(
              <SuperOver matches={[...(tabledata.matches)].reverse()} />
            ):(<div></div>)
          }
        </div>
      </div>
    </div>
  );
}

