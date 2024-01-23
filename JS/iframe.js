
// Obtener el elemento iframe
var iframe = document.getElementsByClassName('miIframe');

// Acceder al contenido del iframe
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

// Manipular el video dentro del iframe
var video = iframeDocument.querySelector('video');

// Modificar los controles del video
if (video) {
    video.controls = true;
}