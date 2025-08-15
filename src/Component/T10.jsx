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
  Default,
};
export default function T10({ matches , tabledata, players}) {
  return (
    <div
      style={{
        marginTop: "30px",
        display:"flex",
        gap:"5px",
        flexWrap:"wrap"
        // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        // gridTemplateColumns: matches.winner?"300px auto":"auto",
      }}>
      {matches.map((val, idx) => {
        return (
          <div
            key={idx} 
            style={{
              backgroundColor: `${val.match_type=="final"?"#4857ffff":val.winner!==null?"#71aeffff":"#7682ffff"}`,
              height: "85px",
              borderRadius: "9999px",
              width: `${val.match_type!=="group"?"200%":"49.5%"}`,
              filter:"contrust(110%)"
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              //   padding: "10px",

            }}
          >
            <div
              style={{
                
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {/* {val.winner &&console.log(players[val.winner.id-1])} */}
              {(
                <img
                  src={playerImages[players[val.captain_a-1]] || playerImages.Default}
                  alt={playerImages[players[val.captain_a-1]]}
                  style={{
                    width: "95px",
                    height: "85px",
                    borderRadius: "50px 0px 0px 50px",
              filter: "brightness(120%) contrast(80%)",

                    // background: "rgba(65, 30, 30, 0.5)",
                    objectFit: "cover",
                    objectPosition:"0px -15px",
                    // filter: `${!val.winner_captain_id?"none":"grayscale(100%)"}`,
                    filter: `${val.winner!==null&&val.winner_captain_id==val.captain_b?"grayscale(100%)":"none"}`,

                    WebkitMaskImage:
                      "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                  }}
                />
              )}

              <h1>{val.id}</h1>

              { (
                <img
                  src={playerImages[players[val.captain_b-1]] || playerImages.Default}
                  alt={playerImages[players[val.captain_b-1]]}
                  style={{
                    width: "95px",
                    height: "85px",
                    borderRadius: "0px 50px 50px 0px",
                    objectFit: "cover",
                    objectPosition:"0px -15px",
                    filter: `${val.winner_captain_id==null||val.winner_captain_id==val.captain_b?"none":"grayscale(100%)"}`,
                    // filter:`${...filter,"brightness(120%) contrast(80%)"}`,
                    WebkitMaskImage:
                      "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
