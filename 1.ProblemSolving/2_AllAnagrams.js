// Find all possible anagrams of s2 in s1

// Use sliding window algo
function isAnagram(s1, s2) {

    let result = [];

    // Second string Hashmap
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
        // Create hashmaps of every window and compare with the original hashmap
        for (let j = i; j < i+window; j++) {
            if (checkHashMap[s1[j]]) {
                checkHashMap[s1[j]]++;
            }
            else {
                checkHashMap[s1[j]] = 1;
            }     
        }
        
        if(CompareObjects(hashMap, checkHashMap)){
            result.push(i);
        }

        checkHashMap = {};
    }

    return result;

}

function CompareObjects(obj1, obj2){

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


const s1 = "abcdebacd";
const s2 = "cab";

console.log(isAnagram(s1, s2));