import { chords } from "./subchords.mjs";

let allChordsAllKeys = chords; 

/*
special chords to add :  
    "minmaj7", 
    "dom7b5", 
    "dom7#5", 
    "dom7b9", 
    "dom7#9", 
    'aug', 
*/ 
allChordsAllKeys.forEach( majorKeyObj => {
    majorKeyObj["specialChords"] = {}; 
});

export {allChordsAllKeys}; 


