export default function ChordDisplay({
  width,
  strings,
  hand,
  type,
  start,
  notes,
  chordNameString,
}) {
  ////////////////////////////////////////
  /*<ChordDisplay
    width={200}
    strings={6}
    hand={"left"}
    type={"traditional"}
    start={5}
    notes={["x", "x", "x", 7, 8, 9]}
    />
    */

  //notes array input will be [6th,5th,4th,3rd,2nd,1st]
  //and needs to be reversed in order to be [1st,2nd,3rd,4th,5th,6th]
  notes= notes.reverse(); 

  const stringColor = "rgb(153, 145, 138)";
  const notesColor = "rgb(78, 91, 128)";
  const fretColor = "rgb(54, 52, 52)";
  const outerBackgroundColor = "rgb(220, 222, 227)";
  const neckColor = "rgb(135, 100, 40)";
  const fontType = "Courier New";
  const fontWeight = 700;

  const heightFactor = 1.3;
  //const bridgeFactor = 20;

  let displayWidth = Math.floor(width);
  let displayHeight = Math.floor(width * heightFactor);
  let boxWidth = displayWidth / 7;
  let boxHeight = displayHeight / 6;
  //let bridgeHeight = Math.floor(displayHeight / bridgeFactor);
  let fretHeight = displayHeight / 6;
  let fretWidth = 0;
  if (strings == 6) {
    fretWidth = displayWidth / 7;
  }
  /*
    if (strings == 7) {
      //implement later
      fretWidth = 0;
    }
    */
  let baseBorder = displayWidth / 150;

  let circleHeight = boxWidth / 1.5;
  let circleWidth = boxWidth / 1.5;

  ///////////////////////////////////
  //find absolute positioning
  //notes : [5, 6, 7, "o", "x", "o"]
  //construct an array like below
  // [[x,y],[x,y],[x,y],"o","x","o"]
  //////////////////////////////////
  let positions = [];
  notes.forEach((note, i) => {
    let x = null;
    let y = null;
    let insetMultiplyers = [1, 1.3, 1.7, 2.6, 3.6, 4.6];

    if (note === "o" || note === "x") {
      y = 0.5 * boxHeight;
      if (hand === "left") {
        x = (i + 1) * boxWidth - 0.25 * circleWidth;
      } else if (hand === "right") {
        x = (7 - (i + 1)) * boxWidth - 0.25 * circleWidth;
      } else {
        x = null;
      }
      positions.push([x, y]);
    } else if (Number.isInteger(note)) {
      y = 1.5 * boxHeight + (note - start) * boxHeight - 0.5 * circleHeight;

      if (hand === "left") {
        x =
          (i + 1) * boxWidth -
          0.5 * circleWidth -
          (baseBorder * insetMultiplyers[i]) / 2;
      } else if (hand === "right") {
        x =
          (7 - (i + 1)) * boxWidth -
          0.5 * circleWidth +
          (baseBorder * insetMultiplyers[i]) / 2;
        // - 0.5 * circleWidth;
        //let insetMultiplyers = [1, 1.3, 1.7, 2.6, 3.6, 4.6];
        //(baseBorder * insetMultiplyers[5 - i]) / 2;
      } else {
        x = null;
      }
      positions.push([x, y]);
    } else {
      positions.push(null);
    }
  });
  //////////////////////////////////////
  //////////////////////////////////////

  let chordName = (
    <div
      style={{
        position: "absolute",
        left: boxWidth + "px",
        top: 6 * boxHeight + 0.25 * boxHeight + "px",
        color: notesColor,
        zIndex: 5,
        //backgroundColor: "red",
        fontSize: circleWidth + "px",
        fontFamily: fontType,
        fontWeight: fontWeight,
      }}
    >
      {chordNameString}
    </div>
  );
  //////////////////////////////////////////
  //notes : [5, 6, 7, "o", "x", "o"]
  //positions: [[x,y],[x,y],[x,y],....]
  //we need notesPlayed: an array of divs with correct
  //positioning and styling and content (circle, "x", or "o")
  //////////////////////////////////////////////////
  let notesPlayed = [];

  notes.forEach((note, i) => {
    let positionsArr = positions[i];
    let x = positionsArr[0];
    let y = positionsArr[1];

    if (note === "x" || note === "o") {
      notesPlayed.push(
        <div
          style={{
            position: "absolute",
            left: x + "px",
            top: y + "px",
            color: notesColor,
            zIndex: 5,
            //backgroundColor: "red",
            fontSize: circleWidth + "px",
            fontFamily: fontType,
          }}
        >
          {note}
        </div>,
      );
    } else if (Number.isInteger(note)) {
      notesPlayed.push(
        <div
          style={{
            position: "absolute",
            left: x + "px",
            top: y + "px",
            backgroundColor: notesColor,
            height: circleHeight + "px",
            width: circleWidth + "px",
            zIndex: 5,
            borderRadius: "50%",
          }}
        ></div>,
      );
    } else {
      notesPlayed.push(null);
    }
  });

  //needs to be an array of divs at the correct positions
  //divs with either a circle for a fretted note or an "x" or "o"
  /*let notesPlayed = (
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "50px",
          backgroundColor: "blue",
          height: circleHeight + "px",
          width: circleWidth + "px",
          zIndex: 5,
          borderRadius: "50%"
        }}
      ></div>
    );
  
    */

  let boxes = [];

  for (let col = 1; col <= 7; col++) {
    console.log("in column ");
    let insetWidth = 0;
    if (hand === "left") {
      switch (col) {
        case 2:
          insetWidth = baseBorder * 1.3;
          break;
        case 3:
          insetWidth = baseBorder * 1.7;
          break;
        case 4:
          insetWidth = baseBorder * 2.6;
          break;
        case 5:
          insetWidth = baseBorder * 3.6;
          break;
        case 6:
          insetWidth = baseBorder * 4.6;
          break;
        default:
          insetWidth = 0;
      }
    }
    if (hand === "right") {
      switch (col) {
        case 2:
          insetWidth = baseBorder * 4.6;
          break;
        case 3:
          insetWidth = baseBorder * 3.6;
          break;
        case 4:
          insetWidth = baseBorder * 2.6;
          break;
        case 5:
          insetWidth = baseBorder * 1.7;
          break;
        case 6:
          insetWidth = baseBorder * 1.3;
          break;
        default:
          insetWidth = 0;
      }
    }
    //insetWidth = insetWidth / 2;
    for (let row = 1; row <= 6; row++) {
      if (col === 1) {
        boxes.push(
          <div style={{ backgroundColor: outerBackgroundColor }}></div>,
        );
      } else {
        if (col === 7) {
          if (row === 2) {
            boxes.push(
              <div style={{ backgroundColor: outerBackgroundColor }}>
                <p
                  style={{
                    //margin: boxWidth / 2 + "px",
                    fontSize: circleWidth + "px",
                    color: notesColor,
                    opacity: "80%",
                    fontFamily: fontType,
                  }}
                >
                  {start}{" "}
                </p>
              </div>,
            );
          } else {
            boxes.push(
              <div style={{ backgroundColor: outerBackgroundColor }}>
                <p
                  style={{
                    margin: boxWidth / 2 + "px",
                  }}
                >
                  {" "}
                </p>
              </div>,
            );
          }
        } else {
          console.log("in row, inset width :" + insetWidth);
          if (row === 1) {
            boxes.push(
              <div
                style={{
                  boxSizing: "border-box",
                  backgroundColor: outerBackgroundColor,
                }}
              ></div>,
            );
          } else {
            if (hand === "left") {
              boxes.push(
                <div
                  style={{
                    boxSizing: "border-box",
                    border: baseBorder + "px solid " + stringColor,
                    borderBottom: baseBorder + "px solid " + fretColor,
                    borderTop: baseBorder + "px solid " + fretColor,
                    borderRight: insetWidth + "px solid " + stringColor,
                    backgroundColor: neckColor,
                  }}
                >
                  {" "}
                </div>,
              );
            }
            if (hand === "right") {
              boxes.push(
                <div
                  style={{
                    boxSizing: "border-box",
                    border: baseBorder + "px solid " + stringColor,
                    borderBottom: baseBorder + "px solid " + fretColor,
                    borderTop: baseBorder + "px solid " + fretColor,
                    borderLeft: insetWidth + "px solid " + stringColor,
                    backgroundColor: neckColor,
                  }}
                >
                  {" "}
                </div>,
              );
            }
          }
        }
      }
    }
  }

  let displayBox = (
    <>
      <div
        style={{
          width: displayWidth + "px",
          //border: baseBorder + "px solid grey",
          display: "grid",
          gridTemplateColumns: "repeat(6, " + boxWidth + "px)",
          gridTemplateRows: "repeat(6, " + boxHeight + "px)",
          gridAutoFlow: "column",
          position: "relative",
          zIndex: -5,
          backgroundColor: outerBackgroundColor,
          paddingBottom: boxHeight + "px",
        }}
      >
        {boxes}
        {notesPlayed}
        {chordName}
      </div>
    </>
  );

  return (
    <div>
      {/*<h1>testing chord display </h1>
      widht is {width}
      strings is {strings}
      hand is {hand}
      type is {type}
      start is {start}
      notes is {notes}
      fretHeight is {fretHeight}
      <p> fret widht: {fretWidth}</p>
      <p> fret height : {fretHeight} </p>
      <p> new height is {displayHeight} </p>
      <p> boxheight is {boxHeight} </p>
      <p> boxWidth is {boxWidth} </p>
      <p> boxes.length is {boxes.length} </p>
  */}
      {displayBox}
    </div>
  );
}
