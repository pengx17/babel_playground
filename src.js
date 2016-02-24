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

//parallel();

//////

// Verify when exception can be caught in an async function
function testExceptions() {
  async function foo() {
    throw 'some error';
  }

  // This does not catch exception:
  try {
    foo();
  } catch(e) {
    console.log("normal try/catch" + e);
  }

  // This does not catch the exception
  (async () => {
    try {
      foo();
    } catch(e) {
      console.log("async try/catch without await" + e);
    }
  })();

  // This does catch the exception
  (async () => {
    try {
      await foo();
    } catch(e) {
      console.log("async try/catch with await" + e);
    }
  })();
}

//testExceptions();
