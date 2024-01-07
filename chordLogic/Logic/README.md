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


//////////////////////////////////////////////
subChords key of a majorKeyObject 

subChords: {
    scaleDegree1: [{chordObj}, {chordObj}, ..],
    scaleDegre2: [{chordObj}, {chordObj}, ..], 
    ...
    scaleDegree7: [{chordObj}, {chordObj}, ..]
}

- where chordObj is: 

 {
      chordRoot: 48,
      name: '5',
      htmlName: null,
      notes: [1,5],
      chords: [Object]
  }

- at "chords": 

chords: {
    '2': {
      '2-1consec': [Array],
      '2-1nonconsec': [Array],
      '2-1inv1consec': [Array],
      '2-1inv1nonconsec': [Array]
    },
    '3': {
      '3-1consec': [Array],
      '3-1nonconsec': [Array],
      '3-1inv1consec': [Array],
      '3-1inv1nonconsec': [Array],
      '3-2consec': [Array],
      '3-2nonconsec': [Array],
      '3-2inv1consec': [Array],
      '3-2inv1nonconsec': [Array]
    },
    '4': {
      '4-1consec': [Array],
      '4-1nonconsec': [Array],
      '4-1inv1consec': [Array],
      '4-1inv1nonconsec': [Array],
      '4-2consec': [Array],
      '4-2nonconsec': [Array],
      '4-2inv1consec': [Array],
      '4-2inv1nonconsec': [Array],
      '4-3consec': [Array],
      '4-3nonconsec': [Array],
      '4-3inv1consec': [Array],
      '4-3inv1nonconsec': [Array]
    },
    '5': {
      '5-1consec': [Array],
      '5-1nonconsec': [Array],
      '5-1inv1consec': [Array],
      '5-1inv1nonconsec': [Array],
      '5-2consec': [Array],
      '5-2nonconsec': [Array],
      '5-2inv1consec': [Array],
      '5-2inv1nonconsec': [Array],
      '5-3consec': [Array],
      '5-3nonconsec': [Array],
      '5-3inv1consec': [Array],
      '5-3inv1nonconsec': [Array],
      '5-4consec': [Array],
      '5-4nonconsec': [Array],
      '5-4inv1consec': [Array],
      '5-4inv1nonconsec': [Array]
    },
    '6': {
      '6-1consec': [Array],
      '6-1nonconsec': [Array],
      '6-1inv1consec': [Array],
      '6-1inv1nonconsec': [Array],
      '6-2consec': [Array],
      '6-2nonconsec': [Array],
      '6-2inv1consec': [Array],
      '6-2inv1nonconsec': [Array],
      '6-3consec': [Array],
      '6-3nonconsec': [Array],
      '6-3inv1consec': [Array],
      '6-3inv1nonconsec': [Array],
      '6-4consec': [Array],
      '6-4nonconsec': [Array],
      '6-4inv1consec': [Array],
      '6-4inv1nonconsec': [Array],
      '6-5consec': [Array],
      '6-5nonconsec': [Array],
      '6-5inv1consec': [Array],
      '6-5inv1nonconsec': [Array]
    }
  }


-at key = "5"

{
  '5-1consec': [
    [ 'x', 49, 53, 61, 61, 65 ],
    [ 'x', 49, 53, 61, 61, 73 ],
    [ 'x', 49, 53, 61, 65, 65 ],
    [ 'x', 49, 53, 61, 65, 73 ],
    [ 'x', 49, 53, 65, 61, 65 ],
    [ 'x', 49, 53, 65, 61, 73 ],
    [ 'x', 49, 53, 65, 65, 65 ],
    [ 'x', 49, 53, 65, 65, 73 ],
    [ 'x', 49, 61, 61, 61, 65 ],
    [ 'x', 49, 61, 61, 65, 65 ],
    [ 'x', 49, 61, 61, 65, 73 ],
    [ 'x', 49, 61, 65, 61, 65 ],
    [ 'x', 49, 61, 65, 61, 73 ],
    [ 'x', 49, 61, 65, 65, 65 ],
    [ 'x', 49, 61, 65, 65, 73 ]
  ],
  '5-1nonconsec': [
      ........
  ], 
  ......
  '5-4inv1nonconsec': [ [ 'x', 53, 61, 'x', 'x', 'x' ]]
}



