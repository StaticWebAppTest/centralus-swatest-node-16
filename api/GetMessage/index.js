module.exports = async function (context, req) {
  const date = "2022-03-06T00:41:25.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

