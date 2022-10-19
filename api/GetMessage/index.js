module.exports = async function (context, req) {
  const date = "2022-10-19T19:21:11.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

