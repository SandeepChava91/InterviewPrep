
function isAnagram(s1, s2) {

    if (s1.length != s2.length) {
        return false;
    }

    let hashMap = {};

    for (let i = 0; i < s1.length; i++) {
        if (hashMap[s1[i]]) {
            hashMap[s1[i]]++;
        }
        else {
            hashMap[s1[i]] = 1;
        }
    }


    for (let i = 0; i < s2.length; i++) {
        if (hashMap[s2[i]] > 0) {
            hashMap[s2[i]]--;
        }
        else {
            return false;
        }
    }

    return true;
}



const s1 = "cata";
const s2 = "acta";

console.log(isAnagram(s1, s2));