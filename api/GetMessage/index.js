module.exports = async function (context, req) {
  const date = "2022-12-20T22:08:49.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

