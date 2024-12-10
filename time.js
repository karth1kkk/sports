
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    
    // Determine whether it's AM or PM
    var amPM = hours >= 12 ? 'PM' : 'AM';
  
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;
  
    // Add leading zero if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    var timeString = hours + ":" + minutes + amPM;
    
    // Update the content of the div with the current time
    document.getElementById("time-display").innerHTML = timeString;
  }
  
  // Call updateTime function initially to display time immediately
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);