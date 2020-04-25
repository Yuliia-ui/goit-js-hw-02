const findLongestWord = function(string) {
  const words = string.split('');
  let wordLength = 0;
  longestWord = string[0];
  for (let i = 0; i < words.length; i += 1) {
    if (string[i] < longestWord) {
      longestNumber = items[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
