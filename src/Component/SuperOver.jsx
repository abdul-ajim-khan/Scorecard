import { useEffect, useState } from "react"

import React from "react"
export default function SuperOver({matches}) {
  const [row,setrow] = useState([])

const allPlayers = ['Ajim', 'Soumik', 'Tushar', 'Soudip', 'Saikat', 'Surya']


    return(
        <div style={{marginTop:"10px",width:"100%"}}>
        <div className="full_table">
          <div style={{width:"102%",height:"575px",overflow:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",color:"red",backgroundColor:"#e2e8f0",height:"50px",alignItems:"center",borderRadius:"0px",fontSize:"25px",maxWidth:"102"}}>

              {allPlayers.map((val,idx)=>{
                return(<React.Fragment  key={idx}>
                
                  <div style={{textAlign:"center",width:"90px"}}>
                    <div style={{textAlign:"center",width:"90px"}}>
                      <div>
                        {val}
                      </div>
                    </div>
                    
                  </div>
                    {idx!==5&&<div style={{borderRight:"2px solid",height:"30px"}}></div>}
                </React.Fragment>
                )
              })}



            </div>

              <div style={{}}>
                {
                  matches.map((vall, i)=>{
                    return(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #bebebeff ",paddingTop:"10px",paddingBottom:"10px",borderRadius:'0px'}}>
                        {allPlayers.map((val,idx)=>{
                          const iswin = vall.winners.find(
                            (p) => p.name === val
                          );
                          const islose = vall.losers.find(
                            (p) => p.name === val
                          );
                          
                          return(
                            <div key={val}>
                            { iswin ? (
                              <div style={{width:"90px",height:"26px",textAlign:"center",backgroundColor:"#a6ffc8ff",borderRadius:"13px"}}>
                                <div>W</div>
                              </div>
                            ):islose?(
                              <div style={{width:"90px",height:"26px",textAlign:"center",backgroundColor:"#ffb9b9ff",borderRadius:"13px"}}>
                                <div>L</div>
                              </div>
                            ):(
                              <div style={{width:"90px",height:"26px",textAlign:"center",borderRadius:"13px"}}> </div>
                            )
                            }

                            </div>
                          )
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