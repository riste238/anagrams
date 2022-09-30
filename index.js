async function getData() {
    let url = 'https://raw.githubusercontent.com/ailioski-linkplusit/assignment-dictionary/master/dictionary.txt';
    const response = await fetch(url);
    const data = await response.text();

    const anagrams = data.split('\n');
    return anagrams;
}

let groupAnagrams = function(anagrams){
    let hash = {};

    anagrams.forEach(str => {
        let letters = str.split('').sort();

        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    })

    const keys = Object.keys(hash);
    const values = keys.map(function(v){
        return hash[v];
    });
    return values;
}

getData()
    .then(response => {
        const result = groupAnagrams(response);
        console.log(result);
    });
