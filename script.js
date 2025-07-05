const timeElement = document.getElementById("time");

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    hours = hours > 12 ? hours - 12 : 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedTime =
    [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") + ` ${period}`;

  timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();

// Project: Digital Clock with Glowing Effect
// Author: Kamran Javed
// Portfolio: https://kamranjaved.online
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.online
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.
