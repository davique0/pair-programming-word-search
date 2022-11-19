const wordSearch = (letters, word) => {
  if (!word) return undefined;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (let y = 0; y < letters[0].length; y++) {
        const verticalJoin = [];
        for (let x = 0; x < letters.length; x++) {
          verticalJoin.push(letters[x][y]);
        }
        let verticalWord = verticalJoin.join('');
        if (verticalWord.includes(word)) return true;
      }
    }
  }
  return false;
};
// Made by: @brotherludi and @davique0

module.exports = wordSearch;