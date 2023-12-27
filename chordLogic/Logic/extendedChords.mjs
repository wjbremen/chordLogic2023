import { allMajorKeys } from "./majorKeys.mjs";
//import {arrayOfChordArraysToFrets} from "./guitarLogic.mjs"; 
import { notesForAllMajorKeys } from "./majorKeys.mjs";

//////////////////////////////////
/// FORMAT OF DATA RETURNED BY ///
/// CALLING allMajorKeys() ///////
/*
-Array of major key Objects 
[
    {majorKeyObj},{majorKeyObj},{majorKeyObj},...
]

-Each major key Object, key root is a midi note 
between 48 (C) and 59 (B)
{
    keyRoot: midiNote, 
    chords: {
            chordsObj
            } 
}

- chords key
chords: {
    scaleDegree1: [
        {chordObj}, {chordObj},...
    ],
    scaleDegree2: [
        {chordObj}, {chordObj},...
    ],
    ....
    scaleDegree7: [
        {chordObj}, {chordObj},...
    ]
}

- scale degree
scaleDegree1: [
    {
        chordRoot: 48,
        name: "M",
        htmlName: null,
        notes: [48,52,55],
        chords: {
            .....
        }
    },
    {
        chordRoot: 48,
        name: "M7",
        htmlName: null,
        notes: [48,52,55,59],
        chords: {
            .....
        }
    },
    ......
    {
        chordRoot: 48,
        name: "sus4",
        htmlName: null,
        notes: [48,53,55],
        chords: {
            .....
        }
    }
]

-chords key 
chords: {
    notes: [48,52,55],
    "6": {},
    "5": {},
    "4": {},
    "3": {}
}

-at start string 5
"5": {
    "5sRoot": [ [chord],[chord],[chord],....],
    "5sRootInv1": [ [chord],[chord],[chord],....],
    ......
    "5-2": [ [chord],[chord],[chord],....],
    "5-2inv1": [ [chord],[chord],[chord],....],
    "5-2inv2": [ [chord],[chord],[chord],....],
    ........
    "5-3inv2": [ [chord],[chord],[chord],....]
}

-chord type 
"5-2inv2": [
  [ 'x', 52, 55, 60, 64, 'x' ],
  [ 'x', 52, 55, 60, 67, 'x' ],
  [ 'x', 52, 60, 64, 67, 'x' ],
  [ 'x', 52, 60, 55, 67, 'x' ]
]
*/

///////////////////////////////////////
///// This module will add a new object 
/// for extended chords. this will include
/// voicings for 9th, 11th, 13th, and 
/// 7th chords where the fifth can be ommitted.
/// voicings for extended chords will drop 
/// certain notes: ie 1,5,9 etc
/////////////////////////////////////////
/*
    -chords key 
chords: {
    notes: [48,52,55],
    "6": {},
    "5": {},
    "4": {},
    "3": {},
    "extended": {}
}
*/
/////////////////////////////////////////
////////////////////////////////////////

const chordsExtended = {
    //7th chords wont include full voicings, 
    //ie 1,3,5,7- these are already included 
    //in allMajorKeys
    1: [
        {notes: [1,3,5,7],name: "M7", htmlName: null,
        voicings: [[1,3,7],[3,7]]},
        {notes: [1,3,5,7,9],name: "M9", htmlName: null
        ,voicings: [[1,3,7,9],[3,7,9]]},
        {notes: [1,3,5,7,9,11],name: "M11", htmlName: null
        ,voicings: [[1,3,7,11],[3,7,11]]},
        {notes: [1,3,5,7,9,11,13],name: "M13", htmlName: null
        ,voicings: [[1,3,7,13],[3,7,13]]},
        
    ],
    2: [
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null
        ,voicings: [[1,"b3","b7"],["b3","b7"]]},
        {notes: [1,"b3",5,"b7",9],name: "m9", htmlName: null
        ,voicings: [[1,"b3","b7",9],["b3","b7",9]]},
        {notes: [1,"b3",5,"b7",9,11],name: "m11", htmlName: null
        ,voicings: [[1,"b3","b7",11],["b3","b7",11]]},
        {notes: [1,"b3",5,"b7",9,11,13],name: "m13", htmlName: null
        ,voicings: [[1,"b3","b7",13],["b3","b7",13]]},
    ],
    3: [
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null
        ,voicings: [[1,"b3","b7"],["b3","b7"]]},
        {notes: [1,"b3",5,"b7","b9"],name: "m7b9", htmlName: null
        ,voicings: [[1,"b3","b7","b9"],["b3","b7","b9"]]},
        {notes: [1,"b3",5,"b7","b9",11],name: "m11b9", htmlName: null
        ,voicings: [[1,"b3","b7",11],["b3","b7",11]]},
        {notes: [1,"b3",5,"b7","b9",11,"b13"],name: "m11b9b13", htmlName: null
        ,voicings: [[1,"b3","b7","b13"],["b3","b7","b13"]]},
    ],
    4: [
        {notes: [1,3,5,7],name: "M7", htmlName: null
        ,voicings: [[1,3,7],[3,7]]},
        {notes: [1,3,5,7,9],name: "M9", htmlName: null,
        voicings: [[1,3,7,9],[3,7,9]]},
        {notes: [1,3,5,7,9,"#11"],name: "M9#11", htmlName: null
        ,voicings: [[1,3,7,"#11"],[3,7,"#11"]]},
        {notes: [1,3,5,7,9,"#11",13],name: "M13#11", htmlName: null
        ,voicings: [[1,3,7,13],[3,7,13]]},
    ],
    5: [
        {notes: [1,3,5,"b7"],name: "7", htmlName: null
        ,voicings: [[1,3,"b7"],[3,"b7"]]},
        {notes: [1,3,5,"b7",9],name: "9", htmlName: null
        ,voicings: [[1,3,"b7",9],[3,"b7",9]]},
        {notes: [1,3,5,"b7",9,11],name: "11", htmlName: null
        ,voicings: [[1,3,"b7",11],[3,"b7",11]]},
        {notes: [1,3,5,"b7",9,11,13],name: "13", htmlName: null
        ,voicings: [[1,3,"b7",13],[3,"b7",13]]},
    ],
    6: [
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null
        ,voicings: [[1,"b3","b7"],["b3","b7"]]},
        {notes: [1,"b3",5,"b7",9],name: "m9", htmlName: null
        ,voicings: [[1,"b3","b7",9],["b3","b7",9]]},
        {notes: [1,"b3",5,"b7",9,11],name: "m11", htmlName: null
        ,voicings: [[1,"b3","b7",11],["b3","b7",11]]},
        {notes: [1,"b3",5,"b7",9,11,"b13"],name: "m11b13", htmlName: null
        ,voicings: [[1,"b3","b7","b13"],["b3","b7","b13"]]},
    ],
    7: [
        {notes: [1,"b3","b5","b7"],name: "halfdim", htmlName: null
        ,voicings: [[1,"b3","b5","b7"],["b3","b5","b7"]]},
        {notes: [1,"b3","b5","b7","b9"],name: "halfdimb9", htmlName: null
        ,voicings: [[1,"b3","b5","b7","b9"],["b3","b5","b7","b9"]]},
        {notes: [1,"b3","b5","b7","b9",11],name: "halfdim11", htmlName: null
        ,voicings: [[1,"b3","b5","b7",11],["b3","b5","b7",11]]},
        {notes: [1,"b3","b5","b7","b9",11,"b13"],name: "halfdim11b13", htmlName: null
        ,voicings: [[1,"b3","b5","b7","b13"],["b3","b5","b7","b13"]]},
    ]
    
};

