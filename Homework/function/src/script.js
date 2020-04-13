// 1. Create a function that takes an integer number as an argument and returns
// “Even” for even numbers or “Odd” for odd numbers.

function whatKindOfInteger(x) {
  if (x % 2 === 0) return "even";
  else return "odd";
}

console.log(whatKindOfInteger(16));

// 2 .Trolls are attacking your comment section! Create a function that
// takes a string and returns a new string with all vowels removed. For example,
// “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.

function withoutVowels(string) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (!vowels[letter]) {
      result += string[i];
    }
  }
  return result;
}
result = withoutVowels("hello world");
console.log(result);

// 3. Write a function which repeats the given string exact number of times.
// For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.

function repeatString(input, times) {
  return input.repeat(times);
}
document.write(repeatString("whatsup", 2));