//////////////////////////////////////////////////
//// specialAlteredChords 
//// 
/////////////////////////////////////////////////

-output from jsonIntermediate/specialAlteredChords.json

{

  '48': [
    {
      name: 'dom7b5',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7#5',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7b9',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7#9',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'minmaj7',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    }
  ],
  '49': [
    {
      name: 'dom7b5',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7#5',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7b9',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'dom7#9',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    {
      name: 'minmaj7',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    }
  ],
.....
.....
  '59': [
    {
      name: 'dom7b5',
      htmlName: null,
      intervals: [Array],
      integerNotation: [Array],
      voicings: [Array],
      integerVoicings: [Array],
      chords: [Array]
    },
    ...
    ...
    ]

}

- at key = "48"

[
  {
    name: 'dom7b5',
    htmlName: null,
    intervals: [ 1, 3, 'b5', 'b7' ],
    integerNotation: [ 0, 4, 6, 10 ],
    voicings: [ [Array], [Array] ],
    integerVoicings: [ [Array], [Array] ],
    chords: [ [Object], [Object] ]
  },
  {
    name: 'dom7#5',
    htmlName: null,
    intervals: [ 1, 3, '#5', 'b7' ],
    integerNotation: [ 0, 4, 6, 10 ],
    voicings: [ [Array], [Array] ],
    integerVoicings: [ [Array], [Array] ],
    chords: [ [Object], [Object] ]
  },
  {
    name: 'dom7b9',
    htmlName: null,
    intervals: [ 1, 3, 5, 'b7', 'b9' ],
    integerNotation: [ 0, 4, 7, 10, 13 ],
    voicings: [ [Array], [Array], [Array], [Array] ],
    integerVoicings: [ [Array], [Array], [Array], [Array] ],
    chords: [ [Object], [Object], [Object], [Object] ]
  },
  {
    name: 'dom7#9',
    htmlName: null,
    intervals: [ 1, 3, 5, 'b7', '#9' ],
    integerNotation: [ 0, 4, 7, 10, 15 ],
    voicings: [ [Array], [Array], [Array], [Array] ],
    integerVoicings: [ [Array], [Array], [Array], [Array] ],
    chords: [ [Object], [Object], [Object], [Object] ]
  },
  {
    name: 'minmaj7',
    htmlName: null,
    intervals: [ 1, 'b3', 5, 7 ],
    integerNotation: [ 0, 3, 7, 11 ],
    voicings: [ [Array], [Array], [Array], [Array] ],
    integerVoicings: [ [Array], [Array], [Array], [Array] ],
    chords: [ [Object], [Object], [Object], [Object] ]
  }
]

- at index 0: 
{
  name: 'dom7b5',
  htmlName: null,
  intervals: [ 1, 3, 'b5', 'b7' ],
  integerNotation: [ 0, 4, 6, 10 ],
  voicings: [ [ 1, 3, 'b5', 'b7' ], [ 3, 'b5', 'b7' ] ],
  integerVoicings: [ [ 0, 4, 6, 10 ], [ 4, 6, 10 ] ],
  chords: [
    { integerVoicing: [Array], notes: [Array], chords: [Object] },
    { integerVoicing: [Array], notes: [Array], chords: [Object] }
  ]
}

-at "chords": 

[
  {
    integerVoicing: [ 0, 4, 6, 10 ],
    notes: [ 48, 52, 54, 58 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  },
  {
    integerVoicing: [ 4, 6, 10 ],
    notes: [ 52, 54, 58 ],
    chords: {
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      notes: [Array]
    }
  }
]

- at index 0

{
  integerVoicing: [ 0, 4, 6, 10 ],
  notes: [ 48, 52, 54, 58 ],
  chords: {
    '3': {
      '3sRoot': [],
      '3sRootInv1': [],
      '3sRootInv2': [],
      '3sRootInv3': [],
      '3sRootInv4': [],
      '3-1': [],
      '3-1inv1': [],
      '3-1inv2': [],
      '3-1inv3': [],
      '3-1inv4': []
    },
    '4': {
      '4sRoot': [Array],
      '4sRootInv1': [Array],
      '4sRootInv2': [Array],
      '4sRootInv3': [Array],
      '4sRootInv4': [Array],
      '4-1': [Array],
      '4-1inv1': [Array],
      '4-1inv2': [Array],
      '4-1inv3': [Array],
      '4-1inv4': [Array],
      '4-2': [],
      '4-2inv1': [],
      '4-2inv2': [],
      '4-2inv3': [],
      '4-2inv4': []
    },
    '5': {
      '5sRoot': [Array],
      '5sRootInv1': [Array],
      '5sRootInv2': [Array],
      '5sRootInv3': [Array],
      '5sRootInv4': [Array],
      '5-1': [Array],
      '5-1inv1': [Array],
      '5-1inv2': [Array],
      '5-1inv3': [Array],
      '5-1inv4': [Array],
      '5-2': [Array],
      '5-2inv1': [Array],
      '5-2inv2': [Array],
      '5-2inv3': [Array],
      '5-2inv4': [Array],
      '5-3': [],
      '5-3inv1': [],
      '5-3inv2': [],
      '5-3inv3': [],
      '5-3inv4': []
    },
    '6': {
      '6sRoot': [Array],
      '6sRootInv1': [Array],
      '6sRootInv2': [Array],
      '6sRootInv3': [Array],
      '6sRootInv4': [Array],
      '6-1': [Array],
      '6-1inv1': [Array],
      '6-1inv2': [Array],
      '6-1inv3': [Array],
      '6-1inv4': [Array],
      '6-2': [Array],
      '6-2inv1': [Array],
      '6-2inv2': [Array],
      '6-2inv3': [Array],
      '6-2inv4': [Array],
      '6-3': [Array],
      '6-3inv1': [Array],
      '6-3inv2': [Array],
      '6-3inv3': [Array],
      '6-3inv4': [Array],
      '6-4': [],
      '6-4inv1': [],
      '6-4inv2': [],
      '6-4inv3': [],
      '6-4inv4': []
    },
    notes: [ 48, 52, 54, 58 ]
  }
}

-at ["chords"]["6"]

'6sRoot': [
    [ 8, 7, 10, 9, 7, 6 ],
    [ 8, 7, 10, 11, 11, 8 ],
    [ 8, 7, 10, 11, 11, 'o' ],
    [ 8, 7, 10, 11, 11, 'x' ],
    [ 8, 7, 10, 'x', 7, 6 ],
    [ 8, 7, 4, 5, 5, 6 ],
    [ 8, 7, 4, 5, 7, 6 ],
    [ 8, 7, 4, 5, 'x', 6 ],
    [ 8, 7, 4, 'x', 5, 6 ],
    [ 8, 7, 4, 'x', 7, 6 ],
    [ 8, 7, 4, 'x', 'x', 6 ],
    [ 8, 7, 8, 5, 7, 8 ],
    [ 8, 7, 8, 5, 7, 'o' ],
    [ 8, 7, 8, 5, 7, 6 ],
    [ 8, 7, 8, 5, 7, 'x' ],
    [ 8, 7, 8, 9, 7, 8 ],
    [ 8, 7, 8, 9, 7, 'o' ],
    [ 8, 7, 8, 9, 7, 6 ],
    [ 8, 7, 8, 9, 7, 'x' ],
    [ 8, 7, 8, 11, 7, 8 ],
    [ 8, 7, 8, 11, 7, 'o' ],
    .......
  ], 

  '6sRootInv1': [
    [ 'o', 7, 4, 5, 5, 6 ],
    [ 'o', 7, 4, 5, 7, 6 ],
    [ 'o', 7, 4, 5, 'x', 6 ],
    [ 'o', 7, 8, 9, 7, 8 ],
    [ 'o', 7, 8, 11, 7, 8 ],
    [ 'o', 7, 8, 11, 11, 8 ],
    [ 'o', 7, 8, 11, 'x', 8 ],
    [ 'o', 7, 8, 5, 7, 'o' ],
    [ 'o', 7, 8, 5, 7, 6 ],
    [ 'o', 7, 8, 5, 7, 8 ],
    [ 'o', 7, 8, 5, 7, 'x' ],
    [ 'o', 7, 8, 'x', 7, 8 ],
    [ 'o', 7, 10, 9, 7, 6 ],
    [ 'o', 7, 10, 11, 11, 'o' ],
    ......
    ]

    etc 