 ////////////////////////////////////////////////////
////////// NOTES ON THE FOLLOWING ALGORITHMS////////
//minimum frequency of 6 string guitar is 82 hz,
//which corresponds to E2 which is low E on guitar
//this midi note is 40

//frequency of high E on 1st string is 659hz which 
//is 12th fret on high e string 
//midi note 76

//so reasonable range of guitar is 
//midi note 40-76

//find the midi notes in each major key starting from 
//note 40 to 76
//produce an object of all keys with all the midi note 
//roots in this range and the midi notes in the key
// { 41: [41,44,47,48,49,52,55,59],
// 42: [42, 45,48,50,53,56,60],
// etc through 76
//}
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////
function sixthStringRoot(notesArray){
    
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
        }
    }

   
        return validChords; 
    

}

function fifthStringRoot(notesArray){
    
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

function fourthStringRoot(notesArray){
    
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

function thirdStringRoot(notesArray){
    
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
function inversion(notesArray, startingString, inversionType){
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
        return (sixthStringRoot(invertedNotesArray));
    } else if (startingString === 5){
        return (fifthStringRoot(invertedNotesArray)); 
    } else if (startingString === 4){
        return (fourthStringRoot(invertedNotesArray));
    } else if (startingString === 3){
        return (thirdStringRoot(invertedNotesArray)); 
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
function consecutiveNoteChords(startingString, endingString, notesArray){
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
function inversionsOfConsecutiveNoteChords(startingString, endingString,notesArray,inversionType){
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
    return (consecutiveNoteChords(startingString,endingString,invertedNotesArray)); 
}

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
function guitarChords(notesArray){
    let chordObject = {
        "notes": notesArray,
        "6": {
            "6sRoot": sixthStringRoot(notesArray),
            "6sRootInv1": inversion(notesArray,6,"first"),
            "6sRootInv2": inversion(notesArray,6,"second"),
            "6-1": consecutiveNoteChords(6,1,notesArray),
            "6-1inv1": inversionsOfConsecutiveNoteChords(6,1,notesArray,"first"),
            "6-1inv2": inversionsOfConsecutiveNoteChords(6,1,notesArray,"second"),
            "6-2": consecutiveNoteChords(6,2,notesArray),
            "6-2inv1": inversionsOfConsecutiveNoteChords(6,2,notesArray,"first"),
            "6-2inv2": inversionsOfConsecutiveNoteChords(6,2,notesArray,"second"),
            "6-3": consecutiveNoteChords(6,3,notesArray),
            "6-3inv1": inversionsOfConsecutiveNoteChords(6,3,notesArray,"first"),
            "6-3inv2": inversionsOfConsecutiveNoteChords(6,3,notesArray,"second"),
            "6-4": consecutiveNoteChords(6,4,notesArray),
            "6-4inv1": inversionsOfConsecutiveNoteChords(6,4,notesArray,"first"),
            "6-4inv2": inversionsOfConsecutiveNoteChords(6,4,notesArray,"second")
        },
        "5": {
            "5sRoot": fifthStringRoot(notesArray),
            "5sRootInv1": inversion(notesArray,5,"first"),
            "5sRootInv2": inversion(notesArray,5,"second"),
            "5-1": consecutiveNoteChords(5,1,notesArray),
            "5-1inv1": inversionsOfConsecutiveNoteChords(5,1,notesArray,"first"),
            "5-1inv2": inversionsOfConsecutiveNoteChords(5,1,notesArray,"second"),
            "5-2": consecutiveNoteChords(5,2,notesArray),
            "5-2inv1": inversionsOfConsecutiveNoteChords(5,2,notesArray,"first"),
            "5-2inv2": inversionsOfConsecutiveNoteChords(5,2,notesArray,"second"),
            "5-3": consecutiveNoteChords(5,3,notesArray),
            "5-3inv1": inversionsOfConsecutiveNoteChords(5,3,notesArray,"first"),
            "5-3inv2": inversionsOfConsecutiveNoteChords(5,3,notesArray,"second"),
        },
        "4": {
            "4sRoot": fourthStringRoot(notesArray),
            "4sRootInv1": inversion(notesArray,4,"first"),
            "4sRootInv2": inversion(notesArray,4,"second"),
            "4-1": consecutiveNoteChords(4,1,notesArray),
            "4-1inv1": inversionsOfConsecutiveNoteChords(4,1,notesArray,"first"),
            "4-1inv2": inversionsOfConsecutiveNoteChords(4,1,notesArray,"second"),
            "4-2": consecutiveNoteChords(4,2,notesArray),
            "4-2inv1": inversionsOfConsecutiveNoteChords(4,2,notesArray,"first"),
            "4-2inv2": inversionsOfConsecutiveNoteChords(4,2,notesArray,"second"),
        },
        "3": {
            "3sRoot": thirdStringRoot(notesArray),
            "3sRootInv1": inversion(notesArray,3,"first"),
            "3sRootInv2": inversion(notesArray,3,"second"),
            "3-1": consecutiveNoteChords(3,1,notesArray),
            "3-1inv1": inversionsOfConsecutiveNoteChords(3,1,notesArray,"first"),
            "3-1inv2": inversionsOfConsecutiveNoteChords(3,1,notesArray,"second"),
        }
    }; 
    return chordObject; 
}

export {guitarChords, arrayOfChordArraysToFrets, removeChordsWithInternalMutes, getFretboardNotesObject};

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




