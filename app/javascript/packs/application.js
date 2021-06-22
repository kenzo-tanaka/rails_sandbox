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

import $ from "jquery";

$(document).on("turbolinks:load", function () {
  $("#article_video").on("change", (event) => {
    const $file = event.currentTarget.files[0];
    const $video = $(".js-video-player");
    $video.css("display", "block");
    $video.attr("src", URL.createObjectURL($file));

    const video = document.querySelector(".js-video-player");
    const canvas = document.getElementById("canvasId");
    const img = document.getElementById("imgId");

    video.addEventListener("pause", () => {
      canvas.style.display = "block";
      img.style.display = "block";

      draw(video, canvas, img);
    });
  });

  const draw = (video, canvas, img) => {
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL();
    img.setAttribute("src", dataUrl);
  };
});
