import * as fs from 'fs';
import allMajorKeyObjects from "../../Logic/jsonIntermediate/allMajorKeys.json" assert { type: "json" };


//1) Simple flatten for major keys 
//produce an array of chord arrays from array of major key Objects
function simpleFlattenMajorKeys(arrayOfMajorKeyObjects){
    //console.log(arrayOfMajorKeyObjects); 
    let returnArray = []; 
    arrayOfMajorKeyObjects.forEach( majorKeyObj => {
        for (const key in majorKeyObj){
            let category = key;  
            let keyRoot = majorKeyObj["keyRoot"];  
            if(key != "keyRoot"){
                for(const scaleDegree in majorKeyObj[key]){
                    majorKeyObj[key][scaleDegree].forEach(chordObj => {
                        let chordName = chordObj["name"]; 
                        let chordRoot = chordObj["chordRoot"]; 
                        for(const startString in chordObj["chords"]){
                            if(startString != "notes"){
                                let startStringObject = (chordObj["chords"][startString] );
                                for(const key in startStringObject) {
                                    //console.log("key ", key); 
                                    let voicingString = key; 
                                    let arrayOfChordArrays = startStringObject[key]; 
                                    //console.log("array of chord arrays : ", arrayOfChordArrays); 
                                    arrayOfChordArrays.forEach( chordArray => {
                                        let obj = {
                                            chordRoot: chordRoot, 
                                            chordName : chordName, 
                                            chord: chordArray, 
                                            voicingString : voicingString,
                                            category: category,
                                            keyRoot: keyRoot
                                        };
                                        returnArray.push(obj); 
                                        //console.log("pushing ", obj); 
                                    }); 
                                }
                            } 
                        }
                    }); 
                }
            }
        }
    }); 
    return returnArray; 
}

let simpleFlattenedMajorKeysJson = simpleFlattenMajorKeys(allMajorKeyObjects);

fs.writeFileSync('majorKeysFlatSimple.json', JSON.stringify(simpleFlattenedMajorKeysJson), (error) => {
    if (error) throw error;
});
