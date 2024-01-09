/*
import majorKeys from '../jsonOutput/allMajorKeys.json' assert { type: 'json' };
import specialAltered from '../jsonOutput/specialAlteredChords.json' assert { type: 'json' };
import chordCounts from '../jsonOutput/chordPlayability/chordCounts.json' assert { type: 'json' };
import infoChords from '../jsonOutput/chordPlayability/infoChords.json' assert { type: 'json' };
import infoExtended from '../jsonOutput/chordPlayability/infoExtended.json' assert { type: 'json' };
import infoSpecialChords from '../jsonOutput/chordPlayability/infoSpecialChords.json' assert { type: 'json' };
import infoSubchords from '../jsonOutput/chordPlayability/infoSubchords.json' assert { type: 'json' };
import playableChordsFlat from '../jsonOutput/chordPlayability/playableChordsFlat.json' assert { type: 'json' };
import unplayableChordsFlat from '../jsonOutput/chordPlayability/unplayableChordsFlat.json' assert { type: 'json' };
*/

import * as fs from 'fs';

import inquirer from "inquirer";





/*
inquirer
.prompt([
    {
        type: "input",
        name: "file",
        message: "select file: 1: allMajorKeys.json, 2: specialAlteredChords.json: ", 
         
    }
]).then((answers)=> {
    switch( answers["file"] ){
        case 1: 

            break;
        case 2: 

            break; 
    } 
}); 
*/
/*


inquirer
  .prompt([
    {type: "input", name: "continue", message: "Program ready \n Hit enter to continue \n :"}
  ])
  .then((answers) => {
        inquirer
        .prompt([
            {type: "input", 
            name: "file", 
            message: "select file: \n 1) allMajorKeys.json \n 2)specialAlteredChords.json \n 3) chordCounts \n 4)infoChords \n 5)infoExtended \n 6)infoSpecialChords \n 7)infoSubChords \n 8)playableChordsFlat \n 9)unplayableChordsFlat \n : "
            }
        ])
        .then((answers) => {
          //console.log(answers["file"])
            switch(Number(answers["file"])){
              case 1: 
                console.log(majorKeys); 
                break; 
                case 2: 
                console.log(specialAltered); 
                break; 
                case 3: 
                console.log(chordCounts); 
                break; 
                case 4: 
                console.log(infoChords); 
                break; 
                case 5: 
                console.log(infoExtended); 
                break; 
                case 6: 
                console.log(infoSpecialChords); 
                break; 
                case 7: 
                console.log(infoSubchords); 
                break; 
                case 8: 
                //console.log(playableChordsFlat); 
                for(let i = 0; i < 1000 ; i++){
                  console.log(playableChordsFlat[i+5000]); 
                } 
                break; 
                case 9: 
                console.log(unplayableChordsFlat); 
                break; 
                default: 
                  console.log("invalid selection"); 
            }
        });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  */


//function inputTo
//let input = "[0][chords]"; 

///console.log(majorKeys["0"]); 

/*
inquirer
.prompt([
  {
    type: "input", 
    name: "num", 
    message: "select number 1-9", 
  }
]).then((answers) => {
  console.log(answers["num"]);
}); 
*/

function display( inputs, obj, objDisplayName){
   
  if(inputs[inputs.length - 1] == "b"){
    inputs.splice(inputs.length - 2,
      2);
  } else if(inputs[inputs.length -1] == "q"){
    process.exit(); 
  }

  //let dataToDisplay = obj;
  switch(inputs.length){
    case 0: 
      console.log(obj);     
      break; 
    case 1: 
      console.log(obj[inputs[0]]);
      break; 
      case 2: 
      console.log(obj[inputs[0]][inputs[1]]);
      break;
      case 3: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]]);
      break;
      case 4: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]]);
      break;
      case 5: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]]);
      break;
      case 6 : 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]]);
      break;
      case 7: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]]);
      break;
      case 8: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]]);
      break;
      case 9: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]][inputs[8]]);
      break;
      case 10: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]][inputs[8]][inputs[9]]);
      break; 
      case 11: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]][inputs[8]][inputs[9]][inputs[10]]);
      break; 
      case 12: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]][inputs[8]][inputs[9]][inputs[10]][inputs[11]]);
      break; 
      case 13: 
      console.log(obj[inputs[0]][inputs[1]][inputs[2]][inputs[3]][inputs[4]][inputs[5]][inputs[6]][inputs[7]][inputs[8]][inputs[9]][inputs[10]][inputs[11]][inputs[12]]);
      break;
      default: 
  }

   
  console.log("Currently at : ", objDisplayName, inputs); 

  //return inputs 
  return {inp : inputs, ob:  obj} ; 
}

function runProgram (){
  let obj = null; 
  let objDisplayName = ""; 

  inquirer
  .prompt([
    {
      type: "input", 
      name: "file", 
      message: "select file : \n " +
      "1) allMajorKeys \n" +
      "2) specialAlteredChords \n" +
      "3) chordCounts \n " +
      "4) infoChords \n " +
      "5) infoExtended \n " + 
      "6) infoSpecialChords \n " +
      "7) infoSubChords \n " + 
      "8) playableChordsFlat \n " + 
      "9) unplayableChordsFlat \n " 

    }
  ]).then ((answers) => {

    //console.log("file selected : " , answers["file"]); 
          switch(Number(answers["file"])){
            case 1: 
              obj = fs.readFileSync('../jsonOutput/allMajorKeys.json');
              obj = JSON.parse(obj); 
              objDisplayName = "majorKeys";
              break; 
            case 2: 
              obj = fs.readFileSync('../jsonOutput/specialAlteredChords.json');
              obj = JSON.parse(obj);
              objDisplayName = "specialAltered";
              break; 
            case 3: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/chordCounts.json');
              obj = JSON.parse(obj);
              objDisplayName = "chordCounts";
              break;
            case 4: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/infoChords.json');
              obj = JSON.parse(obj);
              objDisplayName = "infoChords";
              break;
            case 5: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/infoExtended.json');
              obj = JSON.parse(obj);
              objDisplayName = "infoExtended";
              break;
            case 6: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/infoSpecialChords.json');
              obj = JSON.parse(obj);
              objDisplayName = "infoSpecialChords";
              break;
            case 7: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/infoSubchords.json');
              obj = JSON.parse(obj);
              objDisplayName = "infoSubChords";
              break;
            case 8: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/playableChordsFlat.json');
              obj = JSON.parse(obj); 
              objDisplayName = "playableChordsFlat";
              break;
            case 9: 
              obj = fs.readFileSync('../jsonOutput/chordPlayability/unplayableChordsFlat.json');
              obj = JSON.parse(obj);
              objDisplayName = "unplayableChordsFlat";
              break;
            default: 

          }

          console.log(obj); 

          function inquire( inputs, obj, objDisplayName ){
            let currentInputs = inputs; 
            inquirer
            .prompt([
              {
                type: "input", 
                name: "key", 
                message: "select next index/key, b for back, or q for quit ", 
              }
            ]).then((answers) => {

              currentInputs.push( answers["key"]); 
              //console.log(currentInputs);
              let returns  = display( currentInputs, obj, objDisplayName); 
              currentInputs = returns["inp"]; 
              obj = returns["ob"]; 
              inquire( currentInputs, obj, objDisplayName); 
            }); 
          }
        
        inquire([], obj, objDisplayName); 
  }); 

  

}

runProgram(); 