/*
let allMajorKeyObjects = allMajorKeys();
let CmajorKey = allMajorKeyObjects[0];
let scaleDegree1 = CmajorKey["chords"]["scaleDegree1"];
let someChordObj = scaleDegree1[1]["chords"];  
let someChordType = someChordObj["5"]["5-1"];
//console.log(someChordType);
//console.log(arrayOfChordArraysToFrets(someChordType)); 

*/

//////////////////////////////////////////////
//// THIS MODULE WILL PRODUCE THE FOLLOWING: 
//////////////////////////////////////////////
/*

{
    keyRoot: midiNote, 
    chords: {
            chordsObj
            },
    extendedChords: {    <====Adding this 
            chordsObj
            } 
}, 
--where extended chords =

extendedChords: {
    scaleDegree1: [
        {chordObj}, {chordObj},...
    ],
    scaleDegree2: [
        {chordObj}, {chordObj},...
    ],
    ....
    scaleDegree7: [
        {chordObj}, {chordObj},...
    ]
}

--scale degree 1: 
--notice that the same chord (ie M7) will
have more than one object because one has 
dropped just the fifth (so notes will be 
1,3,7) and one has dropped the 1st and 5th
(so notes will be 3,7)
**compare the particular "voicing" with the
"notes" from chordsExtended-
"voicing" = [1,3,7] and "notes" = [1,3,5,7],
so notesDropped.push(5)

scaleDegree1: [
    {
        chordRoot: 48,
        name: "M7",
        notesDropped: [5],  <====== (**)
        htmlName: null,
        notes: [48,52,55],
        chords: {
            .....
        }
    },
    {
        chordRoot: 48,
        name: "M7",
        notesDropped: [1,5]
        htmlName: null,
        notes: [48,52,55,59],
        chords: {
            .....
        }
    },
    ......
    {
        chordRoot: 48,
        name: "M13",
        notesDropped: [5,9,11]
        htmlName: null,
        notes: [48,53,55],
        chords: {
            .....
        }
    },
     {
        chordRoot: 48,
        name: "M13",
        notesDropped: [1,5,9,11]
        htmlName: null,
        notes: [48,53,55],
        chords: {
            .....
        }
    }
]

-- where "chords" is: 

chords: {
    notes: [48,52,55],
    "6": {},
    "5": {},
    "4": {},
    "3": {}
}

-- and one of the keys (which is the starting string) is : 

"5": {
    "5sRoot": [ [chord],[chord],[chord],....],
    "5sRootInv1": [ [chord],[chord],[chord],....],
    ......
    "5-2": [ [chord],[chord],[chord],....],
    "5-2inv1": [ [chord],[chord],[chord],....],
    "5-2inv2": [ [chord],[chord],[chord],....],
    ........
    "5-3inv2": [ [chord],[chord],[chord],....]
}

-- and a particular chord type is : 

"5-2inv2": [
  [ 'x', 52, 55, 60, 64, 'x' ],
  [ 'x', 52, 55, 60, 67, 'x' ],
  [ 'x', 52, 60, 64, 67, 'x' ],
  [ 'x', 52, 60, 55, 67, 'x' ]
]
*/


//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
 
const minMidiNote = 40; 
const maxMidiNote = 76; 

//******************************************* */
//////////////////////////////////////////////
//////////helper functions for chord ////////////
////////////finding algorithms below /////////
//////////////////////////////////////////////
/////////////////////////////////////////////
//******************************************* */

////////////////////////////////////////
//Generate object with fretboard notes 
//midi notes 40-76
//
function getFretboardNotesObject(){
   //let openNotes = [40,45,50,55,59,64];
   function get13Notes(startMidiNote) {
        let thirteenNotes = [];
        for(let i = 0; i <=12; i++){
            //console.log("inside for loop in get 13 notes"); 
            thirteenNotes.push(startMidiNote + i); 
        }
        return thirteenNotes; 
        //return "test"; 
   } 
   /*
   let out = get13Notes(40); 
   console.log("get13Notes: " + out); 
   */

   let sixth= get13Notes(40);
    let fifth= get13Notes(45);
    let fourth= get13Notes(50);
    let third= get13Notes(55);
    let second= get13Notes(59);
    let first= get13Notes(64);

   let fretBoardNotesObject = {
    sixth: sixth,
    fifth: fifth,
    fourth: fourth,
    third: third,
    second: second,
    first: first
   };

   return fretBoardNotesObject;
   //return {first: 1, second: 2}; 
}
///////////////////////////////////////
//within 5 frets 
//input [7,9,"o"], 8 or [7,12,8,'x',8,'o'], 12
//input the current notes array and the note 
//to be potentially added 
//////////////////////////////////////////
function within5Frets(notesArray, noteToBeAdded){
    let trueOrFalse = true; 
    notesArray.forEach(note => {
        if(Number.isInteger(note)){
            if(Math.abs(note - noteToBeAdded) > 4){
                trueOrFalse = false; 
            }
        } 
    }); 
    return trueOrFalse; 
}

/*
const notesArr = ["o","o","x"]; 
const noteToAdd = 9; 
console.log(notesArr + "is within 5 frets of " + noteToAdd + " "); 
console.log(within5Frets(notesArr, noteToAdd)); 
*/

///////////////////////////////////////
//input: midi note, eg 55
//output: return an array with midi notes 
//that are the same (eg every other "C" note)
//in the range between minMidiNote and maxMidiNote
///////////////////////////////////////////////
function getEquivalentMidiNotes(note){
    let returnArray = []; 
    //note is in range
    if(note <= maxMidiNote && note >= minMidiNote){
        //console.log("original midi note in range"); 
        returnArray.push(note); 
    } else {
        //console.log("original note not within range"); 
        //note not in range
        if(note < minMidiNote){
            //add 12 until in range and push
            //set note equal to this note that is in range
            do{
                note = note + 12; 
                if(note >= minMidiNote){
                    //console.log("pushing"); 
                    returnArray.push(note); 
                }
            } while (note < minMidiNote); 

        } else {
            //sub 12 until note in range and push
            //set note equal to this note that is in range
            do{
                note = note - 12; 
                if(note <= maxMidiNote){
                    returnArray.push(note); 
                    //console.log("pushing"); 
                }
            } while (note > maxMidiNote);
        }
    }

    //now we have an array with one note that is in range
    // [55]
    
    //add 12 and push until out of range
    let currentNoteAdd = returnArray[0]; 
    do {
        currentNoteAdd = currentNoteAdd + 12; 
        if(currentNoteAdd <= maxMidiNote){
            returnArray.push(currentNoteAdd);
            //console.log("pushing");  
        }
    } while (currentNoteAdd <= maxMidiNote); 

    //subtract 12 and push until out of range
    let currentNoteSub = returnArray[0]; 
    do {
        currentNoteSub = currentNoteSub - 12; 
        if(currentNoteSub >= minMidiNote){
            returnArray.push(currentNoteSub);
            //console.log("pushing"); 
        }

    } while (currentNoteSub >= minMidiNote);

    return returnArray; 

}

