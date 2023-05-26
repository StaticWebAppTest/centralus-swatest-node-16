module.exports = async function (context, req) {
  const date = "2023-05-26T19:06:49.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

