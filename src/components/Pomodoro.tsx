import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Circular = styled.div`
  position: relative;
  max-width: 300px;
  display: flex;
  margin: 0 auto;
  margin-top: 48px;
  background-color: #161932;

  border-radius: 50%;
`;
const CircularP = styled.p`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #d7e0ff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -4px;
`;
const CircularPause = styled.p`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #d7e0ff;
  font-family: "Kumbh Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.125px;
`;
function Pomodoro({
  pause,
  setPause,
  fontFamily,
  color,
  setRunning,
  running,
  formattedTime,
  progress,
}: any) {
  return (
    <>
      <div>
        <Circular>
          <CircularProgress
            style={{ color: color }}
            size="300px"
            variant="determinate"
            value={progress}
          />
          <CircularP style={{ fontFamily }}>{formattedTime}</CircularP>
          <CircularPause
            style={{ fontFamily }}
            onClick={() => {
              setPause(!pause);
              setRunning(!running);
            }}
          >
            {pause ? "PAUSE" : "START"}
          </CircularPause>
        </Circular>
      </div>
    </>
  );
}

export default Pomodoro;
