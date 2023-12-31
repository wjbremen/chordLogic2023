/////////////////////////////////////////////////
Information about the scripts in the logic folder
/////////////////////////////////////////////////

/////////////////////////////////////////////////
-----guitarLogic.mjs exports function guitarChords(notesArray) 


function guitarChords(notesArray){
    let chordObject = {
        "notes": notesArray,
        "6": {
            "6sRoot": sixthStringRoot(notesArray),
            "6sRootInv1": inversion(notesArray,6,"first"),
            "6sRootInv2": inversion(notesArray,6,"second"),
            "6sRootInv3": inversion(notesArray,6,"third"),
            "6-1": consecutiveNoteChords(6,1,notesArray),
            "6-1inv1": inversionsOfConsecutiveNoteChords(6,1,notesArray,"first"),
            "6-1inv2": inversionsOfConsecutiveNoteChords(6,1,notesArray,"second"),
            "6-1inv3": inversionsOfConsecutiveNoteChords(6,1,notesArray,"third"),
            "6-2": consecutiveNoteChords(6,2,notesArray),
            "6-2inv1": inversionsOfConsecutiveNoteChords(6,2,notesArray,"first"),
            "6-2inv2": inversionsOfConsecutiveNoteChords(6,2,notesArray,"second"),
            "6-2inv3": inversionsOfConsecutiveNoteChords(6,2,notesArray,"third"),
            "6-3": consecutiveNoteChords(6,3,notesArray),
            "6-3inv1": inversionsOfConsecutiveNoteChords(6,3,notesArray,"first"),
            "6-3inv2": inversionsOfConsecutiveNoteChords(6,3,notesArray,"second"),
            "6-3inv3": inversionsOfConsecutiveNoteChords(6,3,notesArray,"third"),
            "6-4": consecutiveNoteChords(6,4,notesArray),
            "6-4inv1": inversionsOfConsecutiveNoteChords(6,4,notesArray,"first"),
            "6-4inv2": inversionsOfConsecutiveNoteChords(6,4,notesArray,"second"),
            "6-4inv3": inversionsOfConsecutiveNoteChords(6,4,notesArray,"third")
        },
        "5": {
            "5sRoot": fifthStringRoot(notesArray),
            "5sRootInv1": inversion(notesArray,5,"first"),
            "5sRootInv2": inversion(notesArray,5,"second"),
            "5sRootInv3": inversion(notesArray,5,"third"),
            "5-1": consecutiveNoteChords(5,1,notesArray),
            "5-1inv1": inversionsOfConsecutiveNoteChords(5,1,notesArray,"first"),
            "5-1inv2": inversionsOfConsecutiveNoteChords(5,1,notesArray,"second"),
            "5-1inv3": inversionsOfConsecutiveNoteChords(5,1,notesArray,"third"),
            "5-2": consecutiveNoteChords(5,2,notesArray),
            "5-2inv1": inversionsOfConsecutiveNoteChords(5,2,notesArray,"first"),
            "5-2inv2": inversionsOfConsecutiveNoteChords(5,2,notesArray,"second"),
            "5-2inv3": inversionsOfConsecutiveNoteChords(5,2,notesArray,"third"),
            "5-3": consecutiveNoteChords(5,3,notesArray),
            "5-3inv1": inversionsOfConsecutiveNoteChords(5,3,notesArray,"first"),
            "5-3inv2": inversionsOfConsecutiveNoteChords(5,3,notesArray,"second"),
            "5-3inv3": inversionsOfConsecutiveNoteChords(5,3,notesArray,"third"),
        },
        "4": {
            "4sRoot": fourthStringRoot(notesArray),
            "4sRootInv1": inversion(notesArray,4,"first"),
            "4sRootInv2": inversion(notesArray,4,"second"),
            "4sRootInv3": inversion(notesArray,4,"third"),
            "4-1": consecutiveNoteChords(4,1,notesArray),
            "4-1inv1": inversionsOfConsecutiveNoteChords(4,1,notesArray,"first"),
            "4-1inv2": inversionsOfConsecutiveNoteChords(4,1,notesArray,"second"),
            "4-1inv3": inversionsOfConsecutiveNoteChords(4,1,notesArray,"third"),
            "4-2": consecutiveNoteChords(4,2,notesArray),
            "4-2inv1": inversionsOfConsecutiveNoteChords(4,2,notesArray,"first"),
            "4-2inv2": inversionsOfConsecutiveNoteChords(4,2,notesArray,"second"),
            "4-2inv3": inversionsOfConsecutiveNoteChords(4,2,notesArray,"third"),
        },
        "3": {
            "3sRoot": thirdStringRoot(notesArray),
            "3sRootInv1": inversion(notesArray,3,"first"),
            "3sRootInv2": inversion(notesArray,3,"second"),
            "3sRootInv3": inversion(notesArray,3,"third"),
            "3-1": consecutiveNoteChords(3,1,notesArray),
            "3-1inv1": inversionsOfConsecutiveNoteChords(3,1,notesArray,"first"),
            "3-1inv2": inversionsOfConsecutiveNoteChords(3,1,notesArray,"second"),
            "3-1inv3": inversionsOfConsecutiveNoteChords(3,1,notesArray,"third"),
        }
    }; 
    return chordObject; 
}