//input: midi note 48 on string 5
//output: fret 3
function midiNoteToFret(midiNote, string){
    let fretBoardNotes = getFretboardNotesObject();
    let fret = null; 
    let stringKey = ""; 
    switch(string){
        case 6: 
            stringKey = "sixth";
            break; 
        case 5: 
        stringKey = "fifth";
        break; 
        case 4: 
        stringKey = "fourth";
        break; 
        case 3: 
        stringKey = "third";
        break; 
        case 2: 
        stringKey = "second";
        break;
        case 1: 
        stringKey = "first";
        break;  
        default: 
            stringKey = ""; 
    }
    if(midiNote === "x"){
        return "x"; 
    } else if(fretBoardNotes[stringKey].indexOf(midiNote) === 0){
        return "o";
    } else {
        return fretBoardNotes[stringKey].indexOf(midiNote) ; 
    }
    
}

//input: chord array in midi notes and 'x'
// [48,52,60,64,x,72]
//input will be from 6 string (index 0) to first string (index 5)
//output: corresponding fret numbers in array form
//
function chordArrayToFrets(chordArray){
    let fretArray = [];  
    chordArray.forEach((note,i) => {
        fretArray.push(midiNoteToFret(note, 6-i)); 
    }); 
    return fretArray; 
}

///////////////////////
//input : array of chord arrays [ [chord], [chord], [chord], ...]
//chord is in the form [48,52,60,64,x,72] with sixth string on
//index 0 and and first string on index 5
//output: array of chord arrays [[chord],[chord], [chord], ... ]
//chord will be in the form [5,'x','o',5,7,7] with numbers refering 
//to frets played
//////////////////////
function arrayOfChordArraysToFrets(arrayOfChordArrays){
    let arrayOfChordsWithFrets = []; 
    arrayOfChordArrays.forEach(chordArray => {
        arrayOfChordsWithFrets.push(chordArrayToFrets(chordArray)); 
    }); 
    return arrayOfChordsWithFrets; 
}

/*
let noteInput = 89; 
console.log("get equivalen midi notes for " + noteInput);
console.log( getEquivalentMidiNotes(noteInput)); 
*/ 

//Does a chord in the form of [48,52,60,70,48,'x']
//contain all the notes needed to make it a chord?
//ie 1st 3rd and 5th?
//input: chord (array like above)- can contain 'x', but not 'o'
//input: requiredNotesArray ([48,52,55]) ie C E G 
function isValidChord(chord, requiredNotesArray){
    let containsNote = [];
    for(let i = 0; i < requiredNotesArray.length; i++){
        containsNote.push(false); 
    }
    requiredNotesArray.forEach((note,i)=> {
        let equiv = getEquivalentMidiNotes(note);
        //console.log("note: " + note + " i : " + i);
        //console.log("equivalent notes : " + equiv); 
        chord.forEach(chordNote => {
            if(chordNote !== "x" && equiv.includes(chordNote)){
                containsNote[i] = true; 
            }
        });
    });
    //console.log("contains note: " + containsNote); 
    if(containsNote.includes(false)){
        return false;
    } else {
        return true; 
    }
}


//console.log("is valid chord: " + isValidChord([48,'x','x',55,'x','x'],[48,52,55]));

//******************************************* */
//////////////////////////////////////////////
///////////end of helper functions ///////////
///////////////////////////////////////////////
//******************************************* */


//******************************************* */
//////////////////////////////////////////////
//////////Chord Finding algorithms below////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
//******************************************* */

////////////////////////////////////////////////////////
//Algorithm 1- chords with root on 6th string 
//input: [48,52,55] which corresponds to ["C","E", "G"]
//return: 
/* ATTN: returned arrays in "chords" start with fret on 6th string
// ie index 0 is the fret on 6 string, index 1 is fret on 5th string
    {
        type: "sixth string root",
        chords: [8,8,10,10,8,8], ......
    }
*/

/// voicingAndChordRootToMidi([1,3,7,9], 65) ////
///input: chord root --> midi note between 40 and 76
//voicingArray --> [1,3,7,9] - the scale degrees to play
//voingArray may be number 1,3,9,14 or string "b5", "#11"
// return: midi note array eg [50,54,59,61]
function voicingAndChordRootToMidi(voicingArray, chordRoot){
    //if chord root not between 48 an 59, convert
    //console.log("voicing: " + voicingArray);
    //console.log("chord root: " + chordRoot); 
    if(chordRoot < 48){
        let isOutOfRange = true; 
        do{
            chordRoot= chordRoot + 12; 
            if(chordRoot >= 48 && chordRoot <=59){
                isOutOfRange = false; 
            }
        } while (isOutOfRange);
    } else if(chordRoot >59) {
        let isOutOfRange = true; 
        do{
            chordRoot= chordRoot - 12; 
            if(chordRoot >= 48 && chordRoot <=59){
                isOutOfRange = false; 
            }
        } while (isOutOfRange);
    }

    let parentScale = notesForAllMajorKeys[chordRoot]; 
    
    //construct midi chord 
    let midiChord = []; 
    voicingArray.forEach( voicingNote => {
        if (typeof voicingNote === "number"){
            if(voicingNote <= 7){
                midiChord.push(parentScale[voicingNote - 1]);
            } 
            else {
                // > 7
                midiChord.push(parentScale[voicingNote - 8]);
            }
        } else {
            //not a number
            let flatOrSharp = voicingNote.charAt(0); 
            let scaleDegree = Number(voicingNote.slice(1));
            //console.log(scaleDegree);  
            if(flatOrSharp === "b"){
                if(scaleDegree <= 7){
                    midiChord.push(parentScale[scaleDegree - 1] - 1);
                } 
                else {
                    // > 7
                    midiChord.push(parentScale[scaleDegree - 8] - 1);
                }
            } else {
                //is sharp 
                if(scaleDegree <= 7){
                    midiChord.push(parentScale[scaleDegree - 1] + 1);
                } 
                else {
                    // > 7
                    midiChord.push(parentScale[scaleDegree - 8] + 1);
                }
            }
        }
    }); 

    //console.log("voicingAndChordRoot to midi returning: " + midiChord); 
    return midiChord; 
}

//voicingAndChordRootToMidi([1,"b3",5],50); 
//console.log(voicingAndChordRootToMidi([1,3,7,9], 65));


