import 
{ 
    guitarChords,
    arrayOfChordArraysToFrets,
    removeChordsWithInternalMutes,
    getFretboardNotesObject
 } 
 from "./guitarLogic.mjs";

 const sharpNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
 const flatNotes = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]; 
 //open notes [6th,5th,4th,3rd,2nd,1st]
 const openNotes = ["E","A","D","G","B","E"]

 ////////////////////////////////////////////////
 //// 1) guitarChords will return an object as seen below
 /// Each chord array will consist of midi notes and 
 /// 'x' for mutes
 /// 2) calling midiToFrets(chordObject) will result 
 /// in arrays made up of fret numbers, "x" for mutes, 
 /// and 'o' for open string
 /// 3) calling fretsToNotes(chordObject,flatsOrSharps) 
 // with the chordObject from #2 will result in arrays
 // with 'x' for mutes and letters indicating musical 
 /// notes (D, D#, Db). flatsOrSharps argument will 
 /// determine wether notes are non-natural notes are
 /// displayed as a flat (Db) or a sharp (C#)
 /// 4)removeUnplayableChords(chordObject) requires the
 /// arrays to be fret numbers
 /// 5)removeInternalMutes and chordsSpanning should be 
 ///implemented on the front end, so will not be implemented
 /// here. 
 /// 6)fretsToNotes may eventually have to be moved to the front 
 /// end as well, but is useful here for testing
 ///
 /// KEY TAKEAWAY: CHORD OBJECT SHOULD BE MODIFIED IN THIS 
 // ORDER : guitarChords (to get initial object) ===> midiToFrets 
 /// (to get fret numbers) ===> removeUnplayableChords(chordObject)- 
 /// (requires arrays with fret numbers) ===> 
 /// fretsToNotes (to get note names)
 //////////////////////////////////////////////////////////


////////////////////////////////////////////////////
////////////////////////////////////////////////////
//// guitarChords([62,66,69]) ///////////////////
//// will return the following: /////////////////
///////////////////////////////////////////////////
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

////////////////////////////////////////////////////
///// this module should get chord objects and 
/////// and convert chord arrays from midi to frets
////// and remove unplayable chords 
/////////////////////////////////////////////////

//input: chord array consisting of fret numbers, 
//'x', and 'o'
// returns true or false
export function isUnplayableChord(chordArray){
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
    return !(playable); 
}

//remove unplayable chords
//input: chord object 
//{notes: [], 6s: {'chordtypeString': [chord], [chord],..}
// , 5s: {}, ...}
// input chords should contain fret numbers, 
// 'x' for mute, or 'o' for open note
// unplayableChords below will save the chords that are 
// eliminated for testing

/*
export let chordPlayablityInfo = {
    unplayableChords : [],
    playableChords: [],  
    unplayableChordsCount : 0,
    playableChordsCount: 0
}; 

export function removeUnplayableChords(chordObject, root, name){
    //return new object or modify object? -MODIFY
    
    //console.log(" root: " + root + " name: " + name); 
    Object.keys(chordObject).forEach( key => {
        if(!(key == "notes")){
            Object.keys(chordObject[key]).forEach( subkey => {
                let newChordArray = [];
                chordObject[key][subkey].forEach(chordArray => {
                     if(!(isUnplayableChord(chordArray))){
                        newChordArray.push(chordArray); 
                        chordPlayablityInfo.playableChords.push(
                            {
                                chord: chordArray, 
                                chordName: name, 
                                chordRoot: root
                            }
                            ); 
                        chordPlayablityInfo.playableChordsCount++; 
                     } else {
                        chordPlayablityInfo.unplayableChords.push(chordArray);
                        chordPlayablityInfo.unplayableChordsCount++; 
                     }
                });
                chordObject[key][subkey] = newChordArray;  
            }); 
        }
    });

}
*/ 

/*
let chordsObj = guitarChords([62,66,69]); 
midiToFrets(chordsObj);
removeUnplayableChords(chordsObj);
console.log("unplayable: ");  
console.log(unplayableChords); 
console.log(chordsObj);  
//removeUnplayableChords(chordsObj); 
//console.log(chordsObj); 
*/