/////////////////////////////////////////////////
------ calling guitarChords([60,64,67]) returns : 

{
  '3': {
    '3sRoot': [ [Array], [Array] ],
    '3sRootInv1': [ [Array] ],
    '3sRootInv2': [ [Array], [Array] ],
    '3sRootInv3': [ [Array], [Array] ],
    '3-1': [ [Array], [Array] ],
    '3-1inv1': [ [Array] ],
    '3-1inv2': [ [Array], [Array] ],
    '3-1inv3': [ [Array], [Array] ]
  },
  '4': {
    '4sRoot': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    '4sRootInv1': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '4sRootInv2': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    '4sRootInv3': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    '4-1': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '4-1inv1': [ [Array], [Array], [Array], [Array] ],
    '4-1inv2': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '4-1inv3': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '4-2': [ [Array] ],
    '4-2inv1': [ [Array] ],
    '4-2inv2': [ [Array] ],
    '4-2inv3': [ [Array] ]
  },
  '5': {
    '5sRoot': [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array]
    ],
    '5sRootInv1': [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array]
    ],
    '5sRootInv2': [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    '5sRootInv3': [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array]
    ],
    '5-1': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    '5-1inv1': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '5-1inv2': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '5-1inv3': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    '5-2': [ [Array], [Array], [Array], [Array] ],
    '5-2inv1': [ [Array], [Array], [Array], [Array] ],
    '5-2inv2': [ [Array] ],
    '5-2inv3': [ [Array], [Array], [Array], [Array] ],
    '5-3': [ [Array] ],
    '5-3inv1': [ [Array], [Array] ],
    '5-3inv2': [ [Array] ],
    '5-3inv3': [ [Array] ]
  },
  '6': {
    '6sRoot': [
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array],
      ... 62 more items
    ],
    '6sRootInv1': [
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array],
      ... 186 more items
    ],
    '6sRootInv2': [
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array]
    ],
    '6sRootInv3': [
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array],
      ... 62 more items
    ],
    '6-1': [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array]
    ],
    '6-1inv1': [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array]
    ],
    '6-1inv2': [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    '6-1inv3': [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array]
    ],
    '6-2': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '6-2inv1': [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    '6-2inv2': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '6-2inv3': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '6-3': [ [Array], [Array], [Array], [Array], [Array] ],
    '6-3inv1': [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    '6-3inv2': [ [Array], [Array], [Array] ],
    '6-3inv3': [ [Array], [Array], [Array], [Array], [Array] ],
    '6-4': [ [Array] ],
    '6-4inv1': [ [Array], [Array], [Array] ],
    '6-4inv2': [ [Array] ],
    '6-4inv3': [ [Array] ]
  },
  notes: [ 60, 64, 67 ]
}

/////////////////////////////////////////////////
------ let chords = guitarChords([60,64,67]); 
        console.log(chords["5"]);  
        results in the following : 

