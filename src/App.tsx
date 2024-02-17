import { useState, useEffect } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Pomodoro from "./components/Pomodoro";
import Settings from "./components/Settings";
import ShortBreak from "./components/ShortBreak";
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

function App() {
  const [pomodoro, setPomodoro] = useState<boolean>(false);
  const [short, setShort] = useState<boolean>(false);
  const [long, setLong] = useState<boolean>(false);
  const [hours, setHours] = useState<number>(0);
  const [pause, setPause] = useState<any>(false);
  const [isActive, setIsActive] = useState(false);
  const [settings, setSettings] = useState(false);
  const [fontFamily, setFontFamily] = useState("Kumbh Sans");
  const [color, setColor] = useState("#f87070");
  const [running, setRunning] = useState(false);

  const [pomodoroInput, setPomodoroInput] = useState(25);
  const [shortBreakInput, setShortBreakInput] = useState(5);
  const [longBreakInput, setLongBreakInput] = useState(15);

  const [pomodoroTime, setPomodoroTime] = useState<any>(25);

  const [seconds, setSeconds] = useState(pomodoroTime * 60);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes < 10 ? "0" + minutes : minutes}:${
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
  }`;

  useEffect(() => {
    if (running) {
      // setSeconds(pomodoroInput * 60);
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            setRunning(false);
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [running, pomodoroTime]);

  return (
    <>
      <div>
        <PomodoroH1
          style={{ fontFamily }}
          onClick={() => {
            setPomodoroTime(25);
          }}
        >
          Pomodoro
        </PomodoroH1>
        <TextContainer>
          <Texts
            className={pomodoro ? "active" : "null"}
            onClick={() => {
              setPomodoroTime(25);
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
              // setPomodoroTime(5);
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
              // setPomodoroTime(15);
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
          pause={pause}
          setPause={setPause}
          fontFamily={fontFamily}
          color={color}
          running={running}
          setRunning={setRunning}
          formattedTime={formattedTime}
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
            color={color}
            setColor={setColor}
            pomodoroInput={pomodoroInput}
            setPomodoroInput={setPomodoroInput}
            shortBreakInput={shortBreakInput}
            setShortBreakInput={setShortBreakInput}
            longBreakInput={longBreakInput}
            setLongBreakInput={setLongBreakInput}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
