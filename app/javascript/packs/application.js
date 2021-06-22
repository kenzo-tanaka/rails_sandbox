// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("jquery");
require("@client-side-validations/client-side-validations");
require("@client-side-validations/simple-form");
require("@client-side-validations/simple-form/dist/simple-form.bootstrap4");

document.addEventListener("turbolinks:load", () => {
  const videoInput = document.querySelector(".js-video-input");
  const video = document.querySelector(".js-video-player");
  const canvas = document.getElementById("canvasId");
  const img = document.getElementById("imgId");
  const captureLink = document.querySelector(".js-capture-thumbnail");

  videoInput.addEventListener("change", (event) => {
    const file = event.currentTarget.files[0];
    videoPreview(file, video);
  });

  captureLink.addEventListener("click", () => {
    img.style.display = "block";
    draw(video, canvas, img);
  });

  const videoPreview = (file, videoTag) => {
    videoTag.style.display = "block";
    videoTag.setAttribute("src", URL.createObjectURL(file));
  };

  // https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Using_images
  const draw = (video, canvas, img) => {
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL();
    img.setAttribute("src", dataUrl);
  };
});
