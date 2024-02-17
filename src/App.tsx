import { useState, useEffect } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Pomodoro from "./components/Pomodoro";
import Settings from "./components/Settings";
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
const SettingIcon = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
`;
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto' 
  }
`;
function App() {
  const [pomodoro, setPomodoro] = useState<boolean>(true);
  const [short, setShort] = useState<boolean>(false);
  const [long, setLong] = useState<boolean>(false);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [pause, setPause] = useState<any>(false);
  const [seconds, setSeconds] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [settings, setSettings] = useState(false);

  const [fontFamily, setFontFamily] = useState("Kumbh Sans");

  return (
    <>
      <div>
        <PomodoroH1 style={{ fontFamily }}>Pomodoro</PomodoroH1>
        <TextContainer>
          <Texts
            className={pomodoro ? "active" : "null"}
            onClick={() => {
              setPomodoro(true);
              setShort(false);
              setLong(false);
            }}
            style={{ fontFamily }}
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
            style={{ fontFamily }}
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
            style={{ fontFamily }}
          >
            long break
          </Texts>
        </TextContainer>

        <Pomodoro
          hours={hours}
          setHours={setHours}
          minutes={minutes}
          setMinutes={setMinutes}
          pause={pause}
          setPause={setPause}
          fontFamily={fontFamily}
        />

        <SettingIcon
          src="../assets/icon-settings.svg"
          onClick={() => {
            setSettings(!settings);
          }}
        />
        {settings ? (
          <Settings
            settings={settings}
            setSettings={setSettings}
            setFontFamily={setFontFamily}
            fontFamily={fontFamily}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
