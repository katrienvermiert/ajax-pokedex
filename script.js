//poke api
let searchInput = null;

document.getElementById('button').addEventListener('click', loader);

function loader(){
    getName();
    loadIndex();
    
}

function loadIndex(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://pokeapi.co/api/v2/pokemon/' + searchInput + '/', true);
    xhr.onload = function(){
        if(this.status === 200){

            let data = JSON.parse(xhr.responseText);

            document.getElementById('image').innerHTML = "<img src='"+ data.sprites.front_default +"' style='height:250px'>";
            document.getElementById('bottom').innerHTML = '<p style="color:red">ID:</p>' + data.id + '<p style="color:red">Name:</p>' + data.name + '<p style="color:red">Moves:</p>' + data.moves[0].move.name + '<br>' + data.moves[1].move.name + '<br>' + data.moves[2].move.name + '<br>' + data.moves[3].move.name;

        } else {
            
            document.getElementById('bottom').innerHTML = '<p>unknown species</p>';
        }
    }
    xhr.send();
}

function getName(){
    searchInput = document.getElementById('name').value;
}


// sound
let audio = document.getElementById('audio');
let isPlaying = false;

function togglePlay(){
    if(isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
};

audio.onplay = function(){
    isPlaying = true;
};
audio.onpause = function(){
    isPlaying = false;
}

//turn on/off
let toggle = document.querySelector('#onoff');
let isOn = false;

toggle.addEventListener("click", function(){
    if(isOn){
        document.getElementById('dot').style.background = "rgb(47, 48, 47)";
        document.getElementById('window1').innerHTML = "";
        document.getElementById('bottom').innerHTML = "";
        document.getElementById('name').value = "";
        isOn = false;
        location.reload();
    } else {
        document.getElementById('dot').style.background = "green";
        document.getElementById('name').value = 1;
        loader();
        isOn = true;
    }
    
});


//back and forward
function goForward(){
    document.getElementById('name').value++;
    loader();
}

function goBack(){
    document.getElementById('name').value--;
    loader();
}