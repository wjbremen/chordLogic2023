
import { getChords } from "./guitarChords.mjs";

///////////////////////////////////////////////////////////
///this module will export allMajorKeys() which will return 
///an array of major key objects for each major key 
// 
//  {
//   key: 48, 
//   chords: {
//               scaleDegree1: [],
//               scaleDegree2: [],
//                .....
//            } 
//  }  
/*
    scaleDegree1: [
        {chordObj},{chordObj},{chordObj}, ......
    ]

    .....................
    ChordObject

    {
        notes: [62,66,69,72],
        name: "C major",
        htmlname: <p>C <sup>maj</sup> </p>  (only an example)
        "6s": {
            "6sroot" : [[chord],[chord], ...],
            "6srootinv1": .........
        },
        "5s": {
            .....
        },
        ......
        "3s": {
            ....
        }
    }
*/
/// this module will add all chords with 3 or 4 notes
/// the next module will add extended chords to each key 
//object since those will have special conditions
// like dropping certain notes
/////////////////////////////////////////////////////////

//48 is C, 59 is B
const majorKeyRoots = [48,49,50,51,52,53,54,55,56,57,58,59]; 

function getNotesForEveryMajorKey(){
    let notesForAllMajorKeys = {}; 
    majorKeyRoots.forEach(root=> {
        //for each root, construct an array of midi notes
        //for the scale. the key will be the root of the 
        //scale (key)
        /*
            {
                48: [48,50,52,53,55,57,59],
                49: [....],
                .....
                59: [.....]
            }
        */

        notesForAllMajorKeys[root] =
        [
            root,
            root+2,
            root+4,
            root+5,
            root+7,
            root+9,
            root+11
        ];
    });
    return notesForAllMajorKeys;
}

export const notesForAllMajorKeys = getNotesForEveryMajorKey(); 



const chords3And4notes = {
    1: [
        {notes: [1,3,5],name: "M", htmlName: null},
        {notes: [1,3,5,7],name: "M7", htmlName: null},
        {notes: [1,3,5,9],name: "add2", htmlName: null},
        {notes: [1,3,5,11],name: "add4", htmlName: null},
        {notes: [1,3,5,13],name: "add6", htmlName: null},
        {notes: [1,2,5],name: "sus2", htmlName: null},
        {notes: [1,4,5],name: "sus4", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,9,13],name: "5add6/9", htmlName: null},
        {notes: [1,5,13],name: "5add6", htmlName: null},
        {notes: [1,5,9],name: "5add9", htmlName: null},
    ],
    2: [
        {notes: [1,"b3",5],name: "m", htmlName: null},
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null},
        {notes: [1,"b3",5,9],name: "madd2", htmlName: null},
        {notes: [1,"b3",5,11],name: "madd4", htmlName: null},
        {notes: [1,"b3",5,13],name: "madd6", htmlName: null},
        {notes: [1,2,5],name: "sus2", htmlName: null},
        {notes: [1,4,5],name: "sus4", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,9,13],name: "5add6/9", htmlName: null},
        {notes: [1,5,13],name: "5add6", htmlName: null},
        {notes: [1,5,9],name: "5add9", htmlName: null},
    ],
    3: [
        {notes: [1,"b3",5],name: "m", htmlName: null},
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null},
        {notes: [1,"b3",5,"b9"],name: "maddb2", htmlName: null},
        {notes: [1,"b3",5,11],name: "madd4", htmlName: null},
        {notes: [1,"b3",5,"b13"],name: "maddb6", htmlName: null},
        {notes: [1,4,5],name: "sus4", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,"b9","b13"],name: "5addb6/b9", htmlName: null},
        {notes: [1,5,"b13"],name: "5addb6", htmlName: null},
        {notes: [1,5,"b9"],name: "5addb9", htmlName: null},
    ],
    4: [
        {notes: [1,3,5],name: "M", htmlName: null},
        {notes: [1,3,5,7],name: "M7", htmlName: null},
        {notes: [1,3,5,9],name: "add2", htmlName: null},
        {notes: [1,3,5,"#11"],name: "add#4", htmlName: null},
        {notes: [1,3,5,13],name: "add6", htmlName: null},
        {notes: [1,2,5],name: "sus2", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,9,13],name: "5add6/9", htmlName: null},
        {notes: [1,5,13],name: "5add6", htmlName: null},
        {notes: [1,5,9],name: "5add9", htmlName: null},
    ],
    5: [
        {notes: [1,3,5],name: "M", htmlName: null},
        {notes: [1,3,5,"b7"],name: "7", htmlName: null},
        {notes: [1,3,5,9],name: "add2", htmlName: null},
        {notes: [1,3,5,11],name: "add4", htmlName: null},
        {notes: [1,3,5,13],name: "add6", htmlName: null},
        {notes: [1,2,5],name: "sus2", htmlName: null},
        {notes: [1,4,5],name: "sus4", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,9,13],name: "5add6/9", htmlName: null},
        {notes: [1,5,13],name: "5add6", htmlName: null},
        {notes: [1,5,9],name: "5add9", htmlName: null},
    ],
    6: [
        {notes: [1,"b3",5],name: "m", htmlName: null},
        {notes: [1,"b3",5,"b7"],name: "m7", htmlName: null},
        {notes: [1,"b3",5,9],name: "madd2", htmlName: null},
        {notes: [1,"b3",5,11],name: "madd4", htmlName: null},
        {notes: [1,"b3",5,"b13"],name: "maddb6", htmlName: null},
        {notes: [1,2,5],name: "sus2", htmlName: null},
        {notes: [1,4,5],name: "sus4", htmlName: null},
        {notes: [1,5],name: "5", htmlName: null},
        {notes: [1,5,9,"b13"],name: "5addb6/9", htmlName: null},
        {notes: [1,5,9],name: "5add9", htmlName: null},
        {notes: [1,5,"b13"],name: "5addb6", htmlName: null},
    ],
    7: [
        {notes: [1,"b3","b5"],name: "dim", htmlName: null},
        {notes: [1,"b3","b5","b7"],name: "halfdim", htmlName: null},
        {notes: [1,"b3","b5","b9"],name: "dimaddb2", htmlName: null},
        {notes: [1,"b3","b5",11],name: "dimadd4", htmlName: null},
        {notes: [1,"b3","b5","b13"],name: "dimaddb6", htmlName: null},
        {notes: [1,4,"b5"],name: "sus4dim5", htmlName: null},
        {notes: [1,"b5"],name: "b5", htmlName: null},
        {notes: [1,"b5","b9","b13"],name: "dim5addb6/b9", htmlName: null},
        {notes: [1,"b5","b13"],name: "dim5addb6", htmlName: null},
        {notes: [1,"b5","b9"],name: "dim5addb9", htmlName: null},
    ]
    
};

