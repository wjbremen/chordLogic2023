import * as fs from 'fs';
import { type } from 'os';
import { getFretboardNotesObject } from '../guitarLogic.mjs';


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

function midiToNote(note){
    return midiNotesToNotes[note]; 
}

function fretsToNotes(fretArray){
    let fretboardNotes = getFretboardNotesObject(); 
    //console.log(fretboardNotes); 
    let notesArray = []; 
    let fretIndex = 0; 
    for(let string = 6; string >= 1; string--){
        let fret = fretArray[fretIndex]; 
        //fret could be "o", "x", or number 
        let midiNote = null; 
        let note = null; 

        
            //find midi note then find note
             switch(string){
                case 6: 
                    if(typeof fret === "number"){
                        notesArray.push(midiNotesToNotes[fretboardNotes["sixth"][fret]]); 
                    } else if(fret === "x"){
                        notesArray.push("x");  
                    } else if(fret === "o"){
                        notesArray.push(midiNotesToNotes[fretboardNotes["sixth"][0]]); 
                    }
                    break;
                case 5: 
                if(typeof fret === "number"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["fifth"][fret]]); 
                } else if(fret === "x"){
                    notesArray.push("x");  
                } else if(fret === "o"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["fifth"][0]]); 
                }
                    break;
                case 4: 
                if(typeof fret === "number"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["fourth"][fret]]); 
                } else if(fret === "x"){
                    notesArray.push("x");  
                } else if(fret === "o"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["fourth"][0]]); 
                }
                    break;
                case 3: 
                if(typeof fret === "number"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["third"][fret]]); 
                } else if(fret === "x"){
                    notesArray.push("x");  
                } else if(fret === "o"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["third"][0]]); 
                }
                    break;
                case 2: 
                if(typeof fret === "number"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["second"][fret]]); 
                } else if(fret === "x"){
                    notesArray.push("x");  
                } else if(fret === "o"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["second"][0]]); 
                }
                    break; 
                case 1: 
                if(typeof fret === "number"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["first"][fret]]); 
                } else if(fret === "x"){
                    notesArray.push("x");  
                } else if(fret === "o"){
                    notesArray.push(midiNotesToNotes[fretboardNotes["first"][0]]); 
                }
                    break;
                default: 
                    break; 
                
             }
        fretIndex++; 
    }

    return notesArray; 
}

//fretsToNotes("hello"); 

export function search(chordArray){
    let match = false; 
    //let chordMatch = null ;
    let chordMatches = []; 
    let chordData = null; 
    //let root = null;
    //let name = null; 
   
    fs.readFile("./file.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        chordData = JSON.parse(jsonString); 
        //console.log(chordData); 
        chordData.forEach(chordObj => {
            //console.log("chord obj : " , chordObj); 
            if(
                chordObj["chord"][0] == chordArray[0]
                && chordObj["chord"][1] == chordArray[1]
                && chordObj["chord"][2] == chordArray[2]
                && chordObj["chord"][3] == chordArray[3]
                && chordObj["chord"][4] == chordArray[4]
                && chordObj["chord"][5] == chordArray[5]
            ){
                match = true; 
                //chordMatch = chordObj["chord"]; 
                //root = chordObj["chordRoot"]; 
                //name = chordObj["chordName"]; 
                //console.log("match : ", chordObj); 
                chordMatches.push(
                    {chord: chordObj["chord"], 
                    root : chordObj["chordRoot"], 
                    name : chordObj["chordName"]
                    }
                );
            }
          });
    
          if(match){
            console.log( chordMatches.length  + " chords found: "); 
            chordMatches.forEach((chordMatch, i) =>{
                console.log((i+ 1) + ")"); 
                console.log(midiToNote(chordMatch["root"]) + " " + chordMatch["name"]); 
                console.log(chordMatch["chord"]); 
                console.log(fretsToNotes(chordMatch["chord"])); 
            }); 
            //console.log("chord found: " + chordMatch);
            //let notesArray = []; 
            //console.log("notes: " + fretsToNotes(chordArray)); 
            //console.log("chord : " + root+ " " + name); 
            //console.log("chord " + midiToNote(root) + " " + name); 
            
          } else {
            console.log("chord not found"); 
          }
      });    
      
      
      
}

//search(['x',5,7,7,7,'x']);  