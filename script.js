const clock = document.querySelector("#clock");
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  //   console.log(time);
  clock.textContent = time;
}, 1000);
