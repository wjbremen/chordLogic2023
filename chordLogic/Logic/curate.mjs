import * as fs from 'fs';

import majorKeys from './jsonIntermediate/allMajorKeys.json' assert { type: 'json' };
import specialAlteredChords from './jsonIntermediate/specialAndAlteredChords.json' assert { type: 'json' };

let chordPlayabilityInfo = {
    unplayableChordsFlat : [],
    playableChordsFlat: [],  
    unplayableChordsCount : {
        chords: 0, 
        extendedChords: 0, 
        subChords: 0, 
        specialChords: 0
    },
    playableChordsCount: {
        chords: 0, 
        extendedChords: 0, 
        subChords: 0,
        specialChords: 0, 
    }, 
    playabilityInfo: {
        chords: {}, 
        extendedChords: {}, 
        subChords: {}, 
        specialChords: {}
    }
};

//1)get all major key chords from file
//2) get special/altered chords by root from file 

//3) remove unplayable from all and update chordPlayability 
//4) write each file to jsonOutput 

/*
fs.writeFile('../JSON/playableChords.json', JSON.stringify(chordPlayablityInfo["playableChords"]), (error) => {
    if (error) throw error;
  });
*/ 

//input: chord array consisting of fret numbers, 
//'x', and 'o'
// returns true or false
export function isPlayableChord(chordArray){
    //-Determine if barre possible 1)no open notes 
    //2) same fret on multiple strings and is lowest note
    //-if no barre, each fret will require 1 finger 
    //-if barre, barre notes require 1 finger and 
    //rest of notes played will require 1 finger each
    //-fingers required <=4 
    //-if barre chord, frets should be within 4

    let playable = false; 
    let barPossible = false;
    let fretsPlayed = 0; 
    let instancesOfMinFret = 0;

    chordArray.forEach(note => {
        if(typeof note === "number"){
            fretsPlayed++; 
        }
    }); 
    
    //determine if barre possible 
    if(chordArray.includes("o")){
        barPossible = false; 
    } else {
        //only frets and 'x'
        //find lowest fret and make sure it has 
        //more than one instance 
        let minFret = 100; 
        chordArray.forEach(note => {
            if(typeof note === 'number' && note < minFret){
                minFret = note; 
            }
        });
         
        chordArray.forEach(note => {
            if(typeof note === "number" && note === minFret){
                instancesOfMinFret++; 
            }
        }); 

        if(instancesOfMinFret >= 2){
            barPossible = true;
        } else {
            barPossible = false; 
        }
    }

    //now we have fretsPlayed, barPossible, and instancesOfMinFret
    //determine playable (true or false) and return 
    if(fretsPlayed <= 4){
        playable = true; 
    } else {
        //5 or 6 frets played 
        if(!barPossible){
            playable = false; 
        } else {
            //5 or 6 frets played, barre possible 
            if(fretsPlayed - instancesOfMinFret < 4){
                playable = true; 
            } else {
                playable = false; 
            }
        }
    }
    return playable; 
}

//input: array of chord arrays [[chord],[chord],[chord],...]
//where each chord array consists of fret numbers, "x", and "o"
//returns an array of chord arrays with the unplayable chords
//removed. 
//Also updates the data in chordPlayabilityInfo
function playableArrayOfArrays(arrayOfChordArrays, chordsInfo){
    //console.log(chordsInfo); 

    let obj = chordPlayabilityInfo["playabilityInfo"][chordsInfo["mainKey"]]; 
    let keys = Object.keys(obj); 
    if(!(keys.includes("keyRoot" + chordsInfo["keyRoot"]))){
        obj["keyRoot" + chordsInfo["keyRoot"]] = []; 
    }

    let chordPlayabilityObject = {
        chordRoot: chordsInfo["chordRoot"], 
        name: chordsInfo["name"], 
        scaleDegree: chordsInfo["scaleDegree"], 
        voicingString: chordsInfo["voicingString"], 
        playable: [], 
        unplayable: []
    }; 

    let returnArray= [];
     
    arrayOfChordArrays.forEach( chordArray => {
        let isPlayable = isPlayableChord(chordArray); 
        let flatObj = 
        {...chordsInfo, frets: chordArray, playable: isPlayable};

        if(isPlayable){
            returnArray.push(chordArray);
            chordPlayabilityInfo["playableChordsFlat"].push(flatObj);  
            chordPlayabilityInfo["playableChordsCount"][chordsInfo["mainKey"]]++;
            chordPlayabilityObject["playable"].push(
                {
                    name: chordsInfo["name"], 
                    chordRoot : chordsInfo["chordRoot"], 
                    notes: chordsInfo["notes"]
                }
            ); 
        
        } else 
        {
            chordPlayabilityInfo["unplayableChordsFlat"].push(flatObj);  
            chordPlayabilityInfo["unplayableChordsCount"][chordsInfo["mainKey"]]++;
            chordPlayabilityObject["unplayable"].push(
                {
                    name: chordsInfo["name"], 
                    chordRoot : chordsInfo["chordRoot"], 
                    notes: chordsInfo["notes"]
                }
            );
        } 
    });     
    
    let keyRoot = "keyRoot" + chordsInfo["keyRoot"]; 
    let mainKey = chordsInfo["mainKey"]; 
    //console.log(typeof keyRoot); 
    
    chordPlayabilityInfo["playabilityInfo"][mainKey][keyRoot].push(
        chordPlayabilityObject
    ); 

    return returnArray; 

}

