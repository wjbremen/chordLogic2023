import { chordPlayablity, allMajorKeys } from "./Logic/allChords.mjs";
import {allChordsAllKeys} from "./Logic/specialChords.mjs"; 
import * as fs from 'fs';

let chords = allChordsAllKeys; 

//console.log(allMajorKeys[0]["chords"]["scaleDegree1"]); 
console.log(chords); 

fs.writeFile('allMajorKeys.json', JSON.stringify(chords), (error) => {
    if (error) throw error;
});