// Write ES6 codes here

// Return a new promise which will resolve itself after some milliseconds
function delay(milliseconds) {
  return new Promise(res => {
    setTimeout(() => {
      console.log(`Res after ${milliseconds} milliseconds`);
      res();
    }, milliseconds);
  });
}

// Run multiple promises in parallel
const parallel = async () => {
  const delays = [];
  for (let i = 0; i < 10; i ++) {
    delays.push(delay(1000 * i));
  }
  await Promise.all(delays);
  console.log("parallel done");
}

parallel();