///////////////////////////////////////////////////////////////
//let invalidChords = []; 
function sixthStringRootExt(notesArray){
    
    //console.dir(JSON.stringify(getFretboardNotesObject())); 
    //console.log(notesArray); 

    let fretBoardNotes = getFretboardNotesObject(); 
    //console.log(fretBoardNotes); 
    
    
    /* here is the content of the fretBoardNotes variable
    {
        sixth: [
            40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, 51,
            52
        ],
        fifth: [
            45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56,
            57
        ],
        fourth: ...........
    }
  */

    let chordsArray = []; 
    //create and push a new array for each root found on 
    //6th string including open
    let notesOn6String = fretBoardNotes["sixth"]; 
    //console.log(notesOn6String); 
    let rootMidiNotes = getEquivalentMidiNotes(notesArray[0]); 
    //console.log(rootMidiNotes); 
    notesOn6String.forEach( note => {
        if(rootMidiNotes.includes(note)){
            let arr = []; 
            arr.push(note); 
            chordsArray.push(arr); 
        }
    }); 


    //console.log(chordsArray); 
    for(let currentString = 5; currentString >= 1; currentString--){
        //how many notes in the chord are on the next string?
        let stringKey = ""; 
        switch(currentString){
            case 5:
                stringKey = "fifth"; 
                break;
            case 4: 
                stringKey = "fourth";
                break;
            case 3: 
                stringKey = "third"; 
                break; 
            case 2: 
                stringKey = "second"; 
                break; 
            case 1: 
                stringKey = "first"; 
                break;
            default: 
                stringKey = ""; 
        }

        //let noteInstancesOnNextString = 0; 
        let notesToAdd = []; 

        notesArray.forEach(note => {
            let equivNotes = getEquivalentMidiNotes(note); 
            //console.log(equivNotes); 
            equivNotes.forEach(note => {
                if (fretBoardNotes[stringKey].includes(note)){
                    notesToAdd.push(note); 
                }
                //console.log("fretbaord notes at key = " + stringKey + " " + fretBoardNotes[stringKey]);  
                
            })
        }); 

        notesToAdd.push("x"); 
        //console.log("notes to add : " + notesToAdd) ;
        //console.log("notes to add: " + notesToAdd); 

        //chords array [[8]]
        //notesToAdd [7,10,"x"]
        
        let newChordsArray = []; 
        chordsArray.forEach(chordArr => {
            notesToAdd.forEach(noteToAdd => {
                //console.log("note to add : " + noteToAdd); 
                let fretOfNoteToAdd = midiNoteToFret(noteToAdd, currentString); 
                //console.log("fret of note to add : " + fretOfNoteToAdd); 
                let chordArrayFrets = [];
                chordArr.forEach( (note,i) => {
                    chordArrayFrets.push(midiNoteToFret(note,6-i)); 
                }); 
                if (within5Frets(chordArrayFrets,fretOfNoteToAdd)){
                    let newArr = [...chordArr]; 
                    newArr.push(noteToAdd); 
                    newChordsArray.push(newArr); 
                    //console.log("new arrary: " + newArr); 
                }
            });
        }); 
        
        chordsArray = newChordsArray; 
        /*
        console.log("chords array: " );
        console.log(chordsArray);  
        */

        let chordsArrayFrets = []; 
        chordsArray.forEach(chord => {
            let temparr = []; 
            chord.forEach((midiNote,i) => {
                temparr.push(midiNoteToFret(midiNote, 6-i)); 
            }); 
            chordsArrayFrets.push(temparr); 
        }); 
        //console.log("chords array frets: "); 
        //console.log(chordsArrayFrets); 
        // break;         
    } 

    let validChords = []; 
    //console.log(chordsArray); 
    for(let i = 0; i < chordsArray.length; i++){
        //console.log('inside for looop'); 
        if(isValidChord(chordsArray[i], notesArray)){
            //console.log(chordsArray[i] + " is valid"); 
            validChords.push(chordsArray[i]); 
        } else {
            //invalidChords.push(chordsArray[i]); 
        }
    }

   
        return validChords; 
}





function fifthStringRootExt(notesArray){
    
    //console.dir(JSON.stringify(getFretboardNotesObject())); 
    //console.log(notesArray); 

    let fretBoardNotes = getFretboardNotesObject(); 
    //console.log(fretBoardNotes); 
    
    
    /* here is the content of the fretBoardNotes variable
    {
        sixth: [
            40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, 51,
            52
        ],
        fifth: [
            45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56,
            57
        ],
        fourth: ...........
    }
  */

    let chordsArray = []; 
    //create and push a new array for each root found on 
    //6th string including open
    let notesOn5String = fretBoardNotes["fifth"]; 
    //console.log(notesOn6String); 
    let rootMidiNotes = getEquivalentMidiNotes(notesArray[0]); 
    //console.log(rootMidiNotes); 
    notesOn5String.forEach( note => {
        if(rootMidiNotes.includes(note)){
            let arr = []; 
            arr.push("x"); 
            arr.push(note); 
            chordsArray.push(arr); 
        }
    }); 


    //console.log(chordsArray); 
    for(let currentString = 4; currentString >= 1; currentString--){
        //how many notes in the chord are on the next string?
        let stringKey = ""; 
        switch(currentString){
            case 4: 
                stringKey = "fourth";
                break;
            case 3: 
                stringKey = "third"; 
                break; 
            case 2: 
                stringKey = "second"; 
                break; 
            case 1: 
                stringKey = "first"; 
                break;
            default: 
                stringKey = ""; 
        }

        //let noteInstancesOnNextString = 0; 
        let notesToAdd = []; 

        notesArray.forEach(note => {
            let equivNotes = getEquivalentMidiNotes(note); 
            //console.log(equivNotes); 
            equivNotes.forEach(note => {
                if (fretBoardNotes[stringKey].includes(note)){
                    notesToAdd.push(note); 
                }
                //console.log("fretbaord notes at key = " + stringKey + " " + fretBoardNotes[stringKey]);  
                
            })
        }); 

        notesToAdd.push("x"); 
        //console.log("notes to add : " + notesToAdd) ;
        //console.log("notes to add: " + notesToAdd); 

        //chords array [[8]]
        //notesToAdd [7,10,"x"]
        
        let newChordsArray = []; 
        chordsArray.forEach(chordArr => {
            notesToAdd.forEach(noteToAdd => {
                //console.log("note to add : " + noteToAdd); 
                let fretOfNoteToAdd = midiNoteToFret(noteToAdd, currentString); 
                //console.log("fret of note to add : " + fretOfNoteToAdd); 
                let chordArrayFrets = [];
                chordArr.forEach( (note,i) => {
                    chordArrayFrets.push(midiNoteToFret(note,6-i)); 
                }); 
                if (within5Frets(chordArrayFrets,fretOfNoteToAdd)){
                    let newArr = [...chordArr]; 
                    newArr.push(noteToAdd); 
                    newChordsArray.push(newArr); 
                    //console.log("new arrary: " + newArr); 
                }
            });
        }); 
        
        chordsArray = newChordsArray; 
        /*
        console.log("chords array: " );
        console.log(chordsArray);  
        */

        let chordsArrayFrets = []; 
        chordsArray.forEach(chord => {
            let temparr = []; 
            chord.forEach((midiNote,i) => {
                temparr.push(midiNoteToFret(midiNote, 6-i)); 
            }); 
            chordsArrayFrets.push(temparr); 
        }); 
        //console.log("chords array frets: "); 
        //console.log(chordsArrayFrets); 
        // break;         
    } 

    let validChords = []; 
    //console.log(chordsArray); 
    for(let i = 0; i < chordsArray.length; i++){
        //console.log('inside for looop'); 
        if(isValidChord(chordsArray[i], notesArray)){
            //console.log(chordsArray[i] + " is valid"); 
            validChords.push(chordsArray[i]); 
        }
    }

    
  
    
        return validChords; 
    

}




