import { useState } from "react";
import "./App.css";
import styled from "styled-components";
const PomodoroH1 = styled.h1`
  padding-top: 32px;
  padding-bottom: 45px;
  color: #d7e0ff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TextContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  height: 63px;
  border-radius: 31.5px;
  background: #161932;
  font-family: "Kumbh Sans";
  padding: 15px 10px;
`;
const Texts = styled.div`
  width: 100%;
  border-radius: 26.5px;
  color: rgba(215, 224, 255, 0.5);
  padding: 18px 22px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 700;
`;

function App() {
  const [pomodoro, setPomodoro] = useState<boolean>(true);
  const [short, setShort] = useState<boolean>(false);
  const [long, setLong] = useState<boolean>(false);
  return (
    <>
      <div>
        <PomodoroH1>Pomodoro</PomodoroH1>
        <TextContainer>
          <Texts
            className={pomodoro ? "active" : "null"}
            onClick={() => {
              setPomodoro(true);
              setShort(false);
              setLong(false);
            }}
          >
            Pomodoro
          </Texts>
          <Texts
            className={short ? "active" : "null"}
            onClick={() => {
              setShort(true);
              setPomodoro(false);
              setLong(false);
            }}
          >
            short break
          </Texts>
          <Texts
            className={long ? "active" : "null"}
            onClick={() => {
              setLong(true);
              setPomodoro(false);
              setShort(false);
            }}
          >
            {" "}
            long break
          </Texts>
        </TextContainer>
      </div>
    </>
  );
}

export default App;
