
///this module is only for 2 note intervals 

import { getChords } from "./guitarChords.mjs";
import { getFretboardNotesObject } from "./guitarLogic.mjs";
import { getEquivalentMidiNotes } from "./guitarLogic.mjs";
import { allMajorKeys } from "./allChords.mjs";

//This module will add subchord object to each major key object
/*
{
    keyRoot: 48,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }, 
    subchords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }

  }


  where subchords["scaleDegree1"] is an array of chord objects on that 
  scale degree: 

  [
  {
    chordRoot: 48,
    name: 'M',
    htmlName: null,
    notes: [ 48, 52, 55 ],
    chords: {
        '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'M7',
    htmlName: null,
    notes: [ 48, 52, 55, 59 ],
    chords: {
        '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  ......
  .....
]

- "chords" should contain keys 2,3,4,5,6

-each key will refer to an object

3': {
      '3sRoot': [Array],
      '3sRootInv1': [Array],
      '3sRootInv2': [Array],
      '3sRootInv3': [Array],
      '3-1': [Array],
      '3-1inv1': [Array],
      '3-1inv2': [Array],
      '3-1inv3': [Array]
    },

-where "3sRoot" will be an array of chord arrays

'4sRoot': [
    [ 'x', 'x', 60, 64, 67, 72 ],
    [ 'x', 'x', 60, 64, 67, 64 ],
    [ 'x', 'x', 60, 64, 67, 76 ],
    [ 'x', 'x', 60, 64, 67, 'x' ],
    [ 'x', 'x', 60, 55, 67, 64 ],
  ],



-will need: 
6-1, 6-2,6-3,6-4,6-5
5-1, 5-2, 5-3, 5-4
4-1, 4-2, 4-3
3-1, 3-2, 
2-1
-will need only root and 1st inversion

*/

const keyRoots = [48,49,50,51,52,53,54,55,56,57,58,59];

const subChords = {
    1: [
        {notes: [1,5] , name: "5", htmlName: null}
    ], 
    2: [
        {notes: [1,5] , name: "5", htmlName: null}
    ],
    3: [
        {notes: [1,5] , name: "5", htmlName: null}
    ],
    4: [
        {notes: [1,5] , name: "5", htmlName: null}
    ],
    5: [
        {notes: [1,5] , name: "5", htmlName: null}
    ],
    6: [
        {notes: [1,5] , name: "5", htmlName: null}
    ],
    7: [
        {notes: [1,5] , name: "5", htmlName: null}
    ]
};

function determineChordRoot(keyRoot, scaleDegreeNumber){
    let offsets = {
        1: 0, 
        2: 2, 
        3: 4,
        4: 5, 
        5: 7, 
        6: 9, 
        7: 11, 
    }; 

    return (keyRoot + offsets[scaleDegreeNumber]); 
}

// input: notesArray = [48,55]
//input should only be length = 2; 
//returns 1st inversion - [48,55] returns
//[55,48]
function firstInversion(notesArray){
    return ([notesArray[1], notesArray[0]]); 
}

//requiredNotesArray : [62,69] should be midi notes
//and length should equal 2
//chord should be midi notes and 'x' 
//[ 'x', 'x', 50, 57, 62, 69 ],
//output: is valid if contains both notes in required
//notes array (returns true)
function isValidSubchord(chord, requiredNotesArray){
    let containsNote = [false, false];
    let equivNotesRequired0 = getEquivalentMidiNotes(requiredNotesArray[0]); 
    let equivNotesRequired1 = getEquivalentMidiNotes(requiredNotesArray[1]); 
    chord.forEach( midiNote => {
        if(equivNotesRequired0.includes(midiNote)){
            containsNote[0] = true; 
        }
        if(equivNotesRequired1.includes(midiNote)){
            containsNote[1] = true; 
        }
    });  

    if(containsNote[0] && containsNote[1]){
        return true; 
    } else {
        return false; 
    }
}

/*
let chord =  [ 'x', 'x', 'x', 69, "x" ];
let required = [62,69]; 
let isValid = isValidSubchord(chord, required); 
console.log("is valid? ", isValid); 
*/

//console.log(firstInversion([48,55])); 

