module.exports = async function (context, req) {
  const date = "2022-06-18T22:09:16.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

