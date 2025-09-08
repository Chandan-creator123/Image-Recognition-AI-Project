// load webcam
Webcam.attach("#webcam");
let model = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/urKgqL6Wu/model.json",
  function () {
    console.log("Sucessfully Loaded");
  }
);

function capture() {
  Webcam.snap(function (image) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="${image}" id="snapshot" style="border-radius:10px;">`;
    document.getElementById("message").textContent = "Successfully Captured!";
  });
}

function reload() {
  window.location.reload();
}

function recognize() {
  let img = document.getElementById("snapshot");
  if (!img) {
    alert("No image captured. Please capture an image first.");
    return;
  }
  model.classify(img, function (error, result) {
    if (error) {
      alert("Something went wrong: " + error);
    } else {
      object.textContent = `Object Name : ${result[0].label}`;
      accuracy.textContent = `Accuracy : ${(result[0].confidence * 100).toFixed(
        2
      )}%`;
    }
  });
}