//input: startString- number 2 to 6, endString 1 to 5 
//option- string, either 'consecutive' or 'nonconsecutive'
//consecutive will not include internal mutes, only start 
//and end mutes. nonconsecutive will have internal mutes
//notesArray : [48,55]- should only be 2 notes
//output- will return an array of arrays 
//[['x',48,55, 'x', 55, 'x], [...], [....]]
//consisting of midi notes and 'x'
function subchords(notesArray, startingString,endString,option){
    let fretboardNotes = getFretboardNotesObject(); 
    //console.log(fretboardNotes); 

    //array of chord arrays to return 
    let arrayOfChords = []; 

   //starting array that every voicing will originate from 
    let seedArray = []; 

     //push leading x if any 
    switch(startingString){
        case 6: 
            break; 
        case 5: 
            seedArray.push("x"); 
            break; 
        case 4: 
            seedArray.push("x"); 
            seedArray.push("x"); 
            break; 
        case 3: 
            seedArray.push("x"); 
            seedArray.push("x"); 
            seedArray.push("x"); 
            break; 
        case 2: 
            seedArray.push("x"); 
            seedArray.push("x"); 
            seedArray.push("x"); 
            seedArray.push("x"); 
            break; 
        default: 
            seedArray.push("error"); 
    }


    let startingStringNotes = null; 

    switch(startingString){
        case 6: 
            startingStringNotes = fretboardNotes["sixth"]; 
            break; 
        case 5: 
            startingStringNotes = fretboardNotes["fifth"]; 
            break; 
        case 4: 
            startingStringNotes = fretboardNotes["fourth"]; 
            break; 
        case 3: 
            startingStringNotes = fretboardNotes["third"]; 
            break; 
        case 2: 
            startingStringNotes = fretboardNotes["second"]; 
            break; 
        default: 
            seedArray.push("error"); 
    }

    let instancesOfStartingStringNotes = []; 
    startingStringNotes.forEach( note => {
        if(getEquivalentMidiNotes(notesArray[0]).includes(note)){
            instancesOfStartingStringNotes.push(note); 
        }
    }); 
    //console.log(instancesOfStartingStringNotes.length);

    if(instancesOfStartingStringNotes.length == 1){
        seedArray.push(instancesOfStartingStringNotes[0]); 
        arrayOfChords.push(seedArray); 
    } else if(instancesOfStartingStringNotes.length == 2){
        let arr1 = seedArray.slice(); 
        let arr2 = seedArray.slice(); 
        arr1.push(instancesOfStartingStringNotes[0]); 
        arr2.push(instancesOfStartingStringNotes[1]); 
        arrayOfChords.push(arr1); 
        arrayOfChords.push(arr2); 
    } else {
        arrayOfChords.push("error"); 
    }

    let currentString = startingString - 1; 

    for(let current = currentString; current >= endString; current--){
        let notesToAdd = []; 
        let notesOnCurrentString = null; 

        switch(current){
            case 5: 
                notesOnCurrentString = fretboardNotes["fifth"]; 
                break; 
            case 4: 
                notesOnCurrentString = fretboardNotes["fourth"]; 
                break; 
            case 3: 
                notesOnCurrentString = fretboardNotes["third"]; 
                break; 
            case 2: 
                notesOnCurrentString = fretboardNotes["second"]; 
                break; 
            case 1: 
                notesOnCurrentString = fretboardNotes["first"]; 
                break; 
            default: 
        }

        let equivNotes0 = getEquivalentMidiNotes(notesArray[0]); 
        let equivNotes1 = getEquivalentMidiNotes(notesArray[1]); 

        notesOnCurrentString.forEach(note => {
            if(equivNotes0.includes(note) || equivNotes1.includes(note)){
                notesToAdd.push(note); 
            }
        }); 

        if(option == "nonconsecutive") {
            notesToAdd.push("x"); 
        }

        let newArrayOfChords = []; 
        arrayOfChords.forEach( chord => {
            notesToAdd.forEach( noteToAdd => {
                let newChord = chord.slice(); 
                newChord.push(noteToAdd); 
                newArrayOfChords.push(newChord); 
            }); 
        }); 
        arrayOfChords = newArrayOfChords; 

    }

    switch(endString){
        case 1:
            //do nothing
            break; 
        case 2: 
            arrayOfChords.forEach(chord=> {
                chord.push("x"); 
            }); 
            break; 
        case 3: 
            arrayOfChords.forEach(chord=> {
                chord.push("x"); 
                chord.push("x"); 
            });
            break; 
        case 4: 
            arrayOfChords.forEach(chord=> {
                chord.push("x"); 
                chord.push("x"); 
                chord.push("x"); 
            });
            break; 
        case 5: 
            arrayOfChords.forEach(chord=> {
                chord.push("x"); 
                chord.push("x"); 
                chord.push("x");
                chord.push("x"); 
            });
            break; 
        default: 

    }


    //valid chords
    let validChords = []; 
    arrayOfChords.forEach( chord => {
        if(isValidSubchord(chord, notesArray)) {
            validChords.push(chord); 
            //console.log(chord, "is valid"); 
        }
    });

    return validChords; 
}

