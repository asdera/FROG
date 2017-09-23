var stream;
var video = document.getElementById('inputVideo');

navigator.webkitGetUserMedia(
    { video: true }, // Options
    function (localMediaStream) { // Success
        stream = localMediaStream;
        video.src = window.webkitURL.createObjectURL(stream);
    },
    function (err) { // Failure
        alert('getUserMedia failed: Code ' + err.code);
    }
);