function constructChordObject(note,chordInfoObj){
    let chordObj = {
        chordRoot : note,
        name: chordInfoObj["name"],
        htmlName: chordInfoObj["htmlName"]
    }; 

    //notesForAllMajorKeys has keys 48-59
    if(note < 48){
        let notInRange = true; 
        do{
            note = note + 12; 
            if (note >= 48 && note <= 59){
                notInRange = false; 
            }
        } while (notInRange);
    } else if (note > 59){
        let notInRange = true; 
        do{
            note = note - 12; 
            if (note <= 59 && note >= 48){
                notInRange = false; 
            }
        } while (notInRange);
    }
    let parentScale = notesForAllMajorKeys[note]; 
    //console.log("parent scale :" + parentScale); 
    let chordMidiNotes = [];

    chordInfoObj["notes"].forEach(note => {
        //console.log("note: " + note);  
        if(typeof note === "number"){
            //console.log("note is : " + typeof note); 
            if(note > 7){
                //transform to a number between 1 and 7
                chordMidiNotes.push(parentScale[note-8]);
            } else {
                chordMidiNotes.push(parentScale[note-1]); 
            }
        } else {
            //console.log("note is : " + typeof note); 
            //is string "b5", "#11"
            if(note.charAt(0) === "b"){
                let num = Number(note.slice(1));
                //console.log("num is :" + num + " : " + typeof num); 
                if(num > 7){
                    chordMidiNotes.push(parentScale[num - 8] -1);
                } else {
                    chordMidiNotes.push(parentScale[num - 1] -1);
                }
            } else {
                //is #
                let num = Number(note.slice(1));
                //console.log("num is :" + num + " : " + typeof num); 
                if(num > 7){
                    chordMidiNotes.push(parentScale[num - 8] + 1);
                } else {
                    chordMidiNotes.push(parentScale[num - 1] + 1);
                }
            }
        }
    });

    //console.log("chord midi notes : " + chordMidiNotes); 
    chordObj["notes"] = chordMidiNotes;
    chordObj["chords"] = getChords(chordMidiNotes);  

    return chordObj; 
}

export function constructMajorKeyObject(root){
    let majorKeyObject = {
        keyRoot: root, 
        chords: {
            "scaleDegree1": [],
            "scaleDegree2": [],
            "scaleDegree3": [], 
            "scaleDegree4": [], 
            "scaleDegree5": [],
            "scaleDegree6": [],
            "scaleDegree7": [], 
            
        }
    }; 

    //get notes for this major key
    let notesInKey = notesForAllMajorKeys[root];
    notesInKey.forEach((note,i)=> {
        let scaleDegree = i+1; 
        let chordsForScaleDegree = chords3And4notes[scaleDegree];
        chordsForScaleDegree.forEach(chordObj=> {
            majorKeyObject["chords"]["scaleDegree" + scaleDegree].push(constructChordObject(note,chordObj));  
        }); 
    });

    return majorKeyObject; 
}


let majorKeyObject = constructMajorKeyObject(48); 
//console.log(majorKeyObject["chords"]["scaleDegree3"]); 

export function allMajorKeys(){
    let allMajorKeyObjects = []; 
    majorKeyRoots.forEach(root=> {
        
        allMajorKeyObjects.push(constructMajorKeyObject(root)); 
    }); 
    return allMajorKeyObjects; 
}

//let keys = allMajorKeys(); 

//console.log(keys);
//console.log(getChords([48,52,55]));



//console.log(getNotesForEveryMajorKey()); 


//input: chord array [62,65,70,71]
//return: [chordNameString, chordNamehtml]
// eg ["CM7", "<p>C<sup>7</sup></p>"]
function getChordName(chordArray){

}

/*

let allMajorKeyObjects = allMajorKeys(); 
//console.log(allMajorKeyObjects); 
let someKey = allMajorKeyObjects[0]; 
//console.log(someKey); 
let someScaleDegree = someKey["chords"]["scaleDegree1"]; 
//console.log(someScaleDegree); 
someScaleDegree.push(getChords([62,66,69])); //
console.log(someScaleDegree); 
let someObj = someScaleDegree[0]; 
//console.log(someObj); 
someObj["name"] = "C major"; 
//console.log(someObj);
console.log(Object.keys(someObj)); 
 
*/