//console.log(subchords([62,69], 5, 2, "consecutive")); 

//D5, D and A
//let subs = subchords([62,69],2,1,"consecutive" ); 
//console.log(subs); 

/*
-will need: 
6-1, 6-2,6-3,6-4,6-5
5-1, 5-2, 5-3, 5-4
4-1, 4-2, 4-3
3-1, 3-2, 
2-1
-will need only root and 1st inversion
*/

//input chord root midi number, notes array [1,5]
function findAndConstructChords(chordRoot, notesArray){
    return {
        "6": {
            "6-1consec": subchords(notesArray, 6,1,"consecutive"),
            "6-1nonconsec": subchords(notesArray, 6,1,"nonconsecutive"),
            "6-1inv1consec": subchords(firstInversion(notesArray), 6,1,"consecutive"),
            "6-1inv1nonconsec": subchords(firstInversion(notesArray), 6,1,"nonconsecutive"),
            "6-2consec": subchords(notesArray, 6,2,"consecutive"),
            "6-2nonconsec": subchords(notesArray, 6,2,"nonconsecutive"),
            "6-2inv1consec": subchords(firstInversion(notesArray), 6,2,"consecutive"),
            "6-2inv1nonconsec": subchords(firstInversion(notesArray), 6,2,"nonconsecutive"),
            "6-3consec": subchords(notesArray, 6,3,"consecutive"),
            "6-3nonconsec": subchords(notesArray, 6,3,"nonconsecutive"),
            "6-3inv1consec": subchords(firstInversion(notesArray), 6,3,"consecutive"),
            "6-3inv1nonconsec": subchords(firstInversion(notesArray), 6,3,"nonconsecutive"),
            "6-4consec": subchords(notesArray, 6,4,"consecutive"),
            "6-4nonconsec": subchords(notesArray, 6,4,"nonconsecutive"),
            "6-4inv1consec": subchords(firstInversion(notesArray), 6,4,"consecutive"),
            "6-4inv1nonconsec": subchords(firstInversion(notesArray), 6,4,"nonconsecutive"),
            "6-5consec": subchords(notesArray, 6,5,"consecutive"),
            "6-5nonconsec": subchords(notesArray, 6,5,"nonconsecutive"),
            "6-5inv1consec": subchords(firstInversion(notesArray), 6,5,"consecutive"),
            "6-5inv1nonconsec": subchords(firstInversion(notesArray), 6,5,"nonconsecutive"),
        }, 
        "5" : {
            "5-1consec": subchords(notesArray, 5,1,"consecutive"),
            "5-1nonconsec": subchords(notesArray, 5,1,"nonconsecutive"),
            "5-1inv1consec": subchords(firstInversion(notesArray), 5,1,"consecutive"),
            "5-1inv1nonconsec": subchords(firstInversion(notesArray), 5,1,"nonconsecutive"),
            "5-2consec": subchords(notesArray, 5,2,"consecutive"),
            "5-2nonconsec": subchords(notesArray, 5,2,"nonconsecutive"),
            "5-2inv1consec": subchords(firstInversion(notesArray), 5,2,"consecutive"),
            "5-2inv1nonconsec": subchords(firstInversion(notesArray), 5,2,"nonconsecutive"),
            "5-3consec": subchords(notesArray, 5,3,"consecutive"),
            "5-3nonconsec": subchords(notesArray, 5,3,"nonconsecutive"),
            "5-3inv1consec": subchords(firstInversion(notesArray), 5,3,"consecutive"),
            "5-3inv1nonconsec": subchords(firstInversion(notesArray), 5,3,"nonconsecutive"),
            "5-4consec": subchords(notesArray, 5,4,"consecutive"),
            "5-4nonconsec": subchords(notesArray, 5,4,"nonconsecutive"),
            "5-4inv1consec": subchords(firstInversion(notesArray), 5,4,"consecutive"),
            "5-4inv1nonconsec": subchords(firstInversion(notesArray), 5,4,"nonconsecutive"),
        },  
        "4": {
            "4-1consec": subchords(notesArray, 4,1,"consecutive"),
            "4-1nonconsec": subchords(notesArray, 4,1,"nonconsecutive"),
            "4-1inv1consec": subchords(firstInversion(notesArray), 4,1,"consecutive"),
            "4-1inv1nonconsec": subchords(firstInversion(notesArray), 4,1,"nonconsecutive"),
            "4-2consec": subchords(notesArray, 4,2,"consecutive"),
            "4-2nonconsec": subchords(notesArray, 4,2,"nonconsecutive"),
            "4-2inv1consec": subchords(firstInversion(notesArray), 4,2,"consecutive"),
            "4-2inv1nonconsec": subchords(firstInversion(notesArray), 4,2,"nonconsecutive"),
            "4-3consec": subchords(notesArray, 4,3,"consecutive"),
            "4-3nonconsec": subchords(notesArray, 4,3,"nonconsecutive"),
            "4-3inv1consec": subchords(firstInversion(notesArray), 4,3,"consecutive"),
            "4-3inv1nonconsec": subchords(firstInversion(notesArray), 4,3,"nonconsecutive"),
        }, 
        "3": {
            "3-1consec": subchords(notesArray, 3,1,"consecutive"),
            "3-1nonconsec": subchords(notesArray, 3,1,"nonconsecutive"),
            "3-1inv1consec": subchords(firstInversion(notesArray), 3,1,"consecutive"),
            "3-1inv1nonconsec": subchords(firstInversion(notesArray), 3,1,"nonconsecutive"),
            "3-2consec": subchords(notesArray, 3,2,"consecutive"),
            "3-2nonconsec": subchords(notesArray, 3,2,"nonconsecutive"),
            "3-2inv1consec": subchords(firstInversion(notesArray), 3,2,"consecutive"),
            "3-2inv1nonconsec": subchords(firstInversion(notesArray), 3,2,"nonconsecutive"),
        },
        "2": {
            "2-1consec": subchords(notesArray, 2,1,"consecutive"),
            "2-1nonconsec": subchords(notesArray, 2,1,"nonconsecutive"),
            "2-1inv1consec": subchords(firstInversion(notesArray), 2,1,"consecutive"),
            "2-1inv1nonconsec": subchords(firstInversion(notesArray), 2,1,"nonconsecutive"),
        }
    }
}

