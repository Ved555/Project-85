window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    const context = canvas.getContext('2d');
console.log("working");


background_image = "https://postimg.cc/p9D2dqqZ";

car1_width = 120;
car1_height = 70;
car1_image = "https://ak.picdn.net/shutterstock/videos/1031491133/thumb/1.jpg?ip=x480";
car1_x = 10;
car1_y = 10;


car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_x = 10;
car2_y = 100;

function add(){
    background_image =  new Image();
    background_image.onload = uploadBackground;
    background_image.src =  background_image;

    car1_image = new Image();
    car1_image.onload = uploadcar1;
    car1_image.src =  car1_image

    car2_image = new Image();
    car2_image.onload = uploadcar2;
    car2_image.src =  car2_image;
}

function uploadBackground(){
    context.drawImage(background_image, 0 , 0, canvas.width, canvas.height);
}

function uploadcar1(){
    context.drawImage(car1_image,car1_x ,car1_y, car1_width, car1_height);
}

function uploadcar2(){
    context.drawImage(car2_image,car2_x ,car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    if (keyPressed == "38"){
        car1_up();
    }
    if (keyPressed == "40"){
        car1_down();
    }
    if (keyPressed == "37"){
        car1_left();
    }
    if (keyPressed == "39"){
        car1_right();
    }


    if (keyPressed == "87"){
        car2_up();
    }
    if (keyPressed == "83"){
        car2_down();
    }
    if (keyPressed == "65"){
        car2_left();
    }
    if (keyPressed == "68"){
        car2_right();
    }


    if(car1_x > 700){
        document.getElementById('game_status').innerHTML = "Car 1 Won!!!";
    }

    if(car2_x > 700){
        document.getElementById('game_status').innerHTML = "Car 2 Won!!!";
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
}