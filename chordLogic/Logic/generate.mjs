import { chords } from "./scripts/subchords.mjs";
import { specialAlteredChords } from "./scripts/specialChords/specialChords.mjs";
import * as fs from 'fs';
import { arrayOfChordArraysToFrets } from "./scripts/guitarLogic.mjs";



//1) generate major keys (including extended and subchords)
//3) generate special/altered chords
//4) write each to appropriate file in jsonIntermediate 


//1)
function writeJson(){
    fs.writeFile('jsonIntermediate/allMajorKeys.json', JSON.stringify(chords), (error) => {
        if (error) throw error;
    });
    
    //3) 
    fs.writeFile('jsonIntermediate/specialAndAlteredChords.json', JSON.stringify(specialAlteredChords), (error) => {
        if (error) throw error;
    });
}

function convertSubChordsToFrets(){
    //console.log(chords); 
    chords.forEach( majorKeyObj => {
        let subChordsObj = majorKeyObj["subChords"]; 
        for(const scaleDegree in subChordsObj){
            let arrayOfChordObjects = subChordsObj[scaleDegree]; 
            arrayOfChordObjects.forEach( chordObj => {
                let chords = chordObj["chords"]; 
                for(const startString in chords){
                    let startStringObj = chords[startString]; 
                    for(const voicingString in startStringObj ){
                        let arrayOfChordArrays = startStringObj[voicingString]; 
                        startStringObj[voicingString] = arrayOfChordArraysToFrets(arrayOfChordArrays);
                        //console.log(startStringObj[voicingString]);  
                    }
                }
            }); 
        }
    }); 
}

function generateAndWrite(){
    convertSubChordsToFrets(); 
    writeJson(); 
}

generateAndWrite(); 