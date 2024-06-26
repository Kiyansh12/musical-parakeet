function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = CreateCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses')
}

classifier =ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
console.log('Posenet Is Initialised');
}

function draw() {
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}