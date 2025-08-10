import { useEffect, useState } from "react"
import React from "react"
export default function Solo_test({matches}) {
  const [row,setrow] = useState([])
const allPlayers = ['Ajim', 'Soumik', 'Tushar', 'Soudip', 'Saikat', 'Surya']

    return(
        <div style={{marginTop:"-9px",width:"87%",marginLeft:"-110px",height:"700px"}}>
        <div className="full_table" style={{width:"87%",height:"700px"}}>
          <div style={{width:"140%"}}>
            <div style={{display:"flex",justifyContent:"space-between",color:"red",backgroundColor:"#e2e8f0",height:"50px",alignItems:"center",borderRadius:"0px",fontSize:"25px"}}>

              {allPlayers.map((val,idx)=>{
                return(<React.Fragment key={idx}>
                
                  <div style={{width:"100px",textAlign:"center",width:"150px"}}>
                    <div>
                    {val}
                    </div>
                    
                  </div>
                    {idx!==5&&<div style={{borderRight:"2px solid",height:"30px"}}></div>}
                </React.Fragment>
                )
              })}



            </div>

              <div style={{overflow:"auto",width:"100%",height:"510px"}}>
                 {
                    matches.map((vall, i)=>{
                      // console.log(vall);
                        const maxPoints = Math.max(...vall.map(p => p.point));
                        console.log(maxPoints);
                    return(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #e0e0e0ff ",paddingTop:"5px",paddingBottom:"5px",borderRadius:'0px',alignItems:"center"}}>
                        {allPlayers.map((val,idx)=>{
                        const match = vall.find(v => v.name === val);
                        // const maxPoints = Math.max(...vall.map(p => p.points));
                        return match ? (
                          <div
                            style={{
                              width: "150px",
                              height: "26px",
                              textAlign: "center",
                              backgroundColor: match.point==maxPoints?"#c0ffd8ff":"none",
                              borderRadius: "13px"
                            }}
                            key={idx}
                          >
                            <div>{match ? match.point : <></>}</div>
                          </div>
                        ):<div style={{width: "150px",}}></div>

                      }
                        )}
                    </div>
                    )
                  })
                }
              </div>








            
          </div>
        </div>




        </div>
    )
}