{
  '5sRoot': [
    [ 'x', 48, 52, 60, 60, 67 ],
    [ 'x', 48, 52, 60, 64, 67 ],
    [ 'x', 48, 52, 60, 'x', 67 ],
    [ 'x', 48, 52, 55, 60, 64 ],
    [ 'x', 48, 52, 55, 60, 67 ],
    [ 'x', 48, 52, 55, 60, 'x' ],
    [ 'x', 48, 52, 55, 64, 64 ],
    [ 'x', 48, 52, 55, 64, 67 ],
    [ 'x', 48, 52, 55, 64, 'x' ],
    [ 'x', 48, 52, 55, 'x', 64 ],
    [ 'x', 48, 52, 55, 'x', 67 ],
    [ 'x', 48, 52, 55, 'x', 'x' ],
    [ 'x', 48, 52, 'x', 60, 67 ],
    [ 'x', 48, 52, 'x', 64, 67 ],
    [ 'x', 48, 52, 'x', 'x', 67 ],
    [ 'x', 48, 55, 60, 60, 64 ],
    [ 'x', 48, 55, 60, 64, 64 ],
    [ 'x', 48, 55, 60, 64, 67 ],
    [ 'x', 48, 55, 60, 64, 'x' ],
    [ 'x', 48, 55, 60, 'x', 64 ],
    [ 'x', 48, 55, 55, 60, 64 ],
    [ 'x', 48, 55, 55, 64, 64 ],
    [ 'x', 48, 55, 55, 64, 67 ],
    [ 'x', 48, 55, 55, 64, 'x' ],
    [ 'x', 48, 55, 55, 'x', 64 ],
    [ 'x', 48, 55, 'x', 60, 64 ],
    [ 'x', 48, 55, 'x', 64, 64 ],
    [ 'x', 48, 55, 'x', 64, 67 ],
    [ 'x', 48, 55, 'x', 64, 'x' ],
    [ 'x', 48, 55, 'x', 'x', 64 ],
    [ 'x', 48, 'x', 60, 64, 67 ],
    [ 'x', 48, 'x', 55, 60, 64 ],
    [ 'x', 48, 'x', 55, 64, 64 ],
    [ 'x', 48, 'x', 55, 64, 67 ],
    [ 'x', 48, 'x', 55, 64, 'x' ],
    [ 'x', 48, 'x', 55, 'x', 64 ],
    [ 'x', 48, 'x', 'x', 64, 67 ]
  ],
  '5sRootInv1': [
    [ 'x', 52, 55, 64, 64, 72 ],
    [ 'x', 52, 55, 64, 67, 72 ],
    [ 'x', 52, 55, 64, 'x', 72 ],
    [ 'x', 52, 55, 55, 64, 72 ],
    [ 'x', 52, 55, 55, 67, 72 ],
    [ 'x', 52, 55, 55, 'x', 72 ],
    [ 'x', 52, 55, 60, 64, 64 ],
    [ 'x', 52, 55, 60, 64, 67 ],
    [ 'x', 52, 55, 60, 64, 72 ],
    [ 'x', 52, 55, 60, 64, 'x' ],
    [ 'x', 52, 55, 60, 67, 64 ],
    [ 'x', 52, 55, 60, 67, 72 ],
    [ 'x', 52, 55, 60, 67, 'x' ],
    [ 'x', 52, 55, 60, 'x', 64 ],
    [ 'x', 52, 55, 60, 'x', 67 ],
    [ 'x', 52, 55, 60, 'x', 72 ],
    [ 'x', 52, 55, 60, 'x', 'x' ],
    [ 'x', 52, 55, 'x', 64, 72 ],
    [ 'x', 52, 55, 'x', 67, 72 ],
    [ 'x', 52, 55, 'x', 'x', 72 ],
    [ 'x', 52, 60, 64, 67, 64 ],
    [ 'x', 52, 60, 64, 67, 72 ],
    [ 'x', 52, 60, 64, 67, 'x' ],
    [ 'x', 52, 60, 55, 67, 64 ],
    [ 'x', 52, 60, 55, 67, 72 ],
    [ 'x', 52, 60, 55, 67, 'x' ],
    [ 'x', 52, 60, 55, 'x', 64 ],
    [ 'x', 52, 60, 55, 'x', 72 ],
    [ 'x', 52, 60, 55, 'x', 'x' ],
    [ 'x', 52, 60, 'x', 67, 64 ],
    [ 'x', 52, 60, 'x', 67, 72 ],
    [ 'x', 52, 60, 'x', 67, 'x' ],
    [ 'x', 52, 'x', 64, 67, 72 ],
    [ 'x', 52, 'x', 55, 64, 72 ],
    [ 'x', 52, 'x', 55, 67, 72 ],
    [ 'x', 52, 'x', 55, 'x', 72 ],
    [ 'x', 52, 'x', 60, 64, 67 ],
    [ 'x', 52, 'x', 60, 67, 64 ],
    [ 'x', 52, 'x', 60, 67, 72 ],
    [ 'x', 52, 'x', 60, 67, 'x' ],
    [ 'x', 52, 'x', 60, 'x', 67 ],
    [ 'x', 52, 'x', 'x', 67, 72 ]
  ],
  '5sRootInv2': [
    [ 'x', 55, 60, 67, 67, 64 ],
    [ 'x', 55, 60, 67, 67, 76 ],
    [ 'x', 55, 60, 67, 'x', 64 ],
    [ 'x', 55, 60, 67, 'x', 76 ],
    [ 'x', 55, 60, 55, 67, 64 ],
    [ 'x', 55, 60, 55, 67, 76 ],
    [ 'x', 55, 60, 55, 'x', 64 ],
    [ 'x', 55, 60, 55, 'x', 76 ],
    [ 'x', 55, 60, 64, 67, 72 ],
    [ 'x', 55, 60, 64, 67, 64 ],
    [ 'x', 55, 60, 64, 67, 76 ],
    [ 'x', 55, 60, 64, 67, 'x' ],
    [ 'x', 55, 60, 64, 'x', 72 ],
    [ 'x', 55, 60, 64, 'x', 64 ],
    [ 'x', 55, 60, 64, 'x', 76 ],
    [ 'x', 55, 60, 64, 'x', 'x' ],
    [ 'x', 55, 60, 'x', 67, 64 ],
    [ 'x', 55, 60, 'x', 67, 76 ],
    [ 'x', 55, 60, 'x', 'x', 64 ],
    [ 'x', 55, 60, 'x', 'x', 76 ],
    [ 'x', 55, 'x', 64, 67, 72 ],
    [ 'x', 55, 'x', 64, 'x', 72 ]
  ],
  '5sRootInv3': [
    [ 'x', 48, 52, 60, 60, 67 ],
    [ 'x', 48, 52, 60, 64, 67 ],
    [ 'x', 48, 52, 60, 'x', 67 ],
    [ 'x', 48, 52, 55, 60, 64 ],
    [ 'x', 48, 52, 55, 60, 67 ],
    [ 'x', 48, 52, 55, 60, 'x' ],
    [ 'x', 48, 52, 55, 64, 64 ],
    [ 'x', 48, 52, 55, 64, 67 ],
    [ 'x', 48, 52, 55, 64, 'x' ],
    [ 'x', 48, 52, 55, 'x', 64 ],
    [ 'x', 48, 52, 55, 'x', 67 ],
    [ 'x', 48, 52, 55, 'x', 'x' ],
    [ 'x', 48, 52, 'x', 60, 67 ],
    [ 'x', 48, 52, 'x', 64, 67 ],
    [ 'x', 48, 52, 'x', 'x', 67 ],
    [ 'x', 48, 55, 60, 60, 64 ],
    [ 'x', 48, 55, 60, 64, 64 ],
    [ 'x', 48, 55, 60, 64, 67 ],
    [ 'x', 48, 55, 60, 64, 'x' ],
    [ 'x', 48, 55, 60, 'x', 64 ],
    [ 'x', 48, 55, 55, 60, 64 ],
    [ 'x', 48, 55, 55, 64, 64 ],
    [ 'x', 48, 55, 55, 64, 67 ],
    [ 'x', 48, 55, 55, 64, 'x' ],
    [ 'x', 48, 55, 55, 'x', 64 ],
    [ 'x', 48, 55, 'x', 60, 64 ],
    [ 'x', 48, 55, 'x', 64, 64 ],
    [ 'x', 48, 55, 'x', 64, 67 ],
    [ 'x', 48, 55, 'x', 64, 'x' ],
    [ 'x', 48, 55, 'x', 'x', 64 ],
    [ 'x', 48, 'x', 60, 64, 67 ],
    [ 'x', 48, 'x', 55, 60, 64 ],
    [ 'x', 48, 'x', 55, 64, 64 ],
    [ 'x', 48, 'x', 55, 64, 67 ],
    [ 'x', 48, 'x', 55, 64, 'x' ],
    [ 'x', 48, 'x', 55, 'x', 64 ],
    [ 'x', 48, 'x', 'x', 64, 67 ]
  ],
  '5-1': [
    [ 'x', 48, 52, 60, 60, 67 ],
    [ 'x', 48, 52, 60, 64, 67 ],
    [ 'x', 48, 52, 55, 60, 64 ],
    [ 'x', 48, 52, 55, 60, 67 ],
    [ 'x', 48, 52, 55, 64, 64 ],
    [ 'x', 48, 52, 55, 64, 67 ],
    [ 'x', 48, 55, 60, 60, 64 ],
    [ 'x', 48, 55, 60, 64, 64 ],
    [ 'x', 48, 55, 60, 64, 67 ],
    [ 'x', 48, 55, 55, 60, 64 ],
    [ 'x', 48, 55, 55, 64, 64 ],
    [ 'x', 48, 55, 55, 64, 67 ]
  ],
  '5-1inv1': [
    [ 'x', 52, 55, 64, 64, 72 ],
    [ 'x', 52, 55, 64, 67, 72 ],
    [ 'x', 52, 55, 55, 64, 72 ],
    [ 'x', 52, 55, 55, 67, 72 ],
    [ 'x', 52, 55, 60, 64, 64 ],
    [ 'x', 52, 55, 60, 64, 67 ],
    [ 'x', 52, 55, 60, 64, 72 ],
    [ 'x', 52, 55, 60, 67, 64 ],
    [ 'x', 52, 55, 60, 67, 72 ],
    [ 'x', 52, 60, 64, 67, 64 ],
    [ 'x', 52, 60, 64, 67, 72 ],
    [ 'x', 52, 60, 55, 67, 64 ],
    [ 'x', 52, 60, 55, 67, 72 ]
  ],
  '5-1inv2': [
    [ 'x', 55, 60, 67, 67, 64 ],
    [ 'x', 55, 60, 67, 67, 76 ],
    [ 'x', 55, 60, 55, 67, 64 ],
    [ 'x', 55, 60, 55, 67, 76 ],
    [ 'x', 55, 60, 64, 67, 72 ],
    [ 'x', 55, 60, 64, 67, 64 ],
    [ 'x', 55, 60, 64, 67, 76 ]
  ],
  '5-1inv3': [
    [ 'x', 48, 52, 60, 60, 67 ],
    [ 'x', 48, 52, 60, 64, 67 ],
    [ 'x', 48, 52, 55, 60, 64 ],
    [ 'x', 48, 52, 55, 60, 67 ],
    [ 'x', 48, 52, 55, 64, 64 ],
    [ 'x', 48, 52, 55, 64, 67 ],
    [ 'x', 48, 55, 60, 60, 64 ],
    [ 'x', 48, 55, 60, 64, 64 ],
    [ 'x', 48, 55, 60, 64, 67 ],
    [ 'x', 48, 55, 55, 60, 64 ],
    [ 'x', 48, 55, 55, 64, 64 ],
    [ 'x', 48, 55, 55, 64, 67 ]
  ],
  '5-2': [
    [ 'x', 48, 52, 55, 60, 'x' ],
    [ 'x', 48, 52, 55, 64, 'x' ],
    [ 'x', 48, 55, 60, 64, 'x' ],
    [ 'x', 48, 55, 55, 64, 'x' ]
  ],
  '5-2inv1': [
    [ 'x', 52, 55, 60, 64, 'x' ],
    [ 'x', 52, 55, 60, 67, 'x' ],
    [ 'x', 52, 60, 64, 67, 'x' ],
    [ 'x', 52, 60, 55, 67, 'x' ]
  ],
  '5-2inv2': [ [ 'x', 55, 60, 64, 67, 'x' ] ],
  '5-2inv3': [
    [ 'x', 48, 52, 55, 60, 'x' ],
    [ 'x', 48, 52, 55, 64, 'x' ],
    [ 'x', 48, 55, 60, 64, 'x' ],
    [ 'x', 48, 55, 55, 64, 'x' ]
  ],
  '5-3': [ [ 'x', 48, 52, 55, 'x', 'x' ] ],
  '5-3inv1': [ [ 'x', 52, 55, 60, 'x', 'x' ], [ 'x', 52, 60, 55, 'x', 'x' ] ],
  '5-3inv2': [ [ 'x', 55, 60, 64, 'x', 'x' ] ],
  '5-3inv3': [ [ 'x', 48, 52, 55, 'x', 'x' ] ]
}
 