function fourthStringRootExt(notesArray){
    
    //console.dir(JSON.stringify(getFretboardNotesObject())); 
    //console.log(notesArray); 

    let fretBoardNotes = getFretboardNotesObject(); 
    //console.log(fretBoardNotes); 
    
    
    /* here is the content of the fretBoardNotes variable
    {
        sixth: [
            40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, 51,
            52
        ],
        fifth: [
            45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56,
            57
        ],
        fourth: ...........
    }
  */

    let chordsArray = []; 
    //create and push a new array for each root found on 
    //6th string including open
    let notesOn4String = fretBoardNotes["fourth"]; 
    //console.log(notesOn6String); 
    let rootMidiNotes = getEquivalentMidiNotes(notesArray[0]); 
    //console.log(rootMidiNotes); 
    notesOn4String.forEach( note => {
        if(rootMidiNotes.includes(note)){
            let arr = []; 
            arr.push("x");
            arr.push("x"); 
            arr.push(note); 
            chordsArray.push(arr); 
        }
    }); 


    //console.log(chordsArray); 
    for(let currentString = 3; currentString >= 1; currentString--){
        //how many notes in the chord are on the next string?
        let stringKey = ""; 
        switch(currentString){
            case 3: 
                stringKey = "third"; 
                break; 
            case 2: 
                stringKey = "second"; 
                break; 
            case 1: 
                stringKey = "first"; 
                break;
            default: 
                stringKey = ""; 
        }

        //let noteInstancesOnNextString = 0; 
        let notesToAdd = []; 

        notesArray.forEach(note => {
            let equivNotes = getEquivalentMidiNotes(note); 
            //console.log(equivNotes); 
            equivNotes.forEach(note => {
                if (fretBoardNotes[stringKey].includes(note)){
                    notesToAdd.push(note); 
                }
                //console.log("fretbaord notes at key = " + stringKey + " " + fretBoardNotes[stringKey]);  
                
            })
        }); 

        notesToAdd.push("x"); 
        //console.log("notes to add : " + notesToAdd) ;
        //console.log("notes to add: " + notesToAdd); 

        //chords array [[8]]
        //notesToAdd [7,10,"x"]
        
        let newChordsArray = []; 
        chordsArray.forEach(chordArr => {
            notesToAdd.forEach(noteToAdd => {
                //console.log("note to add : " + noteToAdd); 
                let fretOfNoteToAdd = midiNoteToFret(noteToAdd, currentString); 
                //console.log("fret of note to add : " + fretOfNoteToAdd); 
                let chordArrayFrets = [];
                chordArr.forEach( (note,i) => {
                    chordArrayFrets.push(midiNoteToFret(note,6-i)); 
                }); 
                if (within5Frets(chordArrayFrets,fretOfNoteToAdd)){
                    let newArr = [...chordArr]; 
                    newArr.push(noteToAdd); 
                    newChordsArray.push(newArr); 
                    //console.log("new arrary: " + newArr); 
                }
            });
        }); 
        
        chordsArray = newChordsArray; 
        /*
        console.log("chords array: " );
        console.log(chordsArray);  
        */

        let chordsArrayFrets = []; 
        chordsArray.forEach(chord => {
            let temparr = []; 
            chord.forEach((midiNote,i) => {
                temparr.push(midiNoteToFret(midiNote, 6-i)); 
            }); 
            chordsArrayFrets.push(temparr); 
        }); 
        //console.log("chords array frets: "); 
        //console.log(chordsArrayFrets); 
        // break;         
    } 

    let validChords = []; 
    //console.log(chordsArray); 
    for(let i = 0; i < chordsArray.length; i++){
        //console.log('inside for looop'); 
        if(isValidChord(chordsArray[i], notesArray)){
            //console.log(chordsArray[i] + " is valid"); 
            validChords.push(chordsArray[i]); 
        }
    }

        return validChords; 
    

}



function thirdStringRootExt(notesArray){
    
    //console.dir(JSON.stringify(getFretboardNotesObject())); 
    //console.log(notesArray); 

    let fretBoardNotes = getFretboardNotesObject(); 
    //console.log(fretBoardNotes); 
    
    
    /* here is the content of the fretBoardNotes variable
    {
        sixth: [
            40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, 51,
            52
        ],
        fifth: [
            45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56,
            57
        ],
        fourth: ...........
    }
  */

    let chordsArray = []; 
    //create and push a new array for each root found on 
    //6th string including open
    let notesOn3String = fretBoardNotes["third"]; 
    //console.log(notesOn6String); 
    let rootMidiNotes = getEquivalentMidiNotes(notesArray[0]); 
    //console.log(rootMidiNotes); 
    notesOn3String.forEach( note => {
        if(rootMidiNotes.includes(note)){
            let arr = []; 
            arr.push("x");
            arr.push("x"); 
            arr.push("x"); 
            arr.push(note); 
            chordsArray.push(arr); 
        }
    }); 


    //console.log(chordsArray); 
    for(let currentString = 2; currentString >= 1; currentString--){
        //how many notes in the chord are on the next string?
        let stringKey = ""; 
        switch(currentString){
            case 2: 
                stringKey = "second"; 
                break; 
            case 1: 
                stringKey = "first"; 
                break;
            default: 
                stringKey = ""; 
        }

        //let noteInstancesOnNextString = 0; 
        let notesToAdd = []; 

        notesArray.forEach(note => {
            let equivNotes = getEquivalentMidiNotes(note); 
            //console.log(equivNotes); 
            equivNotes.forEach(note => {
                if (fretBoardNotes[stringKey].includes(note)){
                    notesToAdd.push(note); 
                }
                //console.log("fretbaord notes at key = " + stringKey + " " + fretBoardNotes[stringKey]);  
                
            })
        }); 

        notesToAdd.push("x"); 
        //console.log("notes to add : " + notesToAdd) ;
        //console.log("notes to add: " + notesToAdd); 

        //chords array [[8]]
        //notesToAdd [7,10,"x"]
        
        let newChordsArray = []; 
        chordsArray.forEach(chordArr => {
            notesToAdd.forEach(noteToAdd => {
                //console.log("note to add : " + noteToAdd); 
                let fretOfNoteToAdd = midiNoteToFret(noteToAdd, currentString); 
                //console.log("fret of note to add : " + fretOfNoteToAdd); 
                let chordArrayFrets = [];
                chordArr.forEach( (note,i) => {
                    chordArrayFrets.push(midiNoteToFret(note,6-i)); 
                }); 
                if (within5Frets(chordArrayFrets,fretOfNoteToAdd)){
                    let newArr = [...chordArr]; 
                    newArr.push(noteToAdd); 
                    newChordsArray.push(newArr); 
                    //console.log("new arrary: " + newArr); 
                }
            });
        }); 
        
        chordsArray = newChordsArray; 
        /*
        console.log("chords array: " );
        console.log(chordsArray);  
        */

        let chordsArrayFrets = []; 
        chordsArray.forEach(chord => {
            let temparr = []; 
            chord.forEach((midiNote,i) => {
                temparr.push(midiNoteToFret(midiNote, 6-i)); 
            }); 
            chordsArrayFrets.push(temparr); 
        }); 
        //console.log("chords array frets: "); 
        //console.log(chordsArrayFrets); 
        // break;         
    } 

    let validChords = []; 
    //console.log(chordsArray); 
    for(let i = 0; i < chordsArray.length; i++){
        //console.log('inside for looop'); 
        if(isValidChord(chordsArray[i], notesArray)){
            //console.log(chordsArray[i] + " is valid"); 
            validChords.push(chordsArray[i]); 
        }
    }


        return validChords; 
    

}

 

//////////////////////////////////////////
//this function uses sixthStringRoot, fifthStringRoot,fourthStringRoot
//and thirdStringRoot and finds the first or second inversion 
//input: [48,52,55] notes array in regular ascending order
//function will find the inversion, ie first will be 
//[52,55,48] and then find the new root (52) on the desired
//starting string (ie 6)
//inversion type "first" or "second"
//starting string: 3,4,5,6
//output: [[chord],[chord],[chord],...]
// where chord is in the form of ['x',60,70,55,'x',60]
//////////////////////////////////////////
 
