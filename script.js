const countdown = () => {
    const launchDate = new Date("June 30, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const difference = launchDate - currentDate;
  
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
  
    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);
    
    // using my tenary condition statement, i want to add a 0 time the hours, minutes and seconds is less than 10
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;


    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;
  }
  // I want to write a call back function to callback the countdpwn function every millisecond(1second)
  setInterval(countdown, 1000);