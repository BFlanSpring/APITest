const userInput = document.querySelector('#gif');
const form = document.querySelector('form');
const imgContainer = document.getElementById('imgContainer');
const removeBtn = document.querySelector('button[type="submit"][value="delete"]')
const submitBtn = document.querySelector('button[type="submit"][value="find"]')


async function getMeme(){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: userInput.value,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(res.data);
    addGif(res.data) 
}


function addGif(res){
    let numRes = res.data.length;
    if (numRes) {
        let randomGif = Math.floor(Math.random() * numRes);
        let gifURL = res.data[randomGif].images.original.url;
        let image = document.createElement('img');
        image.src = gifURL;
        let divElement = document.getElementById('imgContainer');
        divElement.appendChild(image);
    }
   
}

submitBtn.addEventListener('click', async function(e){
    e.preventDefault();
    await getMeme();
})

removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    imgContainer.innerHTML='';
})







// async function getData() {
//     const response = await axios.get('https://swapi.co/api/planets/');
//     const {next, results} = response.data;
//     console.log(next)
//     for (let planet of results) {
//         console.log(planet.name)
//     }
//     const response2 = await axios.get(next);
//     console.log(response2.data.results);
// }

// getData();
// console.log("I HAPPEN  AFTER getData()")

// async function getLaunches() {
//     const res = await axios.get('https://api.spacexdata.com/v3/capsules');
//     const ul = document.querySelector("#launches");
//     for(let launch of res.data){
//         const newLI = document.createElement('LI');
//         newLI.innerText = launch.capsule_serial;
//         ul.append(newLI);
//     }
// }

// async function getUsers(){
//     const res = await axios.get('https://reqres.in/api/users');
//     console.log(res);
// }

// async function createUser() {
//     const res = await axios.get.post('https://reqres.in/api/users');
//     console.log(res);
// }

// createUser();
// getUsers();