function inversionExt(notesArray, startingString, inversionType){
    /////////////////////////////
    //get inversion of notesArray
    /////////////////////////////
    let invertedNotesArray =[]; 
    if(inversionType === "first"){
        let indexZero = notesArray[0]; 
        notesArray.forEach((note,i)=> {
            if(!(i === 0)){
                invertedNotesArray.push(note); 
            }
        }); 
        invertedNotesArray.push(indexZero); 
    } else if (inversionType === "second"){
        notesArray.forEach((note,i)=> {
            if(!(i === 0 || i === 1)){
                invertedNotesArray.push(note); 
            }
        }); 
        invertedNotesArray.push(notesArray[0]);
        invertedNotesArray.push(notesArray[1]); 
    }
    /////////////////////////////////////////

    if(startingString === 6){
        return (sixthStringRootExt(invertedNotesArray));
    } else if (startingString === 5){
        return (fifthStringRootExt(invertedNotesArray)); 
    } else if (startingString === 4){
        return (fourthStringRootExt(invertedNotesArray));
    } else if (startingString === 3){
        return (thirdStringRootExt(invertedNotesArray)); 
    } else {
        return "error"; 
    }

}



////////////////////////////////////////////////
//// get consecutive note chords starting on 
//starting string and ending on endingString
// eg starting: 6, ending: 4, notesArray = [midinote, midinote, midinote] 
// return array of arrays, each being [midinote,midinote,midinote,x,x,x]
//
function consecutiveNoteChordsExt(startingString, endingString, notesArray){
    let fretBoardNotes = getFretboardNotesObject(); 
    //console.log(fretBoardNotes); 
    
    
    /* here is the content of the fretBoardNotes variable
    {
        sixth: [
            40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, 51,
            52
        ],
        fifth: [
            45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56,
            57
        ],
        fourth: ...........
    }
  */

    let chordsArray = []; 
    //create and push a new array for each root found on 
    //start string including open
    let notesOnStartString = null; 
    switch(startingString){
        case 6:
            notesOnStartString = fretBoardNotes["sixth"];
            break;
        case 5:
            notesOnStartString = fretBoardNotes["fifth"];
            break; 
        case 4:
            notesOnStartString = fretBoardNotes["fourth"];
            break; 
        case 3:
            notesOnStartString = fretBoardNotes["third"];
            break; 
        default: 
            notesOnStartString = []; 
              
    }


    //console.log(notesOn6String); 
    let rootMidiNotes = getEquivalentMidiNotes(notesArray[0]); 
    //console.log(rootMidiNotes); 
    notesOnStartString.forEach( note => {
        if(rootMidiNotes.includes(note)){
            if(startingString === 6){
                let arr = []; 
                arr.push(note); 
                chordsArray.push(arr); 
            } else if(startingString === 5){
                let arr = [];
                arr.push("x");  
                arr.push(note); 
                chordsArray.push(arr);
            } else if (startingString === 4){
                let arr = [];
                arr.push("x");
                arr.push("x");   
                arr.push(note); 
                chordsArray.push(arr);
            } else if(startingString === 3){
                let arr = [];
                arr.push("x"); 
                arr.push("x");
                arr.push("x"); 
                arr.push(note); 
                chordsArray.push(arr);
            }
            
        }
    }); 


    //console.log(chordsArray); 
    for(let currentString = startingString - 1; currentString >= endingString; currentString--){
        //how many notes in the chord are on the next string?
        let stringKey = ""; 
        switch(currentString){
            case 5:
                stringKey = "fifth"; 
                break;
            case 4: 
                stringKey = "fourth";
                break;
            case 3: 
                stringKey = "third"; 
                break; 
            case 2: 
                stringKey = "second"; 
                break; 
            case 1: 
                stringKey = "first"; 
                break;
            default: 
                stringKey = ""; 
        }

        //let noteInstancesOnNextString = 0; 
        let notesToAdd = []; 

        notesArray.forEach(note => {
            let equivNotes = getEquivalentMidiNotes(note); 
            //console.log(equivNotes); 
            equivNotes.forEach(note => {
                if (fretBoardNotes[stringKey].includes(note)){
                    notesToAdd.push(note); 
                }
                //console.log("fretbaord notes at key = " + stringKey + " " + fretBoardNotes[stringKey]);  
                
            })
        }); 

        //notesToAdd.push("x"); 
        //console.log("notes to add : " + notesToAdd) ;
        //console.log("notes to add: " + notesToAdd); 

        //chords array [[8]]
        //notesToAdd [7,10,"x"]
        
        let newChordsArray = []; 
        chordsArray.forEach(chordArr => {
            notesToAdd.forEach(noteToAdd => {
                //console.log("note to add : " + noteToAdd); 
                let fretOfNoteToAdd = midiNoteToFret(noteToAdd, currentString); 
                //console.log("fret of note to add : " + fretOfNoteToAdd); 
                let chordArrayFrets = [];
                chordArr.forEach( (note,i) => {
                    chordArrayFrets.push(midiNoteToFret(note,6-i)); 
                }); 
                if (within5Frets(chordArrayFrets,fretOfNoteToAdd)){
                    let newArr = [...chordArr]; 
                    newArr.push(noteToAdd); 
                    newChordsArray.push(newArr); 
                    //console.log("new arrary: " + newArr); 
                }
            });
        }); 
        
        chordsArray = newChordsArray; 
        /*
        console.log("chords array: " );
        console.log(chordsArray);  
        */

        let chordsArrayFrets = []; 
        chordsArray.forEach(chord => {
            let temparr = []; 
            chord.forEach((midiNote,i) => {
                temparr.push(midiNoteToFret(midiNote, 6-i)); 
            }); 
            chordsArrayFrets.push(temparr); 
        }); 
        //console.log("chords array frets: "); 
        //console.log(chordsArrayFrets); 
        // break;         
    } 

    chordsArray.forEach(chord => {
        if(endingString === 4){
            chord.push("x");
            chord.push("x");
            chord.push("x");
        } else if (endingString === 3){
            chord.push("x");
            chord.push("x");
        } else if (endingString === 2){
            chord.push("x");
        } 
    });
    let validChords = []; 
    //console.log(chordsArray); 
    for(let i = 0; i < chordsArray.length; i++){
        //console.log('inside for looop'); 
        if(isValidChord(chordsArray[i], notesArray)){
            //console.log(chordsArray[i] + " is valid"); 
            validChords.push(chordsArray[i]); 
        }
    }

   
        return validChords; 
    
}

/*
let notes = [55,59,62];
let midiNotes = consecutiveNoteChords(5,2,notes); 
console.log(midiNotes); 
console.log(arrayOfChordArraysToFrets(midiNotes)); 
*/

//////////////////////////////////////////
//get inversions of consecutive note chords
// similar to inversion function above
function inversionsOfConsecutiveNoteChordsExt(startingString, endingString,notesArray,inversionType){
    /////////////////////////////
    //get inversion of notesArray
    /////////////////////////////
    let invertedNotesArray =[]; 
    if(inversionType === "first"){
        let indexZero = notesArray[0]; 
        notesArray.forEach((note,i)=> {
            if(!(i === 0)){
                invertedNotesArray.push(note); 
            }
        }); 
        invertedNotesArray.push(indexZero); 
    } else if (inversionType === "second"){
        notesArray.forEach((note,i)=> {
            if(!(i === 0 || i === 1)){
                invertedNotesArray.push(note); 
            }
        }); 
        invertedNotesArray.push(notesArray[0]);
        invertedNotesArray.push(notesArray[1]); 
    }
    /////////////////////////////////////////

    //function consecutiveNoteChords(startingString, endingString, notesArray)
    return (consecutiveNoteChordsExt(startingString,endingString,invertedNotesArray)); 
}

