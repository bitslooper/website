var img = document.getElementById("showimg");

function random(){
     var number = parseInt(1000 * Math.random()) % 5;
     img.src = "./img/image" + number + ".JPG";
     console.log(number);
}

function showme(){
    random();
}

showme();
