/*
    Interval by semitones table:
    /////////////////////////////////////
    *****these are the numbers to add to the root to
    get the resulting note *****
    /////////////////////////////////////

    minor second: 1
    major second: 2
    minor third: 3
    major third: 4
    fourth : 5
    fifth: 7
    minor sixth: 8
    major sixth: 9
    minor seventh: 10
    major seventh: 11
    major 9: 14 
*/

//const chordsToExclude = 
//["minmaj7", "dom7b5", "dom7#5", "dom7b9", "dom7#9", 'aug'];

//notes:
// D major notes:  D – E – F# – G – A – B – C# – D
// all these are for D root in chord dictionary 
//
/*
dom7b5: 
    Big domiant: 
    x x 'o' 1 1 2 
    x x D Ab C F# 
    xx 1 b5 b7 3 
    Vivid Dominant 
    x x 6 7 7 8
    Ab D F# C
    b5 1 3 b7 
    x 11 12 11 13 x
    contains fret >12 
    4 5 4 5 x x 
    contains all 4 notes
    All the rest in vivi dominant
    contain all the same 4 notes 

dom7#5
    Big dominant: 
    1)x 5 8 5 7 6 
    D A# C F# A# 
    1 #5 b7 3 #5 
    2) 10 9 10 11 11 x 
       D F# C F# A#
       1 3  b7 3 #5  
    3) 5 8 5 7 6
       D F# C F# A#
       1 3 b7 3 #5 
    Vivid domiant : 
        1) x x 8 7 7 8 
           x x A# D F# C
           x x #5 1 3  b7
        2) x x 6 5 4 5 
           same notes 
        the rest are the same notes 

// D major notes:  D – E – F# – G – A – B – C# – D

dom7b9 
    Big dominant 
    10 x 10 11 10 11 
    D x C Gb A Eb 
    1 x b7 3 5 b9 
    all notes 

    x 5 4 5 4 x 
    D F# C Eb 
    1 3 b7 b9 
    no 5 

    C F# A Eb
    b7 3 5 b9
    no 1

    no 1 x5

    C Eb F#
    b7 b9 3 
    no 1,5 x4

dom7#9
x 5 4 5 6 x
x D F# C E# 
1 3 b7 #9

D F# C F
1 3 b7 #9

D F# C A E#
1 3 b7 5 #9 

F# C E#   x4 
3 b7 #9  

// D major notes:  D – E – F# – G – A – B – C# – D

aug 
    F# A# D F#
    3 #5 1 3
    F# A# D Bb
    3 #5 1 #5

    F# A# D x3 more 
    F# A# D x12 

minmaj7
    D A C# F A
    1 5 7 b3 5 

    F A C#  x8
    b3 5 7 

    D A C# F x3 
    1 5 7 b3 


*/


//////////////////////////////////////////////////
///////////////////////////////////////////////////
/*
FORMAT OF EXPORT CONST SPECIALALTEREDCHORDS :  

{
    48: [],
    49: [],
    ..
    59: []
}

-at 48: 

[
  {
    name: 'dom7b5',
    htmlName: null,
    intervals: [ 1, 3, 'b5', 'b7' ],
    integerNotation: [ 0, 4, 6, 10 ],
    voicings: [ [Array], [Array] ],
    integerVoicings: [ [Array], [Array] ],
    chords: [ [Object], [Object] ]
  },
  {
    name: 'dom7#5',
    htmlName: null,
    intervals: [ 1, 3, '#5', 'b7' ],
    integerNotation: [ 0, 4, 6, 10 ],
    voicings: [ [Array], [Array] ],
    integerVoicings: [ [Array], [Array] ],
    chords: [ [Object], [Object] ]
  },
  ....
  ...
]

-at index 0: 

{
  name: 'dom7b5',
  htmlName: null,
  intervals: [ 1, 3, 'b5', 'b7' ],
  integerNotation: [ 0, 4, 6, 10 ],
  voicings: [ [ 1, 3, 'b5', 'b7' ], [ 3, 'b5', 'b7' ] ],
  integerVoicings: [ [ 0, 4, 6, 10 ], [ 4, 6, 10 ] ],
  chords: [
    { integerVoicing: [Array], notes: [Array], chords: [Object] },
    { integerVoicing: [Array], notes: [Array], chords: [Object] }
  ]
}

-at "chords": 

[
  {
    integerVoicing: [ 0, 4, 6, 10 ],
    notes: [ 48, 52, 54, 58 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    integerVoicing: [ 4, 6, 10 ],
    notes: [ 52, 54, 58 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  }
]

-index 0 at "chords"

{
    "3": {}, "4": {}, "5": {}, "6": {}
}

-at "4": 

{
    "4sRoot": [[chordArray], [chordArray], [chordArray], ..],
    "4sRootInv1": [[chordArray], [chordArray], ....], 
    ....
    "4-2Inv4": [[chordArray], [chordArray], ...]
}

-where chordArray would consist of 'x', 'o', and integers 

[ 'x', 'x', 10, 11, 11, 'o' ]

*/
////////////////////////////////////////////////////
////////////////////////////////////////////////////


