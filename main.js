mustache_x = 0;
mustache_y = 0;


function preload() {
img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mustache_x = results[0].pose.nose.x-30;
        mustache_y = results[0].pose.nose.y-20;

        console.log("mustache x = " + mustache_x);
        console.log("mustache y = " + mustache_y);

    }
}

function modelLoaded() {
    console.log('PoseNet is initialised');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img,mustache_x,mustache_y,60,60);
}

function take_snapshot() {
    save('Image1.png');

}