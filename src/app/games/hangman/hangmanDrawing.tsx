const head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "49px",
      right: "-20px",
    }}
  />
);

const body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "98px",
      right: 0,
    }}
  />
);

const right_arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-90px",
      rotate: "-30deg",
    }}
  />
);

const left_arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "0px",
      rotate: "30deg",
    }}
  />
);

const left_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const right_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {head}
      {body}
      {right_arm}
      {left_arm}
      {left_leg}
      {right_leg}
      <div
        style={{
          position: "absolute",
          height: "50px",
          width: "10px",
          background: "black",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
