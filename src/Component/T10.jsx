import Ajimp from "../Images/Ajim.jpeg";
import Soumik from "../Images/Soumik.jpg";
// import Saikat from "../Images/Saikat.jpg";

export default function T10({matches}) {
    return(
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"30px"}}>
        {/* <h1>T10</h1>
        <h1>{matches[0].id}</h1> */}
        {
            matches.map((val, idx)=>{
                return(
                    <div key={idx}  style={{backgroundColor:"#dbeafe",width:"49%",height:"68px",borderRadius:"9999px",display:'flex',justifyContent:"center",alignItems:"center",padding:"10px"}}>
                        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                            {val.winner&&<img src="#" alt={`${val.winner.name}`} style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>}
                            <h1>{val.id}</h1>
                            {val.loser&&<img src={`${val.loser.photo_name}`} alt={`${val.loser.name}`} />}
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}