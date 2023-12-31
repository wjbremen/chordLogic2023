import { chordPlayablity, allMajorKeys } from "./allChords.mjs";
import {allChordsAllKeys} from "./specialChords.mjs"; 
import * as fs from 'fs';

let chords = allChordsAllKeys; 

//1)remove unplayable chords

//2)update chord playability info 
//write chord playability info to json
    //change name of file.json and write

//3)remove duplicates 

//4)Write 
    //create json folder
    //write to allMajorKeys.json
    //write to specialKeys.json





fs.writeFile('allMajorKeys.json', JSON.stringify(chords), (error) => {
    if (error) throw error;
});