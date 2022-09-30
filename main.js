// let stars = ["cat", "dog", "tac", "god", "act"];
// let stars = displayData(data);  

let groupAnagrams = function(stars){
    let hash = {};

    stars.forEach(str => {
        let letters = str.split('').sort();

        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    })

    const keys = Object.keys(hash);
    const values = keys.map(function(v){
        return hash[v];
    });
    return values;
}

console.log(groupAnagrams(stars));