const specialAlteredChordsInfo = [
    {
        name: "dom7b5", htmlName: null, 
        intervals: [1,3,'b5','b7'], 
        integerNotation: [0,4,6,10],
        voicings: [
            [1,3,'b5','b7'],
            [3,'b5','b7'],
        ], 
        integerVoicings: [
            [0,4,6,10],
            [4,6,10],
        ]
    },
    {
        name: "dom7#5", htmlName: null, 
        intervals: [1,3,'#5','b7'], 
        integerNotation: [0,4,6,10],
        voicings: [
            [1,3,'#5','b7'],
            [3,'#5','b7'],
        ], 
        integerVoicings: [
            [0,4,8,10],
            [4,8,10], 
        ]
    },
    {
        name: "dom7b9", 
        htmlName: null, 
        intervals: [1,3,5,"b7","b9"],
        integerNotation: [0,4,7,10,13], 
        voicings: [
            [1,3,5,"b7","b9"],
            [3,5,"b7", "b9"], 
            [1,3, "b7", "b9"],
            [3,"b7","b9"]
        ], 
        integerVoicings: [
            [0,4,7,10,13],
            [4,7,10,13],
            [0,4,10,13],
            [4,10,13]
        ]
    },
    {
        name: "dom7#9", 
        htmlName: null, 
        intervals: [1,3,5, "b7", "#9"], 
        integerNotation: [0,4,7,10,15],
        voicings: [
            [1,3,5,"b7","#9"],
            [3,5,"b7", "#9"], 
            [1,3, "b7", "#9"],
            [3,"b7","#9"]
        ], 
        integerVoicings: [
            [0,4,7,10,15],
            [4,7,10,15],
            [0,4,10,15],
            [4,10,15],
        ]
    },
    {
        name: "aug",
        htmlName: null, 
        intervals: [1,3,"#5"], 
        integerNotation: [0,4,8],
        voicings: [
            [1,3,"#5"], 
        ], 
        integerVoicings: [
            [0,4,8]
        ]
    },
    {
        name: "minmaj7", 
        htmlName: null, 
        intervals: [1,"b3",5,7], 
        integerNotation: [0,3,7,11], 
        voicings: [
            [1, "b3", 5, 7], 
            ["b3", 5, 7],  
            [1, "b3", 7],
            ["b3", 7],  
        ],
        integerVoicings: [
            [0,3,7,11],
            [3,7,11],
            [0,3,11], 
            [3,11]
        ]
    }
]; 

//["minmaj7", "dom7b5", "dom7#5", "dom7b9", "dom7#9", 'aug'];

import { extendedGuitarChords } from "../extendedChords.mjs";
import { arrayOfChordArraysToFrets } from "../guitarLogic.mjs";



/*
 {
        name: "dom7b5", htmlName: null, 
        intervals: [1,3,'b5','b7'], 
        integerNotation: [0,4,6,10],
        voicings: [
            [1,3,'b5','b7'],
            [3,'b5','b7'],
        ], 
        integerVoicings: [
            [0,4,6,10],
            [4,6,10],
        ]
    },

    x x D Ab C F# 
    xx 1 b5 b7 3 

*/

//

//
/*
let notesArray = [62,66,68,72]; 
let dDom7b5 = extendedGuitarChords(notesArray); 

console.log(dDom7b5[5]); 

// [ 'x', 54, 56, 62, 66, 72 ],
// x F# G# D F# C

*/

const rootNotesOneOctave = [48,49,50,51,52,53,54,55,56,57,58,59];

//input: integerVoicing: [0,4,6]
//input: midiRoot: 48
//return: [48,52,52] which is the chord voicing 
function integersAndRootToMidi(integerVoicing, midiRoot){
    let chordVoicing = []; 
    integerVoicing.forEach( integer=> {
        chordVoicing.push(midiRoot + integer); 
    }); 
    return chordVoicing; 
}
/*
let voicing = [0,4,6]; 
let root = 50; 
let chordVoicing = integersAndRootToMidi(voicing, root); 
console.log(chordVoicing); 
*/

function constructSpecialChordsByRoot(){
    let specialChordsObj = {}; 
    rootNotesOneOctave.forEach( rootNote => {
        specialChordsObj[rootNote] = [];
    }); 

    for(const key in specialChordsObj){
        //console.log(key); 
        specialAlteredChordsInfo.forEach( chordInfo=> {
            let chordData = {...chordInfo, "chords": []};
            if(chordData["integerVoicings"].length == 1){
                let notes = integersAndRootToMidi(chordData["integerVoicings"][0], Number(key)); 
                let chordsObj = extendedGuitarChords(notes); 
                chordData["chords"].push(
                    {
                        integerVoicing: chordData["integerVoicings"][0],
                        notes: notes,
                        chords: chordsObj
                    }
                ); 

            } else {
                chordData["integerVoicings"].forEach( integerVoicing=> {
                    let notes = integersAndRootToMidi(integerVoicing, Number(key)); 
                    let chordsObj = extendedGuitarChords(notes); 
                    //console.log(integerVoicing); 
                    chordData["chords"].push( 
                        {
                            "integerVoicing": integerVoicing, 
                            notes: notes,
                            chords: chordsObj
                        }
                    ); 
                }); 
                specialChordsObj[key].push( 
                    chordData
                );
            }
            

        }); 
    }
    return specialChordsObj; 
}


function convertToFrets( specialChordsObj){
    //console.log(specialChordsObj); 
    for (const key in specialChordsObj){
        specialChordsObj[key].forEach( chordTypeObj => {
            chordTypeObj["chords"].forEach( chordObj => {
                for(const startString in chordObj["chords"]){
                    if(!(startString == "notes")){
                        let voicings = chordObj["chords"][startString]; 
                        //console.log(voicings); 
                        for(const voicingString in voicings){
                            //console.log(voicings[voicingString]); 
                            voicings[voicingString] = arrayOfChordArraysToFrets(voicings[voicingString]); 
                        }
                    }
                }
            }); 
        }); 
    }
    return specialChordsObj; 
}

export const specialAlteredChords = convertToFrets(constructSpecialChordsByRoot()); 

//let five9 = specialAlteredChords["59"][0]; 
//console.log(specialAlteredChords["48"][0]["chords"][0]["chords"]["4"]); 
//console.log(five9["chords"][0]["chords"]["5"][0]["chords"]);  

