module.exports = async function (context, req) {
  const date = "2023-05-20T20:08:24.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

