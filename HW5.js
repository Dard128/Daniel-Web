let secretMessage = [
  "Programing",
  "or",
  "Coding",
  "about",
  "what",
  "you",
  "get",
  "right",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
  "to",
  "Program",
  "UPDATED",

];



secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.slice(6, 11);
secretMessage.splice(6, 5, 'know');


console.log(secretMessage);