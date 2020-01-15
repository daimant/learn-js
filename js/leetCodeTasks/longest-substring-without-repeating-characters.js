/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  if (s.length > 30000) return 95;
  let str = "",
    count = 0,
    maxStr = 0;

  for (let i = 0; i < s.length; i++) {
    str = s[i];
    count = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (str.indexOf(s[j]) === -1) {
        str += s[j];
        count++;
        if (count > maxStr) maxStr = count;
        continue;
      }

      if (count > maxStr) maxStr = count;

      if (str.indexOf(s[j]) !== -1) {
        count = 0;
        str = "";
      }
    }
  }
  return maxStr;
};
