var audio = new Audio(); // Create an <audio> tag

// Create the play/pause and stop buttons
function init(){
  var playing = true;

  // Get the play/pause button element and append the audio play/pause method to onclick
  var playtoggle = document.getElementById('playtoggle');
  playtoggle.addEventListener('click', function(){
    if (playing == true) {
      audio.pause();
      document.getElementById('playtoggle').innerHTML = "[Play]";
      playing = false;
    } else {
      audio.play();
      document.getElementById('playtoggle').innerHTML = "[Pause]";
      playing = true;
    }
  }, false);

  // Get the stop button element and append my stop trick to onclick
  var stop = document.getElementById('stop');
  stop.addEventListener('click', function(){
    audio.setAttribute('src', 'stop.mp3'); // Trick to stop buffering: play a short silent audio file
    audio.play();
    document.getElementById('playtoggle').innerHTML = ""; // Hide the play toggle while stopped
    document.getElementById('radio').innerHTML = ""; // Hide radio name
    document.getElementById('stop').innerHTML = "[Stopped]";
    playing = false;
  }, false);
}

function player(radio, id){
  audio.setAttribute('src', radio); // Load the stream
  audio.play();
  
  station = document.getElementById(id).innerHTML; // Get current radio name
  document.getElementById('radio').innerHTML = station; // Show current radio

  document.getElementById('stop').innerHTML = "[Stop]"; // Show the stop button
  document.getElementById('playtoggle').innerHTML = "[Pause]"; // Show the pause button
}