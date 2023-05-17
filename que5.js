function dataTest(text) {
    if (text.length === 0) 
     {
     return 'String should not be empty!'
      }
    if (typeof text !== 'string')
      {
        return 'It must be a string.'
      }
    let words = [];
   words = text.match(/\S+/g);
   let reverse_word = "";
   for (var i = 0; i < words.length; i++) {
      reverse_word += words[i].split('').reverse().join('') + " ";
   }
   return reverse_word
 }
 console.log(dataTest("abc"))
 console.log(dataTest("JavaScript Exercises"))
 console.log(dataTest(1234))
 