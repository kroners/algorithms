// exercise with doX

const doA = (callback = () => {}) => {
  console.log("pre A");
  callback();
  console.log("A");
};

const doB = (callback = () => {}) => {
  console.log("pre B");
  callback();
  console.log("B");
};

const doC = (callback = () => {}) => {
  console.log("pre C");
  callback();
  console.log("C");
};

const doD = (callback = () => {}) => {
  console.log("pre D");
  callback();
  console.log("D");
};

const doE = (callback = () => {}) => {
  console.log("pre E");
  callback();
  console.log("E");
};

const doF = (callback = () => {}) => {
  console.log("pre F");
  callback();
  console.log("F");
};

// console.log("doing A");
doA(() => {
  //   console.log("doing B");
  doB();
  //   console.log("after B");
  //   console.log("doing C");
  doC(() => {
    // console.log("doing D");
    doD();
    // console.log("after D");
  });
  //   console.log("after C");
  //   console.log("doing E");
  doE();
  //   console.log("after E");
});
// console.log("after A");
// console.log("doing F");
doF();
// console.log("after F");