/////////////////////////////////////////////////
------ guitarChords.mjs imports function guitarChords(notesArray)
and exports function getChords(chordArray)

export function getChords(chordArray){
    let chordsObj = guitarChords(chordArray); 
    return chordsObj;  
}

/////////////////////////////////////////////////
------ majorKeys.mjs imports function getChords from guitarChords.mjs and exports function allMajorKeys() 

export function allMajorKeys(){
    let allMajorKeyObjects = []; 
    majorKeyRoots.forEach(root=> {
        allMajorKeyObjects.push(constructMajorKeyObject(root)); 
    }); 
    return allMajorKeyObjects; 
}


-where majorKeyRoots = [48,49,50,51,52,53,54,55,56,57,58,59];

-calling constructMajorKeyObject(48) returns the following: 

{
  keyRoot: 48,
  chords: {
    scaleDegree1: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    scaleDegree2: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    scaleDegree3: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    scaleDegree4: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    scaleDegree5: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    scaleDegree6: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    scaleDegree7: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}

- let majKeyObj = constructMajorKeyObj(48); 
console.log(majKeyObj["chords"]["scaleDegree1"]) outputs : 

[
  {
    chordRoot: 48,
    name: 'M',
    htmlName: null,
    notes: [ 48, 52, 55 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'M7',
    htmlName: null,
    notes: [ 48, 52, 55, 59 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'add2',
    htmlName: null,
    notes: [ 48, 52, 55, 50 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'add4',
    htmlName: null,
    notes: [ 48, 52, 55, 53 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'add6',
    htmlName: null,
    notes: [ 48, 52, 55, 57 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'sus2',
    htmlName: null,
    notes: [ 48, 50, 55 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: 'sus4',
    htmlName: null,
    notes: [ 48, 53, 55 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: '5',
    htmlName: null,
    notes: [ 48, 55 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: '5add6/9',
    htmlName: null,
    notes: [ 48, 55, 50, 57 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: '5add6',
    htmlName: null,
    notes: [ 48, 55, 57 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 48,
    name: '5add9',
    htmlName: null,
    notes: [ 48, 55, 50 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  }
]

- let scaleDegree1 = majKeyObj["chords"]["scaleDegree1"]; 
console.log(scaleDegree1[0]); 

{
  chordRoot: 48,
  name: 'M',
  htmlName: null,
  notes: [ 48, 52, 55 ],
  chords: {
    '3': {
      '3sRoot': [Array],
      '3sRootInv1': [Array],
      '3sRootInv2': [Array],
      '3sRootInv3': [Array],
      '3-1': [Array],
      '3-1inv1': [Array],
      '3-1inv2': [Array],
      '3-1inv3': [Array]
    },
    '4': {
      '4sRoot': [Array],
      '4sRootInv1': [Array],
      '4sRootInv2': [Array],
      '4sRootInv3': [Array],
      '4-1': [Array],
      '4-1inv1': [Array],
      '4-1inv2': [Array],
      '4-1inv3': [Array],
      '4-2': [Array],
      '4-2inv1': [Array],
      '4-2inv2': [Array],
      '4-2inv3': [Array]
    },
    '5': {
      '5sRoot': [Array],
      '5sRootInv1': [Array],
      '5sRootInv2': [Array],
      '5sRootInv3': [Array],
      '5-1': [Array],
      '5-1inv1': [Array],
      '5-1inv2': [Array],
      '5-1inv3': [Array],
      '5-2': [Array],
      '5-2inv1': [Array],
      '5-2inv2': [Array],
      '5-2inv3': [Array],
      '5-3': [Array],
      '5-3inv1': [Array],
      '5-3inv2': [Array],
      '5-3inv3': [Array]
    },
    '6': {
      '6sRoot': [Array],
      '6sRootInv1': [Array],
      '6sRootInv2': [Array],
      '6sRootInv3': [Array],
      '6-1': [Array],
      '6-1inv1': [Array],
      '6-1inv2': [Array],
      '6-1inv3': [Array],
      '6-2': [Array],
      '6-2inv1': [Array],
      '6-2inv2': [Array],
      '6-2inv3': [Array],
      '6-3': [Array],
      '6-3inv1': [Array],
      '6-3inv2': [Array],
      '6-3inv3': [Array],
      '6-4': [Array],
      '6-4inv1': [Array],
      '6-4inv2': [Array],
      '6-4inv3': [Array]
    },
    notes: [ 48, 52, 55 ]
  }
}

-console.log(scaleDegree1[0]["chords"]['4']) outputs: 

{
  '4sRoot': [
    [ 'x', 'x', 60, 64, 67, 72 ],
    [ 'x', 'x', 60, 64, 67, 64 ],
    [ 'x', 'x', 60, 64, 67, 76 ],
    [ 'x', 'x', 60, 64, 67, 'x' ],
    [ 'x', 'x', 60, 55, 67, 64 ],
    [ 'x', 'x', 60, 55, 67, 76 ],
    [ 'x', 'x', 60, 55, 'x', 64 ],
    [ 'x', 'x', 60, 55, 'x', 76 ],
    [ 'x', 'x', 60, 67, 67, 64 ],
    [ 'x', 'x', 60, 67, 67, 76 ],
    [ 'x', 'x', 60, 67, 'x', 64 ],
    [ 'x', 'x', 60, 67, 'x', 76 ],
    [ 'x', 'x', 60, 'x', 67, 64 ],
    [ 'x', 'x', 60, 'x', 67, 76 ]
  ],
  '4sRootInv1': [
    [ 'x', 'x', 52, 55, 60, 64 ],
    [ 'x', 'x', 52, 55, 60, 67 ],
    [ 'x', 'x', 52, 55, 60, 'x' ],
    [ 'x', 'x', 52, 60, 64, 67 ],
    [ 'x', 'x', 52, 60, 60, 67 ],
    [ 'x', 'x', 52, 60, 'x', 67 ],
    [ 'x', 'x', 52, 'x', 60, 67 ]
  ],
  '4sRootInv2': [
    [ 'x', 'x', 55, 55, 60, 64 ],
    [ 'x', 'x', 55, 55, 64, 72 ],
    [ 'x', 'x', 55, 60, 67, 64 ],
    [ 'x', 'x', 55, 60, 60, 64 ],
    [ 'x', 'x', 55, 60, 64, 67 ],
    [ 'x', 'x', 55, 60, 64, 72 ],
    [ 'x', 'x', 55, 60, 64, 64 ],
    [ 'x', 'x', 55, 60, 64, 'x' ],
    [ 'x', 'x', 55, 60, 'x', 64 ],
    [ 'x', 'x', 55, 64, 67, 72 ],
    [ 'x', 'x', 55, 64, 64, 72 ],
    [ 'x', 'x', 55, 64, 'x', 72 ],
    [ 'x', 'x', 55, 'x', 60, 64 ],
    [ 'x', 'x', 55, 'x', 64, 72 ]
  ],
  '4sRootInv3': [
    [ 'x', 'x', 60, 64, 67, 72 ],
    [ 'x', 'x', 60, 64, 67, 64 ],
    [ 'x', 'x', 60, 64, 67, 76 ],
    [ 'x', 'x', 60, 64, 67, 'x' ],
    [ 'x', 'x', 60, 55, 67, 64 ],
    [ 'x', 'x', 60, 55, 67, 76 ],
    [ 'x', 'x', 60, 55, 'x', 64 ],
    [ 'x', 'x', 60, 55, 'x', 76 ],
    [ 'x', 'x', 60, 67, 67, 64 ],
    [ 'x', 'x', 60, 67, 67, 76 ],
    [ 'x', 'x', 60, 67, 'x', 64 ],
    [ 'x', 'x', 60, 67, 'x', 76 ],
    [ 'x', 'x', 60, 'x', 67, 64 ],
    [ 'x', 'x', 60, 'x', 67, 76 ]
  ],
  '4-1': [
    [ 'x', 'x', 60, 64, 67, 72 ],
    [ 'x', 'x', 60, 64, 67, 64 ],
    [ 'x', 'x', 60, 64, 67, 76 ],
    [ 'x', 'x', 60, 55, 67, 64 ],
    [ 'x', 'x', 60, 55, 67, 76 ],
    [ 'x', 'x', 60, 67, 67, 64 ],
    [ 'x', 'x', 60, 67, 67, 76 ]
  ],
  '4-1inv1': [
    [ 'x', 'x', 52, 55, 60, 64 ],
    [ 'x', 'x', 52, 55, 60, 67 ],
    [ 'x', 'x', 52, 60, 64, 67 ],
    [ 'x', 'x', 52, 60, 60, 67 ]
  ],
  '4-1inv2': [
    [ 'x', 'x', 55, 55, 60, 64 ],
    [ 'x', 'x', 55, 55, 64, 72 ],
    [ 'x', 'x', 55, 60, 67, 64 ],
    [ 'x', 'x', 55, 60, 60, 64 ],
    [ 'x', 'x', 55, 60, 64, 67 ],
    [ 'x', 'x', 55, 60, 64, 72 ],
    [ 'x', 'x', 55, 60, 64, 64 ],
    [ 'x', 'x', 55, 64, 67, 72 ],
    [ 'x', 'x', 55, 64, 64, 72 ]
  ],
  '4-1inv3': [
    [ 'x', 'x', 60, 64, 67, 72 ],
    [ 'x', 'x', 60, 64, 67, 64 ],
    [ 'x', 'x', 60, 64, 67, 76 ],
    [ 'x', 'x', 60, 55, 67, 64 ],
    [ 'x', 'x', 60, 55, 67, 76 ],
    [ 'x', 'x', 60, 67, 67, 64 ],
    [ 'x', 'x', 60, 67, 67, 76 ]
  ],
  '4-2': [ [ 'x', 'x', 60, 64, 67, 'x' ] ],
  '4-2inv1': [ [ 'x', 'x', 52, 55, 60, 'x' ] ],
  '4-2inv2': [ [ 'x', 'x', 55, 60, 64, 'x' ] ],
  '4-2inv3': [ [ 'x', 'x', 60, 64, 67, 'x' ] ]
}


/////////////////////////////////////////////////
------ extendedChords.mjs imports function allMajorKeys from
majorKeys.mjs and exports function allChords() 

export function allChords(){
    let keys = allMajorKeys(); 
    addAllExtendedChords(keys);
    return keys; 
}


- let all = allChords(); 
console.log(all) : 

[
  {
    keyRoot: 48,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 49,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 50,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 51,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 52,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 53,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 54,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 55,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 56,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 57,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 58,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 59,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  }
]

-let extended = all[0]["extendedChords"]["scaleDegree1"];
console.log(extended) : 


[
  {
    chordRoot: 50,
    name: 'm7',
    htmlName: null,
    notes: [ 50, 53, 57, 60 ],
    scaleDegreeInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [] },
    midiNoteInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [] },
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 50,
    name: 'm7',
    htmlName: null,
    notes: [ 53, 60 ],
    scaleDegreeInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [Array] },
    midiNoteInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [Array] },
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    chordRoot: 50,
    name: 'm7',
    htmlName: null,
    notes: [ 50, 53, 60 ],
    scaleDegreeInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [Array] },
    midiNoteInfo: { fullChord: [Array], thisVoicing: [Array], droppedNotes: [Array] },
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
...........
.........
........
]


/////////////////////////////////////////////////
------ allChords.mjs imports function allChords() from 
extendedChords and exports allMajorKeys
-also imports removeUnplayableChords and chordPlayabilityInfo from guitarChords.mjs 

function getAllChords(){
    let chords = allChords();
    toFrets(chords);
    removeUnplayeable(chords);
    return chords; 
}

export let allMajorKeys = getAllChords(); 

-so allChords.mjs module gets all chords by calling
allChords(), changes all to frets, and removes the unplayable chords 

-module also writes to file.json

fs.writeFile('file.json', JSON.stringify(chordPlayablityInfo["playableChords"]), (error) => {
    if (error) throw error;
});

- chordPlayabilityInfo is an object exported from guitarChords.mjs : 

export let chordPlayablityInfo = {
    unplayableChords : [],
    playableChords: [],  
    unplayableChordsCount : 0,
    playableChordsCount: 0
}; 

-it is modified in guitarChords.mjs by the following function : 

export function removeUnplayableChords(chordObject, root, name){
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


-so module writes playable chords to file.json : 

fs.writeFile('file.json', JSON.stringify(chordPlayablityInfo["playableChords"]), (error) => {
    if (error) throw error;
});

-the contents of file.json contain an array of every playable 
chord : 

[
  { chord: [ 'x', 'x', 'x', 5, 5, 3 ], chordName: 'M', chordRoot: 48 },
  {
    chord: [ 'x', 'x', 'x', 5, 8, 'o' ],
    chordName: 'M',
    chordRoot: 48
  },
  { chord: [ 'x', 'x', 'x', 9, 8, 8 ], chordName: 'M', chordRoot: 48 },
  {
    chord: [ 'x', 'x', 'x', 'o', 1, 'o' ],
    chordName: 'M',
    chordRoot: 48
  },
  {
    chord: [ 'x', 'x', 'x', 'o', 5, 8 ],
    chordName: 'M',
    chordRoot: 48
  },
  { chord: [ 'x', 'x', 'x', 5, 5, 3 ], chordName: 'M', chordRoot: 48 },

  ... 1523130 more items
]


/////////////////////////////////////////////////
------ chordEntryPoint.mjs imports allMajorKeys from 
allChords.mjs

The content of the file is only the following: 

import { chordPlayablity, allMajorKeys } from "./Logic/allChords.mjs";
let chords = allMajorKeys; 

-console.log(chords)  : 

[
  {
    keyRoot: 48,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
  {
    keyRoot: 49,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  },
......
......
{
    keyRoot: 59,
    chords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    },
    extendedChords: {
      scaleDegree1: [Array],
      scaleDegree2: [Array],
      scaleDegree3: [Array],
      scaleDegree4: [Array],
      scaleDegree5: [Array],
      scaleDegree6: [Array],
      scaleDegree7: [Array]
    }
  }
]

