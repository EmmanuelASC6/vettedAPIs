const submit = document.getElementById("submit_button");
let url;

function Submit(event){
    event.preventDefault();
    let cat = document.getElementById("cat")
    if (cat.checked){
        document.getElementById("landingPage").style.display = "none";
        url = 'https://api.thecatapi.com/v1/images/search';
        getUrl(url);
    } else {
        document.getElementById("landingPage").style.display = "none";
        url = 'https://api.thedogapi.com/v1/images/search';
        getUrl(url);
    }
}

function getUrl(url){
    fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (json){
        data(json);
    })
}

function data(json){
    let imageUrl = json[0].url;
    document.querySelector('body').style.backgroundImage = `url('${imageUrl}')`;
}


submit.addEventListener('click', Submit);

// function getRadioVal(form, name) {
//     let val;
//     // get list of radio buttons with specified name
//     let radios = form.elements[name];
    
//     // loop through list of radio buttons
//     for (let i=0, len=radios.length; i<len; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     return val; // return value of checked radio or undefined if none checked
// }