function constructScaleDegree(scaleDegreeString, keyRoot){
    //determine chordRoot 
    let scaleDegreeNumber = Number(scaleDegreeString.slice(-1)); 
    //console.log(typeof scaleDegreeNumber); 
    let chordRoot = determineChordRoot(keyRoot, scaleDegreeNumber); 
    //console.log(chordRoot); 

    //for each subchord at the scale degree 
    let subchordsAtScaleDegree = subChords[scaleDegreeNumber]; 
    //console.log(subchordsAtScaleDegree); 

    /*
    {
    chordRoot: 48,
    name: 'M',
    htmlName: null,
    notes: [ 48, 52, 55 ],
    chords: {
        '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
    */

    let scaleDegreeArray = []; 

    subchordsAtScaleDegree.forEach( subchordInfo  => {
        let subchordObj = {
            chordRoot: chordRoot, 
            name: subchordInfo["name"], 
            htmlName: null, 
            notes : subchordInfo["notes"], 
            chords: findAndConstructChords(chordRoot, subchordInfo["notes"]),
        }; 
        scaleDegreeArray.push(subchordObj); 
    }); 



    return scaleDegreeArray; 
}

//input root : number between 48 and 59
function constructSubchordObject(keyRoot){
    if(keyRoot < 48){
        do{
            keyRoot = keyRoot+12; 
        } while (root <48); 
    } else if(keyRoot>59){
        do{
            keyRoot = keyRoot - 12; 
        } while (keyRoot > 59); 
    }

    let subchords = {
        scaleDegree1: [], 
        scaleDegree2: [], 
        scaleDegree3: [], 
        scaleDegree4: [], 
        scaleDegree5: [], 
        scaleDegree6: [], 
        scaleDegree7: [], 
    }; 

    for(const scaleDegree in subchords){
       subchords[scaleDegree] = constructScaleDegree(scaleDegree, keyRoot); 
    }

    return subchords; 
}



/*
let subchordObj = constructSubchordObject(48); 
let sd1 = subchordObj["scaleDegree1"]; 
//let chords = sd1["chords"]; 
let obj = sd1[0]; 
//console.log(obj); 
let chords = obj["chords"]; 
//console.log(chords); 
let four = chords["4"]; 
console.log(four); 
*/

 //console.log(constructSubchordObject(48)); 

 let chords = allMajorKeys; 

 chords.forEach( majorKeyObj => {
    let root = majorKeyObj["keyRoot"]; 
    majorKeyObj["subChords"] = constructSubchordObject(root); 
 }); 

 //console.log(chords); 

export {chords}; 