function majorRemoveUnplayable(){
    majorKeys.forEach( majorKeyObj => {

        
        //chords 
        let chords =  majorKeyObj["chords"]; 
        for(const scaleDegree in chords){
            let arrayOfChordTypeObjects = chords[scaleDegree]; 
            arrayOfChordTypeObjects.forEach( chordTypeObject => {
                let chordsObj = chordTypeObject["chords"]; 
                for(const startString in chordsObj){
                    if(!(startString == "notes")){
                        let startStringObj = chordsObj[startString]; 
                        for(const voicingString in startStringObj){
                            let arrayOfChordArrays = startStringObj[voicingString]; 
                            startStringObj[voicingString] = playableArrayOfArrays
                            (
                                arrayOfChordArrays, 
                                {
                                    mainKey: "chords", 
                                    name: chordTypeObject["name"], 
                                    notes: chordTypeObject["notes"], 
                                    chordRoot: chordTypeObject["chordRoot"], 
                                    voicingString: voicingString,
                                    keyRoot: majorKeyObj["keyRoot"], 
                                    scaleDegree: scaleDegree
                                }
                            ); 
                        }
                    } 
                }
            }); 
        }
        

        
        //extendedChords
        let extendedChords =  majorKeyObj["extendedChords"]; 
        for(const scaleDegree in extendedChords){
            let arrayOfChordTypeObjects = extendedChords[scaleDegree]; 
            arrayOfChordTypeObjects.forEach( chordTypeObject => {
                let chordsObj = chordTypeObject["chords"]; 
                for(const startString in chordsObj){
                    if(!(startString == "notes")){
                        let startStringObj = chordsObj[startString]; 
                        for(const voicingString in startStringObj){
                            let arrayOfChordArrays = startStringObj[voicingString]; 
                            startStringObj[voicingString] = playableArrayOfArrays
                            (
                                arrayOfChordArrays, 
                                {
                                    mainKey: "extendedChords", 
                                    name: chordTypeObject["name"], 
                                    notes: chordTypeObject["notes"], 
                                    chordRoot: chordTypeObject["chordRoot"], 
                                    voicingString: voicingString,
                                    keyRoot: majorKeyObj["keyRoot"], 
                                    scaleDegree: scaleDegree
                                }
                            ); 
                        }
                    } 
                }
            }); 
        }
        
        


        
        //subchords 
        //console.log(majorKeyObj["subChords"]["scaleDegree1"][0]["chords"]["5"]); 
        let subchords = majorKeyObj["subChords"]; 
        for (const scaleDegree in subchords){
            let arrayOfChordTypeObjects = subchords[scaleDegree]; 
            arrayOfChordTypeObjects.forEach( chordTypeObj => {
                let chordsObj = chordTypeObj["chords"]; 
                for(const startString in chordsObj){
                    let chords = chordsObj[startString]; 
                    for (const voicingString in chords){
                        let arrayOfChordArrays = chords[voicingString]; 
                        chords[voicingString] = playableArrayOfArrays(
                            arrayOfChordArrays, 
                            {
                                mainKey: "subChords", 
                                name: chordTypeObj["name"], 
                                notes: chordTypeObj["notes"], 
                                chordRoot: chordTypeObj["chordRoot"],
                                voicingString: voicingString,
                                keyRoot: majorKeyObj["keyRoot"], 
                                scaleDegree: scaleDegree
                            }
                        );  
                    }
                }
            }); 
        }

        

        
    }); 
}