/*
let chordInfoObj = chordsExtended[1][1]; 
let chordRoot = 60; 
console.log(chordInfoObj); 
let voicing = chordInfoObj["voicings"][0]; 
console.log("voicing: "); 
console.log(voicing);
let midiNotes = voicingAndChordRootToMidi(voicing, chordRoot); 

let chords = inversionsOfConsecutiveNoteChordsExt(6,3,midiNotes,"first"); 
console.log(chords); 
//console.log("invalid chords: "); 
//console.log(invalidChords); 
console.log("midi notes: "); 
console.log(midiNotes);
*/
/*
let notes = [55,59,62];
let midiNotes = inversionsOfConsecutiveNoteChords(5,2,notes,"second"); 
console.log(midiNotes); 
console.log(arrayOfChordArraysToFrets(midiNotes)); 
*/




///input: array of chords [47,'x',50, 'x',52,60]
//chords should be in midi note form (midi notes and x)
function removeChordsWithInternalMutes(chordArray){
    let returnArray = []; 
    chordArray.forEach(chord => {
        //console.log("chord: " + chord);
        let internalMutes = false; 
        chord.forEach((note,i)=> {
             
            if(!(i === 0 || i === 5)){
                //if it is a leading x,ignore
                let isLeadingX = true;
                //console.log("index: " + i + "note : " + note);  
                if(note === 'x'){
                    for(let index = i; index >=0; index--){
                        if(typeof chord[index] === 'number'){
                            isLeadingX = false; 
                        }
                    }
                }
                //console.log("is leading x : " + isLeadingX); 
                if(!isLeadingX){
                    if(note === 'x' && typeof chord[i-1] === 'number' && typeof chord[i+1] === 'number' ){
                        internalMutes = true; 
                    }
                    else if(note === 'x'){
                        for(let index = i + 1; index <= 5; index++){
                            if(typeof chord[index] === "number"){
                                internalMutes = true; 
                            }
                        }
                    }
                }
                
            }
        });
        if(!internalMutes){
            //console.log("chord has no internal mutes"); 
            returnArray.push(chord); 
        }
    });
    return returnArray; 
}

//all chords for particular notes array [48,52,55]
//ie 6s,5s,4s,3s root and all inversions and 
//5,4,3 note consecutive chords and inversions
//will call curate to remove unplayable chords and 
//apply other rules 
//////////////////////////////////////////////////
/// this will be the access point for this module 
// to get desired chords for any notes array 
//return the following : 
/*
    {
        notes: [62,66,69],
        "6s": {
            "6sRoot": [[chord],[chord],....],
            "6sRootInv1": [[chord],[chord],....],
            "6sRootInv2": [[chord],[chord],....],
            "6-1": [[chord],[chord],....],
            "6-1inv1": [[chord],[chord],....],
            "6-1inv2": [[chord],[chord],....],
            "6-2": [[chord],[chord],....],
            "6-2inv1": [[chord],[chord],....],
            "6-2inv2": [[chord],[chord],....],
            "6-3": [[chord],[chord],....],
            "6-3inv1": [[chord],[chord],....],
            "6-3inv2": [[chord],[chord],....],
            "6-4": [[chord],[chord],....],
            "6-4inv1": [[chord],[chord],....],
            "6-4inv2": [[chord],[chord],....]
        }, 
        "5s": {
            "5sRoot": [[chord],[chord],....],
            "5sRootInv1": [[chord],[chord],....],
            "5sRootInv2": [[chord],[chord],....],
            "5-1": [[chord],[chord],....],
            "5-1inv1": [[chord],[chord],....],
            "5-1inv2": [[chord],[chord],....],
            "5-2": [[chord],[chord],....],
            "5-2inv1": [[chord],[chord],....],
            "5-2inv2": [[chord],[chord],....],
            "5-3": [[chord],[chord],....],
            "5-3inv1": [[chord],[chord],....],
            "5-3inv2": [[chord],[chord],....],
        },
        "4s": {
            "4sRoot": [[chord],[chord],....],
            "4sRootInv1": [[chord],[chord],....],
            "4sRootInv2": [[chord],[chord],....],
            "4-1": [[chord],[chord],....],
            "4-1inv1": [[chord],[chord],....],
            "4-1inv2": [[chord],[chord],....],
            "4-2": [[chord],[chord],....],
            "4-2inv1": [[chord],[chord],....],
            "4-2inv2": [[chord],[chord],....],
        },
        "3s": {
            "3sRoot": [[chord],[chord],....],
            "3sRootInv1": [[chord],[chord],....],
            "3sRootInv2": [[chord],[chord],....],
            "3-1": [[chord],[chord],....],
            "3-1inv1": [[chord],[chord],....],
            "3-1inv2": [[chord],[chord],....],
        }
    }
*/
function extendedGuitarChords(notesArray){
    let chordObject = {
        "notes": notesArray,
        "6": {
            "6sRoot": sixthStringRootExt(notesArray),
            "6sRootInv1": inversionExt(notesArray,6,"first"),
            "6sRootInv2": inversionExt(notesArray,6,"second"),
            "6-1": consecutiveNoteChordsExt(6,1,notesArray),
            "6-1inv1": inversionsOfConsecutiveNoteChordsExt(6,1,notesArray,"first"),
            "6-1inv2": inversionsOfConsecutiveNoteChordsExt(6,1,notesArray,"second"),
            "6-2": consecutiveNoteChordsExt(6,2,notesArray),
            "6-2inv1": inversionsOfConsecutiveNoteChordsExt(6,2,notesArray,"first"),
            "6-2inv2": inversionsOfConsecutiveNoteChordsExt(6,2,notesArray,"second"),
            "6-3": consecutiveNoteChordsExt(6,3,notesArray),
            "6-3inv1": inversionsOfConsecutiveNoteChordsExt(6,3,notesArray,"first"),
            "6-3inv2": inversionsOfConsecutiveNoteChordsExt(6,3,notesArray,"second"),
            "6-4": consecutiveNoteChordsExt(6,4,notesArray),
            "6-4inv1": inversionsOfConsecutiveNoteChordsExt(6,4,notesArray,"first"),
            "6-4inv2": inversionsOfConsecutiveNoteChordsExt(6,4,notesArray,"second")
        },
        "5": {
            "5sRoot": fifthStringRootExt(notesArray),
            "5sRootInv1": inversionExt(notesArray,5,"first"),
            "5sRootInv2": inversionExt(notesArray,5,"second"),
            "5-1": consecutiveNoteChordsExt(5,1,notesArray),
            "5-1inv1": inversionsOfConsecutiveNoteChordsExt(5,1,notesArray,"first"),
            "5-1inv2": inversionsOfConsecutiveNoteChordsExt(5,1,notesArray,"second"),
            "5-2": consecutiveNoteChordsExt(5,2,notesArray),
            "5-2inv1": inversionsOfConsecutiveNoteChordsExt(5,2,notesArray,"first"),
            "5-2inv2": inversionsOfConsecutiveNoteChordsExt(5,2,notesArray,"second"),
            "5-3": consecutiveNoteChordsExt(5,3,notesArray),
            "5-3inv1": inversionsOfConsecutiveNoteChordsExt(5,3,notesArray,"first"),
            "5-3inv2": inversionsOfConsecutiveNoteChordsExt(5,3,notesArray,"second"),
        },
        "4": {
            "4sRoot": fourthStringRootExt(notesArray),
            "4sRootInv1": inversionExt(notesArray,4,"first"),
            "4sRootInv2": inversionExt(notesArray,4,"second"),
            "4-1": consecutiveNoteChordsExt(4,1,notesArray),
            "4-1inv1": inversionsOfConsecutiveNoteChordsExt(4,1,notesArray,"first"),
            "4-1inv2": inversionsOfConsecutiveNoteChordsExt(4,1,notesArray,"second"),
            "4-2": consecutiveNoteChordsExt(4,2,notesArray),
            "4-2inv1": inversionsOfConsecutiveNoteChordsExt(4,2,notesArray,"first"),
            "4-2inv2": inversionsOfConsecutiveNoteChordsExt(4,2,notesArray,"second"),
        },
        "3": {
            "3sRoot": thirdStringRootExt(notesArray),
            "3sRootInv1": inversionExt(notesArray,3,"first"),
            "3sRootInv2": inversionExt(notesArray,3,"second"),
            "3-1": consecutiveNoteChordsExt(3,1,notesArray),
            "3-1inv1": inversionsOfConsecutiveNoteChordsExt(3,1,notesArray,"first"),
            "3-1inv2": inversionsOfConsecutiveNoteChordsExt(3,1,notesArray,"second"),
        }
    }; 
    return chordObject; 
}

 


