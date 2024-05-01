export const AnimateText = (text) => {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    arr.push(text.charAt(i));
  }

  return arr;
};
