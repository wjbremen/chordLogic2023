import * as fs from 'fs';

import majorKeys from './jsonIntermediate/allMajorKeys.json' assert { type: 'json' };
import specialKeys from './jsonIntermediate/specialKeys.json' assert { type: 'json' };
import specialAlteredChords from './jsonIntermediate/specialAndAlteredChords.json' assert { type: 'json' };

let chordPlayablityInfo = {
    unplayableChords : [],
    playableChords: [],  
    unplayableChordsCount : 0,
    playableChordsCount: 0,
    duplicatesRemoved: {
        majorKeys: 0, 
        specialKeys: 0, 
        specialAlteredChords: 0
    }
};

//1)get all major key chords from file
//2) get all special keys from file
//3) get special/altered chords by root from file 

//4)remove duplicates from each and update chordPlayablity
//5) remove unplayable from all and update chordPlayability 

//6) write each file to jsonOutput 

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

//construct a new "startingStringObject" that doesnt include duplicates 
//for the content of each key
//example input for "3" : 
/*
    {
      '3sRoot': [Array],
      '3sRootInv1': [Array],
      '3sRootInv2': [Array],
      '3sRootInv3': [Array],
      '3-1': [Array],
      '3-1inv1': [Array],
      '3-1inv2': [Array],
      '3-1inv3': [Array]
    },

    where startingStringObj["3sRoot"] is array of chord arrays: 
    [
        [49,49,53,61,61,63],
        [49,49,53,61,61,61],
        [.....],
        ....... 
    ]

    remove duplicates from startingStringObj["3sRoot"]
    and every other key in object 
*/
function removeDupStartStringObj(startStringObj){
    let returnObj = {}; 
    for(const key in startStringObj){
        //console.log(key); 
        let arrayOfChordArrays = startStringObj[key]; 
        let returnArrayOfChordArrays = []; 
        
        //if the chord in arrayOfChordArrays doesnt
        //exist in returnArrayOfChordArrays, add it
        //to returnArrayOfChordArrays
        
        arrayOfChordArrays.forEach( chordArray => {
            let isUnique = true; 
            if(returnArrayOfChordArrays.length === 0){
                isUnique = true; 
            } else {
                returnArrayOfChordArrays.forEach( returnChord => {
                    if( 
                        returnChord[0] == chordArray[0] 
                        && returnChord[1] == chordArray[1] 
                        && returnChord[2] == chordArray[2]
                        && returnChord[3] == chordArray[3]
                        && returnChord[4] == chordArray[4]
                        && returnChord[5] == chordArray[5]
                    ){
                        isUnique = false; 
                    }
                }); 
            }
            if(isUnique){
                returnArrayOfChordArrays.push( chordArray); 
            } else {
                chordPlayablityInfo["duplicatesRemoved"]["majorKeys"] = chordPlayablityInfo["duplicatesRemoved"]["majorKeys"] + 1; 
            }
        });
        returnObj[key] = returnArrayOfChordArrays;  
    } 
    return returnObj; 
}
 
//console.log(removeDupStartStringObj(input)); 

//remove duplicate chords for major keys at the following level: 
// eg '3sRootInv1': [Array] -> remove duplicates in array, replace
//with array without duplicates
function removeDupMajorKeys(arrayOfMajorKeyObjects){
    arrayOfMajorKeyObjects.forEach( majorKeyObj => {
        for (const key in majorKeyObj){
            if(key != "keyRoot"){
                for(const scaleDegree in majorKeyObj[key]){
                    majorKeyObj[key][scaleDegree].forEach(chordObj => {
                        for(const startString in chordObj["chords"]){
                            if(startString != "notes"){
                                chordObj["chords"][startString] = removeDupStartStringObj(chordObj["chords"][startString]); 
                                //console.log(chordObj["chords"][startString]); 
                            } 
                        }
                    }); 
                }
            }
        }
    }); 
}

function removeDupSpecialKeys(){

}

function removeDupSpecialChords(){

}

function majorRemoveUnplayable(){

}

function specialKeysRemoveUnplayable(){

}

function specialChordsRemoveUnplayable(){

}

function removeDuplicateChords(){
    removeDupMajorKeys(majorKeys);
    //removeDupSpecialKeys();
    //removeDupSpecialChords(); 
} 

function removeUnplayableChords(){
    //majorRemoveUnplayable
    //specialKeysRemoveUnplayable()
    //specialChordsRemoveUnplayable()
}

function writeToJson(){
    //write to major keys
    //write to special keys
    //write to special/altered chords 
    //write to chord playability 
}

function curate(){
    removeDuplicateChords(); 
    //removeUnplayableChords(); 
    //writeToJson(); 
}


curate(); 