import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Pomodoro from "./components/Pomodoro";
import Settings from "./components/Settings";
import "animate.css";
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  height: 63px;
  border-radius: 31.5px;
  background: #161932;
  font-family: "Kumbh Sans";
  margin: 15px 10px;

  @media only screen and (min-width: 768px) {
    max-width: 450px;
    margin: 0 auto;
  }
`;
const Texts = styled.div`
  width: 50%;
  border-radius: 26.5px;
  color: rgba(215, 224, 255, 0.5);
  padding: 18px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const SettingIcon = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
`;

function App() {
  const [pomodoro, setPomodoro] = useState<boolean>(true);
  const [short, setShort] = useState<boolean>(false);
  const [long, setLong] = useState<boolean>(false);
  const [pause, setPause] = useState<any>(false);
  const [settings, setSettings] = useState(false);
  const [fontFamily, setFontFamily] = useState("Kumbh Sans");
  const [color, setColor] = useState("#f87070");
  const [running, setRunning] = useState(false);

  const [pomodoroInput, setPomodoroInput] = useState(25);
  const [shortBreakInput, setShortBreakInput] = useState(5);
  const [longBreakInput, setLongBreakInput] = useState(15);

  const [progress, setProgress] = useState<number>(100);

  const [pomodoroTime, setPomodoroTime] = useState<any>(25);
  const [countDownDate, setCountDownDate] = useState(pomodoroTime * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (pomodoro) {
      setPomodoroTime(pomodoroInput);
    } else if (short) {
      setPomodoroTime(shortBreakInput);
    } else if (long) {
      setPomodoroTime(longBreakInput);
    }
  }, [
    pomodoro,
    longBreakInput,
    shortBreakInput,
    pomodoroTime,
    countDownDate,
    short,
    long,
  ]);

  const startTimer = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    setCountDownDate(pomodoroTime * 60);
  }, [pomodoroTime]);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCountDownDate((prevCount) => {
          if (prevCount === 1) {
            clearInterval(intervalId);
            setIsRunning(false);
            alert("Timer is out");
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  useEffect(() => {
    setProgress((countDownDate / (pomodoroTime * 60)) * 100);
  }, [countDownDate, pomodoroTime]);

  return (
    <>
      <div className="animate__animated animate__fadeInDown">
        <PomodoroH1 style={{ fontFamily }} onClick={() => {}}>
          Pomodoro
        </PomodoroH1>
        <TextContainer>
          <Texts
            onClick={() => {
              setPomodoroTime(pomodoroInput);
              setPomodoro(true);
              setShort(false);
              setLong(false);
            }}
            style={{
              fontFamily,
              backgroundColor: pomodoro ? color : "transparent",
              color: pomodoro ? "black" : "white",
            }}
          >
            Pomodoro
          </Texts>
          <Texts
            onClick={() => {
              setShort(true);
              setPomodoro(false);
              setLong(false);
            }}
            style={{
              fontFamily,
              backgroundColor: short ? color : "transparent",
              color: short ? "black" : "white",
            }}
          >
            short break
          </Texts>
          <Texts
            onClick={() => {
              setLong(true);
              setPomodoro(false);
              setShort(false);
            }}
            style={{
              fontFamily,
              backgroundColor: long ? color : "transparent",
              color: long ? "black" : "white",
            }}
          >
            long break
          </Texts>
        </TextContainer>

        <Pomodoro
          pause={pause}
          setPause={setPause}
          fontFamily={fontFamily}
          color={color}
          running={running}
          setRunning={setRunning}
          startTimer={startTimer}
          countDownDate={countDownDate}
          setIsRunning={setIsRunning}
          isRunning={isRunning}
          formatTime={formatTime}
          progress={progress}
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
            setPomodoroTime={setPomodoroTime}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
