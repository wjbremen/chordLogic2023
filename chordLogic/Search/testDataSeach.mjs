import * as fs from 'fs';
import { json } from 'stream/consumers';
import { rootD } from './testData.mjs';


let chordData = null; 
let testingData = rootD; 

const midiNotesToNotes = {
  40: "E", 
  41: "F",
  42: "F#/Gb",
  43: "G",
  44: "G#/Ab",
  45: "A",
  46: "A#/Bb",
  47: "B",
  48: "C",
  49: "C#/Db",
  50: "D",
  51: "D#/Eb",
  52: "E", 
  53: "F",
  54: "F#/Gb",
  55: "G",
  56: "G#/Ab",
  57: "A",
  58: "A#/Bb",
  59: "B",
  60: "C",
  61: "C#/Db",
  62: "D",
  63: "D#/Eb",
  64: "E", 
  65: "F",
  66: "F#/Gb",
  67: "G",
  68: "G#/Ab",
  69: "A",
  70: "A#/Bb",
  71: "B",
  72: "C",
  73: "C#/Db",
  74: "D",
  75: "D#/Eb",
  76: "E"

}



function searchWithTestData(allChords){
  //console.log("test data : " , rootD);
  
  testingData.forEach( category => {
    console.log("/////////////////////////////////////////");
    console.log('root: ', category["rootname"] , ', midi root: ' , category["root"]);
    console.log("Category: ", category["category"]); 
    category["chords"].forEach(chordObj => {
      let searchArray = chordObj["notes"]; 
      let matchingChords = []; 
      allChords.forEach(chord => {
        if(
          chord["chord"][0] === searchArray[0] 
          && chord["chord"][1] === searchArray[1]
          && chord["chord"][2] === searchArray[2]
          && chord["chord"][3] === searchArray[3]
          && chord["chord"][4] === searchArray[4]
          && chord["chord"][5] === searchArray[5]
        )
        {
          matchingChords.push(chord); 
        }
      });
      if(matchingChords.length == 0){
        console.log(chordObj, " NOT FOUND"); 
      } else{
        console.log( matchingChords.length , " matches found for ", searchArray, "name: ", chordObj["type"]); 
        matchingChords.forEach((chord,i)=> {
          console.log((i+1) + ") : " + 'name: '+ midiNotesToNotes[chord["chordRoot"]] + chord["chordName"] + " " + chord["chord"]); 
        });
      }
    });  
  }); 
}


fs.readFile("../file.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    chordData = JSON.parse(jsonString);
    searchWithTestData(chordData);
});