//input: array of chord arrays [[chord],[chord],[chord],...]
//where each chord array consists of fret numbers, "x", and "o"
//returns an array of chord arrays with the unplayable chords
//removed. 
//Also updates the data in chordPlayabilityInfo
function specialPlayableArrayOfArrays(arrayOfChordArrays, chordsInfo){
    //console.log(arrayOfChordArrays); 
    let obj = chordPlayabilityInfo["playabilityInfo"][chordsInfo["mainKey"]]; 
    let keys = Object.keys(obj); 
    if(!(keys.includes("chordRoot" + chordsInfo["chordRoot"]))){
        obj["chordRoot" + chordsInfo["chordRoot"]] = []; 
    }

    let chordPlayabilityObject = {
        ...chordsInfo, 
        playable: [], 
        unplayable: []
    }

    let returnArray = []; 

    arrayOfChordArrays.forEach( chordArray => {
        let isPlayable = isPlayableChord(chordArray); 
        let flatObj = 
        {...chordsInfo, frets: chordArray, playable: isPlayable};

        if(isPlayable){
            returnArray.push(chordArray);
            chordPlayabilityInfo["playableChordsFlat"].push(flatObj);  
            chordPlayabilityInfo["playableChordsCount"][chordsInfo["mainKey"]]++;
            chordPlayabilityObject["playable"].push(
                {
                    name: chordsInfo["name"], 
                    chordRoot : chordsInfo["chordRoot"], 
                    notes: chordsInfo["notes"],
                    integerVoicing: chordsInfo["integerVoicing"]
                }
            ); 
        
        } else 
        {
            chordPlayabilityInfo["unplayableChordsFlat"].push(flatObj);  
            chordPlayabilityInfo["unplayableChordsCount"][chordsInfo["mainKey"]]++;
            chordPlayabilityObject["unplayable"].push(
                {
                    name: chordsInfo["name"], 
                    chordRoot : chordsInfo["chordRoot"], 
                    notes: chordsInfo["notes"], 
                    integerVoicing: chordsInfo["integerVoicing"]
                }
            );
        }


    }); 

    let chordRoot = "chordRoot" + chordsInfo["chordRoot"]; 
    let mainKey = chordsInfo["mainKey"]; 
    //console.log(typeof keyRoot); 
    
    chordPlayabilityInfo["playabilityInfo"][mainKey][chordRoot].push(
        chordPlayabilityObject
    ); 
    
    return returnArray; 
}

function specialChordsRemoveUnplayable(){
    for(const chordRoot in specialAlteredChords){
        let chordTypeObjects = specialAlteredChords[chordRoot]; 
        chordTypeObjects.forEach( chordTypeObj => {
            let chordVoicingObjects = chordTypeObj["chords"]; 
            chordVoicingObjects.forEach( voicingObj => {
                let startStringObject = voicingObj["chords"]; 
                //console.log(startStringObject); 
                for(const startString in startStringObject) {
                    //console.log(startString); 
                    if(!(startString == "notes")){
                        let voicingStrings = startStringObject[startString]; 
                        for(const voicingString in voicingStrings){
                            //console.log(voicingString); 
                            voicingStrings[voicingString] = specialPlayableArrayOfArrays(
                                voicingStrings[voicingString], 
                                {
                                    mainKey: "specialChords", 
                                    name: chordTypeObj["name"], 
                                    notes: voicingObj["notes"], 
                                    chordRoot: chordRoot, 
                                    voicingString: voicingString,
                                    IntegerVoicing: voicingObj["integerVoicing"]
                                }
                            ); 
                        }
                    }    
                }
            }); 
        }); 
    }
}

function removeUnplayableChords(){
    majorRemoveUnplayable();
    specialChordsRemoveUnplayable()
}

function writeToJson(){
    console.log("wriitng"); 
    //write to major keys
    fs.writeFile('../jsonOutput/allMajorKeys.json', JSON.stringify(majorKeys), (error) => {
        if (error) throw error;
    });

    //write to special/altered chords 
    fs.writeFile('../jsonOutput/specialAlteredChords.json', JSON.stringify(specialAlteredChords), (error) => {
        if (error) throw error;
    });
    
    //write to chord counts
    let counts = { unplayableChords: chordPlayabilityInfo["unplayableChordsCount"],playableChords: chordPlayabilityInfo["playableChordsCount"]};
    fs.writeFile('../jsonOutput/chordPlayability/chordCounts.json', JSON.stringify(counts), (error) => {
        if (error) throw error;
    });

    //write to infoChords
    fs.writeFile('../jsonOutput/chordPlayability/infoChords.json', JSON.stringify(chordPlayabilityInfo["playabilityInfo"]["chords"]), (error) => {
        if (error) throw error;
    });

    //write to infoextended 
    fs.writeFile('../jsonOutput/chordPlayability/infoExtended.json', JSON.stringify(chordPlayabilityInfo["playabilityInfo"]["extendedChords"]), (error) => {
        if (error) throw error;
    });

    //info special chords
    fs.writeFile('../jsonOutput/chordPlayability/infoSpecialChords.json', JSON.stringify(chordPlayabilityInfo["playabilityInfo"]["specialChords"]), (error) => {
        if (error) throw error;
    });

    //info subchords
    fs.writeFile('../jsonOutput/chordPlayability/infoSubchords.json', JSON.stringify(chordPlayabilityInfo["playabilityInfo"]["subChords"]), (error) => {
        if (error) throw error;
    });

    //playablechords flat
    fs.writeFile('../jsonOutput/chordPlayability/playableChordsFlat.json', JSON.stringify(chordPlayabilityInfo["playableChordsFlat"]), (error) => {
        if (error) throw error;
    });

    //unplayable chords flat
    fs.writeFile('../jsonOutput/chordPlayability/unplayableChordsFlat.json', JSON.stringify(chordPlayabilityInfo["unplayableChordsFlat"]), (error) => {
        if (error) throw error;
    });

    //
     
}

function curate(){
    removeUnplayableChords(); 
    writeToJson(); 
}


curate(); 
