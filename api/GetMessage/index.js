module.exports = async function (context, req) {
  const date = "2022-04-11T02:43:49.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