//////////////////////
//// inversion test
///////////////////////
/*
console.log("first inversion " );
let midiNotes = inversion([48,52,55],5,"first");
console.log(arrayOfChordArraysToFrets(midiNotes)); 
*/

////////////////////
/// sixth string root test
//////////////////////

/*
let midiChords = sixthStringRoot([60,64,67]); 
console.log("midi chords");
console.log(midiChords); 
console.log("chords without internal mutes : "); 
let frets = arrayOfChordArraysToFrets( removeChordsWithInternalMutes(midiChords)); 
let reversed = [];
frets.forEach(chord => {
    reversed.push(chord.reverse()); 
});
console.log(reversed); 
*/

 
/*
console.log("chords final :(frets) "); 
midiChords.forEach(chord => {
   console.log(chordArrayToFrets(chord)); 
});
console.log("total chords : " + midiChords.length); 
*/


////////////////////////
////fifth string root test 
/////////////////////////

/*
let midiChords = fifthStringRoot([62,66,69]); 
console.log("midi chords");
console.log(midiChords); 
console.log("remove interanl mutes: "); 
console.log(removeChordsWithInternalMutes(midiChords)); 
 */
/*
console.log("chords final :(frets) "); 
console.log(arrayOfChordArraysToFrets(midiChords)); 

midiChords.forEach(chord => {
   console.log(chordArrayToFrets(chord)); 
});
*/



//////////////////////////////
///fourth string root test
////////////////////////////
/*
let midiChords = fourthStringRoot([62,66,69]); 

console.log("midi chords");
console.log(midiChords); 
console.log("remove interanl mutes: "); 
console.log(removeChordsWithInternalMutes(midiChords));
*/
/*
let midiChords = fourthStringRoot([65,69,72]); 
///console.log("midi chords");
//console.log(midiChords); 
console.log("chords final :(frets) "); 
midiChords.forEach(chord => {
   console.log(chordArrayToFrets(chord)); 
});
*/

/////////////////////////////////////////
/////third string root test
////////////////////////////////////
/*
let midiChords = thirdStringRoot([60,64,67]); 
console.log("midi chords");
console.log(midiChords); 
console.log("chords without internal mutes : "); 
console.log(removeChordsWithInternalMutes(midiChords)); 
*/




/*

let chordInfoObj = chordsExtended[1][1]; 
let chordRoot = 60; 
console.log(chordInfoObj); 
let voicing = chordInfoObj["voicings"][0]; 
console.log("voicing: "); 
console.log(voicing);
let midiNotes = voicingAndChordRootToMidi(voicing, chordRoot);

let chords = extendedGuitarChords(midiNotes); 
console.log(chords);

*/

//input: chordRoot is midi note of root of
//chord (ie 48)
//input: scaleDegree - number 1 to 7
//return : scale degree array [[chord],[chord],..]
function constructScaleDegree(chordRoot,scaleDegree){
    //input fullNotes [1,3,5,7] or [48,52,57,59]
    // voicing [1,3,7] or [48,52,59]
    //return array of notes dropped (notes from fullNotes
    //that are not played)
    function findDroppedNotes(fullNotes,voicing){
        let droppedNotes = [];
        fullNotes.forEach(noteInFullChord => {
            if(!voicing.includes(noteInFullChord)){
                droppedNotes.push(noteInFullChord);
            }
        }); 

        return droppedNotes; 
    }

    let returnArray = []; 
    let chordsAtScaleDegree = chordsExtended[scaleDegree]; 
    chordsAtScaleDegree.forEach(chordInfo=> {
        chordInfo["voicings"].forEach(voicing=> {
            //console.log(" notes :" +  voicingAndChordRootToMidi(voicing, chordRoot));
            returnArray.push( 
            {
                chordRoot: chordRoot,
                name: chordInfo["name"], 
                htmlName: null, 
                notes : voicingAndChordRootToMidi(voicing, chordRoot),
                scaleDegreeInfo: {
                    fullChord: chordInfo["notes"],
                    thisVoicing: voicing, 
                    droppedNotes: findDroppedNotes(chordInfo["notes"],voicing), 
                },
                midiNoteInfo: {
                    fullChord: voicingAndChordRootToMidi(chordInfo["notes"], chordRoot),
                    thisVoicing: voicingAndChordRootToMidi(voicing, chordRoot),
                    droppedNotes: findDroppedNotes(
                        voicingAndChordRootToMidi(chordInfo["notes"], chordRoot),
                        voicingAndChordRootToMidi(voicing, chordRoot)
                    )
                },
                chords: extendedGuitarChords(voicingAndChordRootToMidi(voicing, chordRoot))
            }
            );
        });
    }); 
    return returnArray; 
}

//let scaleDegree = constructScaleDegree(50,1);
//console.log(scaleDegree[0]);
 

////////////////////////////////
/// input: keysObject- the object created
/// by calling allMajorKeys()
function addAllExtendedChords(keysObject){
    keysObject.forEach(key => {
            key["extendedChords"] = {
                "scaleDegree1": {},
                "scaleDegree2": {},
                "scaleDegree3": {},
                "scaleDegree4": {},
                "scaleDegree5": {},
                "scaleDegree6": {},
                "scaleDegree7": {},
            }; 

            let keyRoot = key["keyRoot"];
            //console.log("key root " + keyRoot); 
            let scaleNotes = notesForAllMajorKeys[keyRoot];
            //console.log("scale notes: " + scaleNotes); 

            for(let degree = 1; degree <= 7; degree++){
                key["extendedChords"]["scaleDegree" + degree] = constructScaleDegree(scaleNotes[degree -1],degree); 
            }

        });
}


export function allChords(){
    let keys = allMajorKeys(); 
    addAllExtendedChords(keys);
    return keys; 
}
 
/*

let firstKey = keys[0]; 
//console.log(firstKey); 
let extendedChords = firstKey["extendedChords"]; 
//console.log(extendedChords);  
let scaleDegree2 = extendedChords["scaleDegree2"]; 
console.log(scaleDegree2[0]); 

*/