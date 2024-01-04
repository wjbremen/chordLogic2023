import { chords } from "./scripts/subchords.mjs";
import { specialKeyObjects } from "./scripts/specialKeys.mjs";
import { specialAlteredChords } from "./scripts/specialChords.mjs";
import * as fs from 'fs';



//1) generate major keys (including extended and subchords)
//2) generate special keys
//3) generate special/altered chords
//4) write each to appropriate file in jsonIntermediate 


//1)
fs.writeFile('jsonIntermediate/allMajorKeys.json', JSON.stringify(chords), (error) => {
    if (error) throw error;
});

//2)
fs.writeFile('jsonIntermediate/specialKeys.json', JSON.stringify(specialKeyObjects), (error) => {
    if (error) throw error;
});

//3) 
fs.writeFile('jsonIntermediate/specialAndAlteredChords.json', JSON.stringify(specialAlteredChords), (error) => {
    if (error) throw error;
});