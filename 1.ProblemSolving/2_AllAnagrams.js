

function isAnagram(s1, s2) {

    let result = [];

    // Second Hashmap
    let hashMap = {};
    for (let i = 0; i < s2.length; i++) {
        if (hashMap[s2[i]]) {
            hashMap[s2[i]]++;
        }
        else {
            hashMap[s2[i]] = 1;
        }
    }


    let window = s2.length;
    let lastWindow = s1.length - window;

    let checkHashMap = {};
    for (let i = 0; i <= lastWindow; i++) {

        for (let j = i; j < i+window; j++) {
            if (checkHashMap[s1[j]]) {
                checkHashMap[s1[j]]++;
            }
            else {
                checkHashMap[s1[j]] = 1;
            }     
        }

        

        if(Object.entries(hashMap).toString() == Object.entries(checkHashMap).toString()){
            result.push(i);
        }        
    }

    return result;

}



const s1 = "abcdebacd";
const s2 = "cab";

console.log(isAnagram(s1, s2));