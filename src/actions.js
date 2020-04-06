const inc = () => {
  return { type: "INC" };
};

const dec = () => {
  return { type: "DEC" };
};

const rnd = (payload) => {
  return { type: "RND", payload };
};

export { inc, dec, rnd };