//input: chord object {notes: [], 6s: {}, 5s: {}, ...}
export function midiToFrets(chordObject){
    let keys = Object.keys(chordObject); 
    keys.forEach(key => {
        if(!(key === "notes")){
            Object.keys(chordObject[key]).forEach(subkey => {
                //console.log(subkey); 
                chordObject[key][subkey] = arrayOfChordArraysToFrets(chordObject[key][subkey]); 
            });
        }
    }); 
     
}



////////////////////////////////////////////////
//// Below should be implemented on thefont end 
// as options: enable internal mutes, frets to notes
// frets to scale degrees, chords spanning only 
//3 frets or chords spanning only 4 frets 
/////////////////////////////////////////////////


//input: [[chord],[chord],..]
// chords will be frets from 6th string to 1st string
// [fret on 6th string, fret on 5th string, fret on 4th string, .....]
//fret can be number, "x", or "o"
//return: [[chord],[chord], [chord],....]
//where chord is ["A","C","A","G","x","G"]
function arrayOfChordArraysToNotes(arrayOfChordArrays,flatsOrSharps){
    let returnArray = []; 
    arrayOfChordArrays.forEach(chord => {
        let chordNoteArray = []; 
        chord.forEach((fretNote,i)=> {
            if(fretNote === 'x'){
                chordNoteArray.push("x"); 
            } else if(fretNote === "o"){
                chordNoteArray.push(openNotes[i]); 
            } else {
                //is fret number
                let openStringNote = openNotes[i];
                if(flatsOrSharps === "flats"){
                    let indexOfOpenStringNote = flatNotes.indexOf(openStringNote);
                    let newIndex = indexOfOpenStringNote + fretNote;
                    if(newIndex < flatNotes.length){
                        chordNoteArray.push(flatNotes[newIndex]);
                    } else {
                        chordNoteArray.push(flatNotes[newIndex-12]);
                    }
                } else {
                    let indexOfOpenStringNote = sharpNotes.indexOf(openStringNote);
                    let newIndex = indexOfOpenStringNote + fretNote;
                    if(newIndex < sharpNotes.length){
                        chordNoteArray.push(sharpNotes[newIndex]);
                    } else {
                        chordNoteArray.push(sharpNotes[newIndex-12]);
                    }
                }
            }
        });
        returnArray.push(chordNoteArray);
    });
    return returnArray; 
}

//for testing for now
//flatsOrSharps = "flats" or "sharps"
function fretsToNotes(chordObject, flatsOrSharps){
    let keys = Object.keys(chordObject); 
    keys.forEach(key => {
        if(!(key === "notes")){
            Object.keys(chordObject[key]).forEach(subkey => {
                //console.log(subkey); 
                chordObject[key][subkey] = arrayOfChordArraysToNotes(chordObject[key][subkey], flatsOrSharps); 
            });
        }
    });
}


///////////////////////////////////////////////
///// IMPLEMENT THESE ON THE FRONT END ///////
///////////////////////////////////////////////
//input: chord object {notes: [], 6s: {}, 5s: {}, ...}
function removeInternalMutes(chordObject){
    //IMPLEMENT ON FRONT END
}

//only chords spanning 3 frets or 4 frets 
function chordsSpanning(chordObject,maxFrets){
    //IMPLEMENT ON FRONT END 
}
////////////////////////////////////////////////
//////IMPLEMENT ABOVE ON FRONT END /////////////
///////////////////////////////////////////////



///guitarChords (to get initial object) ===> midiToFrets 
/// (to get fret numbers) ===> removeUnplayableChords(chordObject)- 
/// (requires arrays with fret numbers)
export function getChords(chordArray){
    let chordsObj = guitarChords(chordArray); 
    //midiToFrets(chordsObj);
    //removeUnplayableChords(chordsObj);
    return chordsObj;  
}


//console.log(JSON.stringify(guitarChords([62,66,69,73]),null, 2));

//D major 7
//let chordsObj = guitarChords([62,66,69,73,76]); 
//console.log(chordsObj); 
//let chords = chordsObj["4"]["4-1"];
//console.log(arrayOfChordArraysToFrets(chords)); 

/*
let chordsObj = guitarChords([62,66,69]); 
midiToFrets(chordsObj); 
console.log('chords [6] [6-1] :'); 
console.log(chordsObj["6"]["6-2"]); 
fretsToNotes(chordsObj); 
console.log(chordsObj["6"]["6-2"]); 

*/ 

