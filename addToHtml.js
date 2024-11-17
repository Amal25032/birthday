


// Function to change background, show two images, make card background transparent, play audio, and hide the button
function celebrate() {
  // Change the background color and background image of the body
  document.body.style.backgroundColor = "#ff6f61"; // Change to a new background color
  document.body.style.backgroundImage = "url('birthday1.jpg')"; // Replace with your image URL
  
  // Make the card background transparent
  const card = document.querySelector(".card");
  card.style.backgroundColor = "transparent"; // Set the card background to transparent

  // Show two images
  const imageContainer = document.getElementById("imageContainer");
  
  // Create and append the first image
  const img1 = document.createElement("img");
  img1.src = "ammamma1.jpg"; // Replace with your image URL
  img1.alt = "Celebration Image 1";
  img1.classList.add("image1"); // Add animation class for left-to-right movement
  imageContainer.appendChild(img1);

  // Create and append the second image
  const img2 = document.createElement("img");
  img2.src = "ammamma2.jpg"; // Replace with your second image URL
  img2.alt = "Celebration Image 2";
  img2.classList.add("image2"); // Add animation class for right-to-left movement
  imageContainer.appendChild(img2);

  // Play the audio
  const audio = document.getElementById("celebrateAudio");
  audio.play();

  // Hide the "Celebrate Now" button
  const button = document.querySelector(".button");
  button.style.display = "none"; // This hides the button after it is clicked
}
