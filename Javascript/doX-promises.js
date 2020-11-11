const getTask = ({ message, fail }) => {
  return new Promise((resolve, reject) => {
    const { success = "All Success", error = "Get Errors" } = message;
    console.log("before setTimeout");
    setTimeout(() => {
      if (!fail) resolve({ sms: success });
      else reject({ sms: error });
    }, 2000);
    console.log("after setTimeout");
  });
};

let message = {
  success: "Hello World",
  error: "Bye world"
};

// console.log(typeof getTask);
// getTask({ message, fail: false })
//   .then(({ sms }) => console.log(`OK ==> ${sms}`))
//   .catch(({ sms }) => console.log(`ERROR ==> ${sms}`));

// doing X

const doA = () => {
  let pA = new Promise(function(resolve, reject) {
    console.log("before resolve A");
    resolve("A");
    console.log("after resolve A");
  });
  pA.then(function(v) {
    console.log(v);
  });
  return pA;
};

const doB = new Promise(function(resolve, reject) {
  resolve("B");
});

const doC = new Promise(function(resolve, reject) {
  resolve("C");
});

const doD = new Promise(function(resolve, reject) {
  resolve("D");
});

const doE = new Promise(function(resolve, reject) {
  resolve("E");
});

const doF = new Promise(function(resolve, reject) {
  resolve("F");
});

doA();
