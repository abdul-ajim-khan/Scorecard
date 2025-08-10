import React, { useEffect, useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbHomeStats } from "react-icons/tb";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import T10 from "./T10";
import Solo_test from "./Solo_test";
import Test from "./Test";
import SuperOver from "./SuperOver";

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
          <Link to="#" style={{ textDecoration: "none" }}>
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

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700, height: 600}}>
          <div style={{display:"flex",justifyContent:'center',width:"100%"}}>
            {tabledata?.tour_type === "t10" ? (
            <T10 matches={tabledata.matches} />
          ) : tabledata?.tour_type === "solo_test" ? (
            <Solo_test matches={tabledata.matches} />
          ) : tabledata?.tour_type === "test" ? (
            <Test />
          ) : tabledata?.tour_type === "super_over" ? (
            <SuperOver matches={[...(tabledata.matches || [])].reverse()} />
          ) : (
            <div></div>
          )}
          </div>
        </Box>
      </Modal>

      <div>
        {MatchData.map((val, idx) => {
          return (
            <div key={idx} onClick={() => handleOpen(val.id)}>
              <div
                style={{
                  backgroundColor: "#DBEAFE",
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
