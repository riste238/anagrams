
getData();

function getData(){
    let url = 'https://raw.githubusercontent.com/riste238/data-arr/main/data.json';
    return new Promise(function(resolve, reject){
        let xml = new XMLHttpRequest();
        xml.open('GET',url);
        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
              displayData(JSON.parse(xml.responseText));
            }
        }
        xml.send();
    })
    
}

// let stars;
function displayData(data){
    console.log(data);
    let podatoci; // inside in fun
    for (const value in data) {
    //     podatoci=  Object.values(value).filter(el => {
    //     return el !== null;   
    // });
    podatoci = Array.from(data[value]).filter(el=> {
        return el !== null;
    });
    // podatoci.split('');
    
    }
    

    // const result = stars.filter(element => {
    //     return element !== null;
    // })
    // console.log(result);
//   stars.push(Object.values(data));
}
// let stars = ["cat", "dog", "tac", "god", "act"];

let stars =  displayData();
console.log(stars[0]);