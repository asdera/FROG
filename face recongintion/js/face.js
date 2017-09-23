var faceMode = affdex.FaceDetectorMode.LARGE_FACES;

var detector = new affdex.FrameDetector(faceMode);

//detector.detectAllEmotions();
detector.detectAllExpressions();

detector.addEventListener("onInitializeSuccess", function () {
    console.log("Detector loaded successfully");
});

detector.addEventListener("onInitializeFailure", function () {
    console.log("Failed to load detector");
});

function onStart() {
  if (detector && !detector.isRunning) {
      detector.start();
      console.log("detector started")
  }
};

function onStop() {
  if (detector && detector.isRunning) {
    detector.stop();
  }
};

detector.addEventListener("onWebcamConnectFailure", function() {
  alert("Webcam access denied");
});

detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp){
if(faces.length > 0 && (Number(faces[0].expressions.browRaise)).toFixed(0)>= 99){
  console.log((Number(faces[0].expressions.browRaise)).toFixed(0));

}});

$(document).ready();
