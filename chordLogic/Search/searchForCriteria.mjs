import chords from "./jsonFlattened/majorKeysFlatSimple.json" assert { type: "json" };

/*
    these are the keys in majorKeysFlatSimple.json
    {
    "chordRoot":48,
    "chordName":"M",
    "chord":["x","x","x",5,5,3],
    "voicingString":"3sRoot"
    }
*/

function searchMajorKeysJson(criteria){
    const result = chords.filter( chordObj => {
        if(chordObj["chordRoot"] == criteria["chordRoot"]
            && chordObj["chordName"] == criteria["chordName"] 
        ){
            if( chordObj["chord"][0] == criteria["chord"][0]
                && chordObj["chord"][1] == criteria["chord"][1]
                && chordObj["chord"][2] == criteria["chord"][2]
                && chordObj["chord"][3] == criteria["chord"][3]
                && chordObj["chord"][4] == criteria["chord"][4]
                && chordObj["chord"][5] == criteria["chord"][5]
            ){
                return true; 
            }
        }
    }); 
    return result; 
}

let result = searchMajorKeysJson(
    {
        "chordRoot" : 59, 
        "chordName" : "m7", 
        "chord" : [10,12,12,11,10,10]
    }
);

console.log(result); 