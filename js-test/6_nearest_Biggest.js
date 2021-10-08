function NearestBiggest(arr) {
    // Write your code here
    let output;
    for(let i=0; i<note.length; i++){
        output = "No";
        for(let j=0; j<magazine.length; j++) {
            if(note[i] === magazine[j]){
                output = "Yes";
                magazine.splice(j, 1);
                break;
            }
        }
        
        if (output === "No") {
            console.log(note[i], " - ", i);
            break;
        }
    }
    
    return output;
}



console.log(checkMagazine(magazine, note));