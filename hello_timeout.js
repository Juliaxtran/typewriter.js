const greeting = () => {
console.log("43llo th3re w0rld");
};


const myTimeout = setTimeout(greeting, 3000);


const myTimeout2 = () => {
  setTimeout(() => {
      console.log("43llo");
  }, 1000);
  setTimeout(() => {
      console.log("th3re");
  }, 1000);
  setTimeout(() => {
    console.log("w0rld");
  }, 1000);
};

myTimeout2();