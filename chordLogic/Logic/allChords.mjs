import { allChords} from "./extendedChords.mjs";
import { arrayOfChordArraysToFrets } from "./guitarLogic.mjs";
import {midiToFrets, removeUnplayableChords,chordPlayablityInfo} from "./guitarChords.mjs";  
import * as fs from 'fs';



/////////////////////////////////////
// --> allChords() => results in
// [{keyObject},{keyObject}, ..]
// --> where key object is :
/*
    {
        keyRoot: 48, 
        chords: {
            scaleDegree1: 
            ...
            scaleDegree7
        },
        extendedChords: {
            scaleDegree1: 
            ...
            scaleDegree7
        }
    }
/*
// --> chords["scaleDegree1"] : 
/*
    [

    ]
*/


//input: allChords array 
// [
// {keyRoot: 48, chords: {}, extendedChords: {}},
//  .....
//  // {keyRoot: 59, chords: {}, extendedChords: {}},
// ]
// input to imported function midiToFrets: 
//input: chord object {notes: [], 6s: {}, 5s: {}, ...}
function toFrets(allChords){
    allChords.forEach( musicalKey => {
        let chordsObj = musicalKey["chords"]; 
        let extendedChordsObj = musicalKey["extendedChords"]; 

        for(let degree = 1; degree <= 7; degree++){
            let chordsArray = chordsObj["scaleDegree" + degree];
            chordsArray.forEach(chordObj=> {
                midiToFrets(chordObj["chords"]); 
            });  
           
        }

        for(let degree = 1; degree <= 7; degree++){
            let chordsArray = extendedChordsObj["scaleDegree" + degree]; 
            chordsArray.forEach(chordObj=> {
                midiToFrets(chordObj["chords"]); 
            }); 
        }
    }); 
}

//input: allChords array 
// [
// {keyRoot: 48, chords: {}, extendedChords: {}},
//  .....
//  // {keyRoot: 59, chords: {}, extendedChords: {}},
// ]
//input to imported function removeUnplayableChords: 
//remove unplayable chords
//input: chord object 
//{notes: [], 6s: {'chordtypeString': [chord], [chord],..}
// , 5s: {}, ...}
// input chords should contain fret numbers, 
// 'x' for mute, or 'o' for open note
// unplayableChords below will save the chords that are 
// eliminated for testing
function removeUnplayeable(allChords){
    allChords.forEach( musicalKey => {
        let chordsObj = musicalKey["chords"]; 
        let extendedChordsObj = musicalKey["extendedChords"]; 

        for(let degree = 1; degree <= 7; degree++){
            let chordsArray = chordsObj["scaleDegree" + degree];
            chordsArray.forEach(chordObj=> {
                removeUnplayableChords(chordObj["chords"],chordObj["chordRoot"], chordObj["name"]); 
            });  
           
        }

        for(let degree = 1; degree <= 7; degree++){
            let chordsArray = extendedChordsObj["scaleDegree" + degree]; 
            chordsArray.forEach(chordObj=> {
                removeUnplayableChords(chordObj["chords"], chordObj["chordRoot"], chordObj["name"]); 
            }); 
        }
    }); 
}


//all chords => midiToFrets => removeUnplayeable 
// => fretsToNotes 

//console.log(JSON.stringify(chords[0]["extendedChords"]["scaleDegree1"][2]["chords"],null,2)); 
//console.log("unplayable chords: ");
//console.log(chordPlayablityInfo.unplayableChordsCount); 
//console.log("playable chords: ");
//console.log(chordPlayablityInfo.playableChordsCount);

//console.log(chordPlayablityInfo.playableChords); 

function getAllChords(){
    let chords = allChords();
    toFrets(chords);
    removeUnplayeable(chords);
    return chords; 
}

export let allMajorKeys = getAllChords(); 
 
fs.writeFile('file.json', JSON.stringify(chordPlayablityInfo["playableChords"]), (error) => {
    if (error) throw error;
  });

//input ["x", 5,5,5,"o", 4]
//a chord array with numbers, 
//"x" or "o" and will return true or 
//false 


export let chordPlayablity = chordPlayablityInfo;  