import * as fs from 'fs';
//import { json } from 'stream/consumers';
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

///*************\
// */  find a way to add : sus equiv to sus4, add2 equiv to add9


//chord names not yet implemented- special chords, altered chords, add chords etc
//to exclude from the testing until implemented
const chordsToExclude = ["minmaj7", "dom7b5", "dom7#5", "dom7b9", "dom7#9", 'aug'];

//option: 1- displays all matches found for each input and displays 
//input info and and NOT FOUND if not found 
//option 2 - only shows : 
// no chords found || !(chordInputName == chordFoundName)
function searchWithTestData(allChords, option){
  //console.log("test data : " , rootD);
  
  if (option == 1){
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
          console.log( matchingChords.length , " matches found for ", searchArray,"root ", category["root"],  "name: ", chordObj["type"]); 
          matchingChords.forEach((chord,i)=> {
            console.log((i+1) + ") : " + 'name: '+ chord["chordRoot"] + " " + chord["chordName"] + " " + chord["chord"] + " ", chord["voicingString"], " ", chord["category"] ); 
          });
        }
      });  
    }); 
  } else if (option == 2){
    //log if no chords found || !(chordInputName == chordFoundName) 
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
        
          //console.log( matchingChords.length , " matches found for ", searchArray, "name: ", chordObj["type"]); 
         
            /*
            console.log((i+1) + ") : " + 'name: '+ midiNotesToNotes[chord["chordRoot"]] + chord["chordName"] + " " + chord["chord"]); 
            */ 

          ///////////////
          //Test data 
           //test data -> chordObj is { type: "m", notes: [10,'x','x',...]}
           //test data -> category is 
           // {root: 62, rootname: "D", category : "Big Minor", chords: []}
           //chords from above is : 
           // [ {type: "m", notes: ["x", "x", "o", 2, 3]}, {........}  ]
           //////////////

           //////////////
           //file.json 
           //a long array with object for each possible chord voicing 
           // [
           //  {"chord" ["x", "x", "x", 5,5,3 ], "chordName: "M", "chordRoot" : 48}, 
           // { .......}, 
           // { .......} 
           //]
           // matchingChords will contain an array of the chord objects in which the 
           // fret numbers match (similar structure to file.json, but shorter): 
           //  [
            //  {"chord" ["x", "x", "x", 5,5,3 ], "chordName: "M", "chordRoot" : 48}, 
            // { .......}, 
            // { .......} 
            // ]
            ///////////////

            //We need to log the following: 
            // no chords found || !(chordInputName == chordFoundName)

          //determine if there is an exact match in matchingChords 
          let exactMatch = false; 
          if (matchingChords.length > 0){
            matchingChords.forEach( chordMatch => {
              if((chordMatch["chordName"] === chordObj["type"]) 
              &&(chordMatch["chordRoot"] === category["root"])){
                exactMatch = true; 
              }
            }); 
          }

          //find imperfect matches- same frets but different names 
          let imperfectMatches = []; 
          if(!exactMatch && matchingChords.length > 0){
            matchingChords.forEach( matchingChord => {
              imperfectMatches.push( "" + matchingChord["chordRoot"] + " " + matchingChord["chordName"]); 
            }); 
          }

          //remove duplicates from imperfect matches
          let matchesNoDups = []; 
          imperfectMatches.forEach(match => {
            if(!(matchesNoDups.includes(match))){
              matchesNoDups.push(match); 
            }
          }); 


          if(exactMatch) {
            console.log("--->" +  category["root"] + " " + chordObj["type"] + " FOUND" );
          } else {
            if(matchingChords.length === 0){
              if( !(chordsToExclude.includes(chordObj["type"])) ){
                console.log("XXXX NO CHORDS FOUND : ", category["root"] + " " + chordObj["type"] + " ",  chordObj["notes"] ); 
              }
            } else {
              if( !(chordsToExclude.includes(chordObj["type"])) ){
                console.log("XXXX NO EXACT MATCHES FOUND : ", category["root"] + " " + chordObj["type"] + " " , chordObj["notes"] ); 
                console.log("     others found: ",  matchesNoDups);
              } 
            }
          }


      });  
    });
  } else {
    console.log("Invalid option"); 
  }
}


fs.readFile("jsonFlattened/majorKeysFlatSimple.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    chordData = JSON.parse(jsonString);
    //console.log(chordData); 
    searchWithTestData(chordData,1);
});

