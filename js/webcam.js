// Check that the browser supports getUserMedia.
// If it doesn't show an alert, otherwise continue.

function start() {
    if (navigator.getUserMedia) {
        // Request the camera.
        navigator.getUserMedia(
            // Constraints
            {
                video: true
            },

            // Success Callback
            function (localMediaStream) {
                var vid = document.getElementById('inputVideo');

                vid.src = window.URL.createObjectURL(localMediaStream);
            },

            // Error Callback
            function (err) {
                // Log the error to the console.
                console.log('The following error occurred when trying to use getUserMedia: ' + err);
            }
        );

    } else {
        alert('Sorry, your browser does not support getUserMedia');
    }

}