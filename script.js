const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

//function to set the source of videoElement and then play it
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

//adding eventListener to the button
button.addEventListener("click", async () => {
  //disabling the button
  button.disabled = true;
  //requesting for the picture in picture
  await videoElement.requestPictureInPicture();
  //enabling back the button when pip request is successfully called
  button.disabled = false;
});

//on Load
selectMediaStream();
