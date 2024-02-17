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
  background-color: #161932;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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
  left: 35%;
  /* margin-left: 50px; */
  width: 140px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 26.5px;
  background: #f87070;
  border: 0px;
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
function Settings({
  settings,
  setSettings,
  setFontFamily,
  fontFamily,
  color,
  setColor,
  pomodoroInput,
  setPomodoroInput,
  shortBreakInput,
  setShortBreakInput,
  longBreakInput,
  setLongBreakInput,
}: any) {
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
                fontFamily: fontFamily,
              }}
            >
              FONT
            </TimeDivHeader>
            <FontDiv>
              <FontDivComponents
                style={{ fontFamily: "Kumbh Sans" }}
                onClick={() => {
                  setFontFamily("Kumbh Sans");
                }}
              >
                Aa
              </FontDivComponents>
              <FontDivComponents
                style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
                onClick={() => {
                  setFontFamily("Roboto Slab");
                }}
              >
                Aa
              </FontDivComponents>
              <FontDivComponents
                style={{ fontFamily: "Space Mono", fontWeight: "700" }}
                onClick={() => {
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
                }}
              >
                <img src="../../assets/tick.svg" width="20px" />
              </ColorDivComponents>
              <ColorDivComponents
                onClick={() => {
                  setColor("#70F3F8");
                }}
                style={{ backgroundColor: "#70F3F8" }}
              ></ColorDivComponents>
              <ColorDivComponents
                onClick={() => {
                  setColor("#D881F8");
                }}
                style={{ backgroundColor: "#D881F8" }}
              ></ColorDivComponents>
            </ColorDiv>
          </div>
          {/* <Button
            onClick={() => {
              setSettings(!settings);
            }}
          >
            Apply
          </Button> */}
        </TimeDiv>
      </Container>
    </>
  );
}
export default Settings;
