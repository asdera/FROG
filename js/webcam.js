var errorCallback = function (e) {
    console.log('Reeeejected!', e);
};

// Not showing vendor prefixes.
navigator.getUserMedia({ video: true, audio: true }, function (localMediaStream) {
    var video = document.getElementsByTagName('video')[0];
    video.src = window.URL.createObjectURL(localMediaStream);

    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function (e) {
        // Ready to go. Do some stuff.
    };
}, errorCallback);