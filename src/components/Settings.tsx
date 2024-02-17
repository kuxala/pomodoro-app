import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 549px;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 10%);
  border-radius: 15px;
  background: #fff;
`;
const SettingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px;
  align-items: center;
`;
const SettingH1 = styled.p`
  color: #161932;
  font-family: "Kumbh Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TimeDiv = styled.div`
  padding: 0 24px;
`;
const TimeDivHeader = styled.p`
  color: #161932;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.231px;
`;
const P = styled.p`
  color: #1e213f;
  font-family: "Kumbh Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.7;
`;
const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
`;
const Input = styled.input`
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  border: 0px;
  border-radius: 10px;
  background: #eff1fa;
  padding: 0 20px;
  color: #1e213f;
  font-size: 16px;
`;
const FontDiv = styled.div`
  display: flex;
  padding: 10px;
  gap: 16px;
  justify-content: center;
`;

const FontDivComponents = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-color: #eff1fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 50%;
`;
const ColorDiv = styled.div`
  display: flex;
  padding: 10px;
  gap: 16px;
  justify-content: center;
`;
const ColorDivComponents = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-color: #f87070;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
`;
const Button = styled.button`
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 53px;
  border-radius: 26.5px;
  background: #161932;
  border: 0px;
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const backgroundColor = {
  backgroundColor: "Black",
  color: "#fff",
};
const backgroundWhite = {
  backgroundColor: "#EFF1FA",
};

function Settings({
  settings,
  setSettings,
  fontFamily,
  setFontFamily,
  setColor,
  pomodoroInput,
  setPomodoroInput,
  shortBreakInput,
  setShortBreakInput,
  longBreakInput,
  setLongBreakInput,
}: any) {
  const [active, setActive] = useState<string>(fontFamily);
  const [red, setRed] = useState(true);
  const [blue, setBlue] = useState(false);
  const [pink, setPink] = useState(false);
  return (
    <>
      <Container>
        <SettingDiv>
          <SettingH1>Settings</SettingH1>
          <img
            src="../../assets/icon-close.svg"
            width="16px"
            height="16px"
            onClick={() => {
              setSettings(!settings);
            }}
          />
        </SettingDiv>

        <TimeDiv>
          <TimeDivHeader>TIME (MINUTES)</TimeDivHeader>
          <div>
            <DivFlex>
              <P>pomodoro</P>
              <Input
                type="number"
                value={pomodoroInput}
                onChange={(e) => {
                  setPomodoroInput(e.target.value);
                }}
              />
            </DivFlex>
            <DivFlex>
              <P>short break</P>
              <Input
                type="number"
                value={shortBreakInput}
                onChange={(e) => {
                  setShortBreakInput(e.target.value);
                }}
              />
            </DivFlex>
            <DivFlex>
              <P>long break</P>
              <Input
                type="number"
                value={longBreakInput}
                onChange={(e) => {
                  setLongBreakInput(e.target.value);
                }}
              />
            </DivFlex>
          </div>
          <div>
            <TimeDivHeader
              style={{
                paddingTop: "40px",
                paddingBottom: "10px",
              }}
            >
              FONT
            </TimeDivHeader>
            <FontDiv>
              <FontDivComponents
                style={{
                  ...(active === "Kumbh Sans"
                    ? backgroundColor
                    : backgroundWhite),
                  fontFamily,
                }}
                onClick={() => {
                  setFontFamily("Kumbh Sans");
                  setActive("Kumbh Sans");
                }}
              >
                Aa
              </FontDivComponents>
              <FontDivComponents
                style={{
                  ...(active == "Roboto Slab"
                    ? backgroundColor
                    : backgroundWhite),
                  fontFamily,
                }}
                onClick={() => {
                  setFontFamily("Roboto Slab");
                  setActive("Roboto Slab");
                }}
              >
                Aa
              </FontDivComponents>
              <FontDivComponents
                style={{
                  ...(active == "Space Mono"
                    ? backgroundColor
                    : backgroundWhite),
                  fontFamily,
                }}
                onClick={() => {
                  setActive("Space Mono");
                  setFontFamily("Space Mono");
                }}
              >
                Aa
              </FontDivComponents>
            </FontDiv>
          </div>
          <div>
            <TimeDivHeader
              style={{ paddingTop: "30px", paddingBottom: "10px" }}
            >
              COLOR
            </TimeDivHeader>
            <ColorDiv>
              <ColorDivComponents
                onClick={() => {
                  setColor("#F87070");
                  setRed(true);
                  setBlue(false);
                  setPink(false);
                }}
              >
                {red ? <img src="../../assets/tick.svg" width="20px" /> : null}
              </ColorDivComponents>
              <ColorDivComponents
                onClick={() => {
                  setColor("#70F3F8");
                  setRed(false);
                  setBlue(true);
                  setPink(false);
                }}
                style={{ backgroundColor: "#70F3F8" }}
              >
                {blue ? <img src="../../assets/tick.svg" width="20px" /> : null}
              </ColorDivComponents>
              <ColorDivComponents
                onClick={() => {
                  setColor("#D881F8");
                  setRed(false);
                  setBlue(false);
                  setPink(true);
                }}
                style={{ backgroundColor: "#D881F8" }}
              >
                {pink ? <img src="../../assets/tick.svg" width="20px" /> : null}
              </ColorDivComponents>
            </ColorDiv>
          </div>
          <Button
            onClick={() => {
              setSettings(!settings);
            }}
          >
            Apply
          </Button>
        </TimeDiv>
      </Container>
    </>
  );
}
export default Settings;
