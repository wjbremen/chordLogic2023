


fs.readFile("file.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    chordData = JSON.parse(jsonString);
    console.log(chordData); 
});