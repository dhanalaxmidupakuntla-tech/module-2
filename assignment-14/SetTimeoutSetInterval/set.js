// Set countdown time manually here
let seconds = 10; 

console.log(`Countdown starts from ${seconds} seconds...`);

let timer = setInterval(() => {
  seconds--;
  console.log(`Remaining: ${seconds} seconds`);

  if (seconds <= 0) {
    clearInterval(timer);
    console.log("⏳ Countdown Complete!");
  }
}, 1000);

// Stop countdown after 4 seconds (example)
setTimeout(() => {
  clearInterval(timer);
  console.log("Countdown stopped by timeout!");
}, 4000);
